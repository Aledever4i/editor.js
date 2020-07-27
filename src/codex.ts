'use strict';

import { EditorConfig } from '../types';

/**
 * Apply polyfills
 */
import '@babel/register';

import 'components/polyfills';
import Core from './components/core';
import * as _ from './components/utils';

declare const VERSION: string;

/**
 * Editor.js
 *
 * Short Description (눈_눈;)
 *
 * @version 2.18.0
 *
 * @license Apache-2.0
 * @author CodeX-Team <https://ifmo.su>
 */
export default class EditorJS {
  /**
   * Promise that resolves when core modules are ready and UI is rendered on the page
   */
  public isReady: Promise<boolean>;

  /**
   * Stores destroy method implementation.
   * Clear heap occupied by Editor and remove UI components from the DOM.
   */
  public destroy: () => void;

  /** Editor version */
  public static get version(): string {
    return VERSION;
  }

  /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */
  constructor(configuration?: EditorConfig|string) {
    /**
     * Set default onReady function
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    let onReady = (): void => {};

    /**
     * If `onReady` was passed in `configuration` then redefine onReady function
     */
    if (typeof configuration === 'object' && typeof configuration.onReady === 'function') {
      onReady = configuration.onReady;
    }

    /**
     * Create a Editor.js instance
     */
    const editor = new Core(configuration);

    /**
     * We need to export isReady promise in the constructor
     * as it can be used before other API methods are exported
     *
     * @type {Promise<void>}
     */

    this.isReady = new Promise((res, _rej) => {
      editor.isReady.then(() => {
          this.exportAPI(editor);
          onReady();
          res(true);
        })
      });
  }

  /**
   * Export external API methods
   *
   * @param {Core} editor — Editor's instance
   */
  public exportAPI(editor: Core): void {
    const fieldsToExport = [ 'configuration' ];
    const destroy = (): void => {
      Object.values(editor.moduleInstances)
        .forEach((moduleInstance) => {
          if (_.isFunction(moduleInstance.destroy)) {
            moduleInstance.destroy();
          }
        });

      editor = null;

      for (const field in this) {
        if (Object.prototype.hasOwnProperty.call(this, field)) {
          delete this[field];
        }
      }

      Object.setPrototypeOf(this, null);
    };

    fieldsToExport.forEach((field) => {
      this[field] = editor[field];
    });

    this.destroy = destroy;

    Object.setPrototypeOf(this, editor.moduleInstances.API.methods);

    delete this.exportAPI;

    const shorthands = {
      blocks: {
        clear: 'clear',
        render: 'render',
      },
      caret: {
        focus: 'focus',
      },
      events: {
        on: 'on',
        off: 'off',
        emit: 'emit',
      },
      saver: {
        save: 'save',
      },
    };

    Object.entries(shorthands)
      .forEach(([key, methods]) => {
        Object.entries(methods)
          .forEach(([name, alias]) => {
            this[alias] = editor.moduleInstances.API.methods[key][name];
          });
      });
  }
}
