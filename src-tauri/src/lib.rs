pub mod model;
pub mod module;
use crate::module::{
    information_provider::{
        app_information::get_app_version,
        device_information::{get_device_information, get_system_information},
        network_information::get_ipv4_address,
        time_information::{get_current_iso_time_string, get_current_year_month_day_string},
    },
    window_controller::{
        exit_window::exit_window, focus_window::focus_window, hide_window::hide_window,
        maximize_window::maximize_window, minimize_window::minimize_window,
        open_window::open_window, refresh_window::refresh_window,
        set_default_size_window::set_default_size_window,
    },
};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_global_shortcut::Builder::new().build())
        .plugin(tauri_plugin_notification::init())
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_updater::Builder::new().build())
        .setup(|app| {
            #[cfg(desktop)]
            {
                // <Start> Tauri Plugin Autostart
                use tauri_plugin_autostart::MacosLauncher;
                use tauri_plugin_autostart::ManagerExt;

                let _ = app.handle().plugin(tauri_plugin_autostart::init(
                    MacosLauncher::LaunchAgent,
                    Some(vec!["--flag1", "--flag2"]),
                ));

                let autostart_manager = app.autolaunch();
                let _ = autostart_manager.enable();
                // <End> Tauri Plugin Autostart
            }

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            // Modules
            // Information
            get_app_version,
            // Window Controller
            focus_window,
            hide_window,
            maximize_window,
            open_window,
            refresh_window,
            set_default_size_window,
            exit_window,
            minimize_window,
            // Information Provider
            // Network Information
            get_ipv4_address,
            // Time Information
            get_current_iso_time_string,
            get_current_year_month_day_string,
            // Device Information
            get_system_information,
            get_device_information
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
