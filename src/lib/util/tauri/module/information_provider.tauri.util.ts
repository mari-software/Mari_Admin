import { TauriFunctionEnum } from '$lib/model/enum/tauri-function.enum';
import { invoke } from '@tauri-apps/api/core';
import type { DeviceInformationTauriInterface } from '../model/interface/information_provider.tauri.interface';

export async function getAppVersionTauri(): Promise<string> {
	try {
		const appVersion: string = await invoke(
			TauriFunctionEnum.GET_APP_VERSION
		);
		return appVersion;
	} catch (error) {
		console.error('Failed to get app version:', error);
		return 'Error fetching version';
	}
}

export async function getDeviceInformationTauri(): Promise<DeviceInformationTauriInterface> {
	try {
		const deviceInformation: DeviceInformationTauriInterface =
			await invoke(TauriFunctionEnum.GET_DEVICE_INFORMATION);
		return deviceInformation;
	} catch (error) {
		console.error('Failed to get device information:', error);
		return {} as DeviceInformationTauriInterface;
	}
}
