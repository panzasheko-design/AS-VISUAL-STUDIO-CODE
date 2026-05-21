/**
 * Theme Engine Module
 * محرك المظاهر والتخصيص
 */

export interface ThemeColors {
  background: string;
  foreground: string;
  accent: string;
  error: string;
  warning: string;
  success: string;
}

export interface Theme {
  id: string;
  name: string;
  isDark: boolean;
  colors: ThemeColors;
}

export class ThemeEngine {
  private themes: Map<string, Theme>;
  private currentTheme: string;

  constructor() {
    this.themes = new Map();
    this.currentTheme = 'dark';

    // Initialize default themes
    this.initializeThemes();
  }

  private initializeThemes(): void {
    this.themes.set('dark', {
      id: 'dark',
      name: 'Dark Theme',
      isDark: true,
      colors: {
        background: '#1e1e2e',
        foreground: '#e0e0e0',
        accent: '#00d4ff',
        error: '#ff5555',
        warning: '#ffaa00',
        success: '#55ff55',
      },
    });

    this.themes.set('light', {
      id: 'light',
      name: 'Light Theme',
      isDark: false,
      colors: {
        background: '#ffffff',
        foreground: '#333333',
        accent: '#0066cc',
        error: '#cc0000',
        warning: '#ff9900',
        success: '#00cc00',
      },
    });

    this.themes.set('ocean', {
      id: 'ocean',
      name: 'Ocean Theme',
      isDark: true,
      colors: {
        background: '#0f2942',
        foreground: '#e0f2ff',
        accent: '#00d4ff',
        error: '#ff6b6b',
        warning: '#ffd93d',
        success: '#6bcf7f',
      },
    });

    this.themes.set('dracula', {
      id: 'dracula',
      name: 'Dracula Theme',
      isDark: true,
      colors: {
        background: '#282a36',
        foreground: '#f8f8f2',
        accent: '#bd93f9',
        error: '#ff5555',
        warning: '#f1fa8c',
        success: '#50fa7b',
      },
    });
  }

  /**
   * ✨ Theme: Get current theme
   */
  public getCurrentTheme(): Theme {
    return this.themes.get(this.currentTheme) || this.themes.get('dark')!;
  }

  /**
   * ✨ Theme: Set theme
   */
  public setTheme(themeId: string): boolean {
    if (!this.themes.has(themeId)) return false;
    this.currentTheme = themeId;
    this.applyTheme();
    return true;
  }

  /**
   * ✨ Theme: Apply theme to DOM
   */
  private applyTheme(): void {
    const theme = this.getCurrentTheme();
    const root = document.documentElement;

    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    root.style.backgroundColor = theme.colors.background;
    root.style.color = theme.colors.foreground;
  }

  /**
   * ✨ Theme: Get all available themes
   */
  public getAvailableThemes(): Theme[] {
    return Array.from(this.themes.values());
  }

  /**
   * ✨ Theme: Create custom theme
   */
  public createCustomTheme(theme: Theme): void {
    this.themes.set(theme.id, theme);
  }

  /**
   * ✨ Theme: Remove theme
   */
  public removeTheme(themeId: string): boolean {
    if (themeId === 'dark' || themeId === 'light') return false; // Protect defaults
    return this.themes.delete(themeId);
  }
}
