import LucideKey from '$lib/component/library/lucide/LucideKey.svelte';
import LSettingTable from '$lib/component/local/index/other/menu/setting-menu/LSettingTable.svelte';
import LThemeController from '$lib/component/local/index/other/menu/setting-menu/LThemeController.svelte';
import type { TabContentInterface } from '../interface/tabcontent.interface';

export const MariAdminAppTabContent: TabContentInterface[] =[
    {tabName: "my_tabs", arialLabel: "Appearance Controller", component: LThemeController, icon: LucideKey},
    {tabName: "my_tabs", arialLabel: "Shortcut Keys", component: LSettingTable, icon: LucideKey},
]