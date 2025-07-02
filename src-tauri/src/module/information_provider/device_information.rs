use sysinfo::System;
use tauri_plugin_os::{arch, exe_extension, family, hostname, locale, platform, version};

use crate::model::structs::information_provider::device_information_struct::{
    DeviceInformation, SystemInformation,
};

#[tauri::command]
pub fn get_device_information() -> DeviceInformation<'static> {
    DeviceInformation {
        arch: arch(),
        exe_extension: exe_extension().to_string(),
        family: family(),
        hostname: hostname(),
        locale: locale(),
        platform: platform(),
        version: version().to_string(),
        username: whoami::username(),
    }
}

#[tauri::command]
pub async fn get_system_information() -> SystemInformation {
    let mut sys = System::new_all();
    sys.refresh_all();

    SystemInformation {
        cpu: sys.cpus()[0].brand().to_string(), // Convert &str to String
        global_cpu_usage: sys.global_cpu_usage(),
        available_memory: sys.available_memory(),
        total_memory: sys.total_memory(),
        used_memory: sys.used_memory(),
        free_swap: sys.free_swap(),
        used_swap: sys.used_swap(),
        total_swap: sys.total_swap(),
        processes: sys.processes().len() as u64,
        free_memory: sys.free_memory(),
    }
}
