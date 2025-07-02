use serde::Serialize;

#[derive(Serialize)]
pub struct DeviceInformation<'a> {
    pub arch: &'a str,
    pub exe_extension: String,
    pub family: &'a str,
    pub hostname: String,
    pub locale: Option<String>,
    pub platform: &'a str,
    pub version: String,
    pub username: String,
}

#[derive(Serialize)]
pub struct SystemInformation {
    pub cpu: String,
    pub global_cpu_usage: f32,
    pub available_memory: u64,
    pub total_memory: u64,
    pub used_memory: u64,
    pub free_swap: u64,
    pub used_swap: u64,
    pub total_swap: u64,
    pub processes: u64,
    pub free_memory: u64,
}
