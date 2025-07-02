export interface DeviceInformationTauriInterface {
	arch: string;
	exe_extension: string;
	family: string;
	hostname: string;
	locale?: string;
	platform: string;
	version: string;
	username: string;
}

export interface SystemInformationTauriInterface {
	cpu: string;
	global_cpu_usage: number;
	available_memory: number;
	total_memory: number;
	used_memory: number;
	free_swap: number;
	used_swap: number;
	total_swap: number;
	processes: number;
	free_memory: number;
}
