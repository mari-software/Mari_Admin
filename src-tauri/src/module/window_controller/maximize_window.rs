use tauri::{AppHandle, Manager, Runtime};

use super::set_default_size_window::set_default_size_window;

#[tauri::command]
pub async fn maximize_window<R: Runtime>(app: AppHandle<R>) -> Result<(), String> {
    if let Some(window) = app.get_webview_window("main") {
        if window.is_maximized().unwrap_or(false) {
            let _ = set_default_size_window(app);
        } else {
            window.maximize().map_err(|e| e.to_string())?;
        }
    }
    Ok(())
}
