/**
 * Language Server Protocol (LSP) Implementation
 * دعم بروتوكول خادم اللغة
 */

export interface Position {
  line: number;
  character: number;
}

export interface Diagnostic {
  range: {
    start: Position;
    end: Position;
  };
  severity: 'error' | 'warning' | 'information' | 'hint';
  message: string;
  code?: string;
}

export class LanguageServerProtocol {
  private diagnostics: Map<string, Diagnostic[]>;

  constructor() {
    this.diagnostics = new Map();
  }

  /**
   * ✨ LSP: Validate file syntax
   */
  public validateSyntax(filePath: string, code: string): Diagnostic[] {
    const result: Diagnostic[] = [];

    // Simple validation - can be extended with proper parser
    const lines = code.split('\n');
    lines.forEach((line, index) => {
      if (line.includes('TODO:')) {
        result.push({
          range: {
            start: { line: index, character: 0 },
            end: { line: index, character: line.length },
          },
          severity: 'hint',
          message: 'TODO item found',
          code: 'TODO',
        });
      }

      // Check for common errors
      const unclosedBrackets = (line.match(/\[/g) || []).length - (line.match(/\]/g) || []).length;
      if (unclosedBrackets !== 0) {
        result.push({
          range: {
            start: { line: index, character: 0 },
            end: { line: index, character: line.length },
          },
          severity: 'warning',
          message: 'Unmatched brackets detected',
          code: 'BRACKET_MISMATCH',
        });
      }
    });

    this.diagnostics.set(filePath, result);
    return result;
  }

  /**
   * ✨ LSP: Get hover information
   */
  public getHoverInfo(symbol: string): string {
    const infoMap: { [key: string]: string } = {
      function: 'Function declaration',
      class: 'Class declaration',
      const: 'Constant value',
      let: 'Block-scoped variable',
      var: 'Function-scoped variable',
    };

    return infoMap[symbol] || 'Symbol information not found';
  }

  /**
   * ✨ LSP: Find all references
   */
  public findReferences(symbol: string, code: string): Position[] {
    const positions: Position[] = [];
    const lines = code.split('\n');

    lines.forEach((line, lineIndex) => {
      let index = 0;
      while ((index = line.indexOf(symbol, index)) !== -1) {
        positions.push({
          line: lineIndex,
          character: index,
        });
        index += symbol.length;
      }
    });

    return positions;
  }

  /**
   * ✨ LSP: Provide completions
   */
  public getCompletions(prefix: string): string[] {
    const keywords = [
      'function',
      'class',
      'interface',
      'type',
      'const',
      'let',
      'var',
      'if',
      'else',
      'for',
      'while',
      'return',
      'import',
      'export',
      'async',
      'await',
      'try',
      'catch',
    ];

    return keywords.filter((k) => k.startsWith(prefix.toLowerCase()));
  }

  /**
   * ✨ LSP: Rename symbol
   */
  public renameSymbol(filePath: string, oldName: string, newName: string, code: string): string {
    return code.replace(new RegExp(`\\b${oldName}\\b`, 'g'), newName);
  }

  public getDiagnostics(filePath: string): Diagnostic[] {
    return this.diagnostics.get(filePath) || [];
  }
}
