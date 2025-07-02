use tauri::{AppHandle, Manager, PhysicalSize, Runtime};

#[tauri::command]
pub fn set_default_size_window<R: Runtime>(app: AppHandle<R>) -> Result<(), String> {
    if let Some(window) = app.get_webview_window("main") {
        if window.is_minimized().unwrap_or(false) {
            window.unminimize().map_err(|e| e.to_string())?;
        }

        // Get the monitor size
        let monitor = window
            .current_monitor()
            .map_err(|e| e.to_string())?
            .ok_or("No monitor detected")?;

        let scale_factor = monitor.scale_factor();

        let width = (1400.0_f64 * scale_factor) as u32;
        let height = (1000.0_f64 * scale_factor) as u32;

        window
            .set_size(tauri::Size::Physical(PhysicalSize { width, height }))
            .map_err(|e| e.to_string())?;

        window.center().map_err(|e| e.to_string())?;

        window.show().map_err(|e| e.to_string())?;
        window.set_focus().map_err(|e| e.to_string())?;
    }

    Ok(())
}
