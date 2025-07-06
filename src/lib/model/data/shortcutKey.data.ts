import type { ShortcutKeyInterface } from '../interface/shortcutKey.interface';

export const MariAdminAppShortcutKey: ShortcutKeyInterface[] = [
    { id: 1, action: 'Copy', keys: ['ctrl', 'c'] },
    { id: 2, action: 'Paste', keys: ['ctrl', 'v'] },
    { id: 3, action: 'Leave', keys: ['esc'] },
    { id: 4, action: 'Delete', keys: ['ctrl', 'alt', 'del'] },
    
];