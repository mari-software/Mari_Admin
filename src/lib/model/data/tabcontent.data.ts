import LucideKey from '$lib/component/library/lucide/LucideKey.svelte';
import LSettingTable from '$lib/component/local/index/other/menu/setting-menu/LShortcutSettings.svelte';
import LThemeController from '$lib/component/local/index/other/menu/setting-menu/LAppearanceSettings.svelte';
import type { TabContentInterface } from '../interface/tabcontent.interface';

export const MariAdminAppTabContent: TabContentInterface[] =[
    {tabName: "my_tabs", ariaLabel: "Appearance Controller", component: LThemeController, icon: LucideKey},
    {tabName: "my_tabs", ariaLabel: "Shortcut Keys", component: LSettingTable, icon: LucideKey},
]