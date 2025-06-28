pub mod module;
use crate::module::{
    information_provider::app_information::get_app_version, 
    window_controller::{
        exit_window::exit_window, focus_window::focus_window, hide_window::hide_window, maximize_window::maximize_window, minimize_window::minimize_window, open_window::open_window, refresh_window::refresh_window, set_default_size_window::set_default_size_window
    }
};


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_updater::Builder::new().build())
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
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
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
