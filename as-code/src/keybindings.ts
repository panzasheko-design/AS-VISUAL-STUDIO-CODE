/**
 * Key Bindings Configuration
 * إعدادات الاختصارات
 */

export const KeyBindings = {
  // File operations
  'ctrl+s': 'Save file',
  'ctrl+shift+s': 'Save all files',
  'ctrl+o': 'Open file',
  'ctrl+n': 'New file',
  'ctrl+w': 'Close file',

  // Editing
  'ctrl+z': 'Undo',
  'ctrl+y': 'Redo',
  'ctrl+x': 'Cut',
  'ctrl+c': 'Copy',
  'ctrl+v': 'Paste',

  // Search and Replace
  'ctrl+f': 'Find',
  'ctrl+h': 'Find and Replace',
  'ctrl+g': 'Go to line',

  // Code Actions
  'ctrl+space': 'Code completion',
  'ctrl+shift+p': 'Command palette',
  'alt+up': 'Move line up',
  'alt+down': 'Move line down',

  // Debugging
  'f5': 'Start debugging',
  'f9': 'Toggle breakpoint',
  'f10': 'Step over',
  'f11': 'Step into',

  // Collaboration
  'ctrl+alt+c': 'Start collaboration',
  'ctrl+alt+j': 'Join session',
};

export const getKeyBindingDescription = (shortcut: string): string => {
  return KeyBindings[shortcut as keyof typeof KeyBindings] || 'Unknown command';
};
