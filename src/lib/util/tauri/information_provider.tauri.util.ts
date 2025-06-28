import { TauriFunctionEnum } from "$lib/model/enum/tauri-function.enum";
import { invoke } from "@tauri-apps/api/core";


export async function getAppVersion(): Promise<string> {
    try {
        const appVersion: string = await invoke(TauriFunctionEnum.GET_APP_VERSION);
        return appVersion;
    } catch (error) {
        console.error('Failed to get app version:', error);
        return 'Error fetching version';
    }
}

