#[tauri::command]
pub async fn get_current_iso_time_string() -> String {
    let now = chrono::Utc::now();
    let iso_time_string = now.to_rfc3339();
    iso_time_string
}

#[tauri::command]
pub async fn get_current_year_month_day_string() -> String {
    let now = chrono::Utc::now();
    let year_month_day_string = now.format("%Y-%m-%d").to_string();
    year_month_day_string
}
