/**
 * Extension API Module
 * واجهة برمجية للإضافات
 */

export interface Extension {
  id: string;
  name: string;
  version: string;
  description: string;
  author: string;
  activate: () => void;
  deactivate: () => void;
}

export interface ExtensionContext {
  extensionPath: string;
  extensionUri: string;
  globalState: any;
  workspaceState: any;
}

export class ExtensionManager {
  private extensions: Map<string, Extension>;
  private activeExtensions: Set<string>;
  private context: ExtensionContext;

  constructor(context: ExtensionContext) {
    this.extensions = new Map();
    this.activeExtensions = new Set();
    this.context = context;
  }

  /**
   * ✨ Extensions: Register an extension
   */
  public registerExtension(extension: Extension): boolean {
    if (this.extensions.has(extension.id)) {
      console.warn(`Extension ${extension.id} already registered`);
      return false;
    }

    this.extensions.set(extension.id, extension);
    return true;
  }

  /**
   * ✨ Extensions: Activate an extension
   */
  public activateExtension(extensionId: string): boolean {
    const extension = this.extensions.get(extensionId);
    if (!extension) return false;

    try {
      extension.activate();
      this.activeExtensions.add(extensionId);
      console.log(`✅ Extension activated: ${extensionId}`);
      return true;
    } catch (error) {
      console.error(`❌ Failed to activate extension: ${extensionId}`, error);
      return false;
    }
  }

  /**
   * ✨ Extensions: Deactivate an extension
   */
  public deactivateExtension(extensionId: string): boolean {
    const extension = this.extensions.get(extensionId);
    if (!extension) return false;

    try {
      extension.deactivate();
      this.activeExtensions.delete(extensionId);
      console.log(`✅ Extension deactivated: ${extensionId}`);
      return true;
    } catch (error) {
      console.error(`❌ Failed to deactivate extension: ${extensionId}`, error);
      return false;
    }
  }

  /**
   * ✨ Extensions: Get all extensions
   */
  public getAllExtensions(): Extension[] {
    return Array.from(this.extensions.values());
  }

  /**
   * ✨ Extensions: Get active extensions
   */
  public getActiveExtensions(): Extension[] {
    return Array.from(this.activeExtensions)
      .map((id) => this.extensions.get(id))
      .filter((ext) => ext !== undefined) as Extension[];
  }

  /**
   * ✨ Extensions: Unregister an extension
   */
  public unregisterExtension(extensionId: string): boolean {
    if (this.activeExtensions.has(extensionId)) {
      this.deactivateExtension(extensionId);
    }
    return this.extensions.delete(extensionId);
  }

  /**
   * ✨ Extensions: Check if extension is active
   */
  public isExtensionActive(extensionId: string): boolean {
    return this.activeExtensions.has(extensionId);
  }
}
