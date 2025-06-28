import LucideBookText from "$lib/component/library/lucide/LucideBookText.svelte";
import LucideCable from "$lib/component/library/lucide/LucideCable.svelte";
import LucideLaptop from "$lib/component/library/lucide/LucideLaptop.svelte";
import LucideSettings from "$lib/component/library/lucide/LucideSettings.svelte";
import LucideSignature from "$lib/component/library/lucide/LucideSignature.svelte";
import LucideStore from "$lib/component/library/lucide/LucideStore.svelte";
import type { RouteInterface } from "../interface/route.interface";

export const MariAdminAppRoute: RouteInterface[] = [
    {
        name: "Documentation",
        icon: LucideBookText,
        url: '/app/documentation-app'
    },
    {
        name: "Mari Software",
        icon: LucideStore,
        url: '/app/mari-software-app'
    },
    {
        name: "Integrated",
        icon: LucideCable,
        url: '/app/integrated-app'
    },
    {
        name: "Device Manager",
        icon: LucideLaptop,
        url: '/app/device-manager-app'
    }
]

export const IndexToolbarMenu: RouteInterface[] = [
    {
       name: "Profile",
        icon: LucideSignature,
        url: '/menu/profile-menu' 
    },
    {
       name: "Setting",
        icon: LucideSettings,
        url: '/menu/setting-menu' 
    },
]