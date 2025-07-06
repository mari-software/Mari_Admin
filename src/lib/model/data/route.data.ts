import LucideBellElectric from '$lib/component/library/lucide/LucideBellElectric.svelte';
import LucideBookText from '$lib/component/library/lucide/LucideBookText.svelte';
import LucideCable from '$lib/component/library/lucide/LucideCable.svelte';
import LucideDatabaseZap from '$lib/component/library/lucide/LucideDatabaseZap.svelte';
import LucideGhost from '$lib/component/library/lucide/LucideGhost.svelte';
import LucideLaptop from '$lib/component/library/lucide/LucideLaptop.svelte';
import LucideLayoutGrid from '$lib/component/library/lucide/LucideLayoutGrid.svelte';
import LucidePersonStanding from '$lib/component/library/lucide/LucidePersonStanding.svelte';
import LucideSettings from '$lib/component/library/lucide/LucideSettings.svelte';
import LucideSignature from '$lib/component/library/lucide/LucideSignature.svelte';
import LucideStore from '$lib/component/library/lucide/LucideStore.svelte';
import LucideWaypoints from '$lib/component/library/lucide/LucideWaypoints.svelte';
import type { RouteInterface } from '../interface/route.interface';

export const MariAdminAppRoute: RouteInterface[] = [
	{
		name: 'Documentation',
		icon: LucideBookText,
		url: '/app/documentation-app'
	},
	{
		name: 'Applications',
		icon: LucideLayoutGrid,
		url: '/app/applications-app'
	},
	{
		name: 'Integrated',
		icon: LucideCable,
		url: '/app/integrated-app'
	},
	{
		name: 'Notifications',
		icon: LucideBellElectric,
		url: '/app/notifications-app'
	},
	{
		name: 'VPN',
		icon: LucideWaypoints,
		url: '/app/vpn-app'
	},
	{
		name: 'Sudo',
		icon: LucideGhost,
		url: '/app/sudo-app'
	}
];

export const MariAdminMenuAppRoute: RouteInterface[] = [
	{
		name: 'Profile',
		icon: LucideSignature,
		url: '/menu/profile-menu'
	},
	{
		name: 'Setting',
		icon: LucideSettings,
		url: '/menu/setting-menu'
	}
];

export const MariAdminSudoAppRoute: RouteInterface[] = [
	{
		name: 'Cult',
		icon: LucidePersonStanding,
		url: '/app/sudo-app/cult-sudo'
	},
	{
		name: 'War Machine',
		icon: LucideLaptop,
		url: '/app/sudo-app/war-machine-sudo'
	}
];

export const MariAdminApplicationsRoute: RouteInterface[] = [
	{
		name: 'Mari Software',
		icon: LucideStore,
		url: '/app/applications-app/mari-software-applications'
	},
	{
		name: 'DBMS',
		icon: LucideDatabaseZap,
		url: '/app/applications-app/dbms-applications'
	}
];
