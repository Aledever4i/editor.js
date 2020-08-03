import Module from '../../__module';
import { Tools } from '../../../../types/api';

/**
 * @class ToolsAPI
 * Provides methods for working with the Tools
 */
export default class ToolsAPI extends Module {
  /**
   * Available methods
   *
   * @returns {Tools}
   */
  public get methods(): Tools {
    return {
        getInlineRenderHtml: (name: string): Function => this.getInlineRenderHtml(name),
      }
    };

  public getInlineRenderHtml(name: string): Function {
    return this.Editor.Tools.getInlineRenderHtml(name);
  }
}
