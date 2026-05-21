/**
 * Performance Optimization Module
 * تحسينات الأداء والسرعة
 */

export class PerformanceOptimizer {
  private cacheSize: number;
  private cache: Map<string, any>;

  constructor(maxCacheSize: number = 100) {
    this.cacheSize = maxCacheSize;
    this.cache = new Map();
  }

  /**
   * ✨ Performance: Enable code caching
   */
  public cacheResult(key: string, result: any): void {
    if (this.cache.size >= this.cacheSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, result);
  }

  /**
   * ✨ Performance: Get cached result
   */
  public getCachedResult(key: string): any {
    return this.cache.get(key);
  }

  /**
   * ✨ Performance: Lazy loading for files
   */
  public lazyLoadFile(filePath: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate file loading
        resolve(`Content of ${filePath}`);
      }, 100);
    });
  }

  /**
   * ✨ Performance: Debounce search operations
   */
  public debounceSearch(searchTerm: string, delay: number = 300): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([`Result for ${searchTerm}`]);
      }, delay);
    });
  }

  /**
   * ✨ Performance: Virtual scrolling for large files
   */
  public getVisibleLines(totalLines: number, viewportHeight: number, scrollPosition: number): number[] {
    const lineHeight = 20; // pixels
    const linesInViewport = Math.ceil(viewportHeight / lineHeight);
    const startLine = Math.floor(scrollPosition / lineHeight);
    const endLine = Math.min(startLine + linesInViewport, totalLines);
    
    const result: number[] = [];
    for (let i = startLine; i < endLine; i++) {
      result.push(i);
    }
    return result;
  }

  /**
   * ✨ Performance: Measure rendering time
   */
  public measureRenderTime(callback: () => void): number {
    const start = performance.now();
    callback();
    return performance.now() - start;
  }

  public clearCache(): void {
    this.cache.clear();
  }
}
