import { TauriFunctionEnum } from "$lib/model/enum/tauri-function.enum";
import { invoke } from "@tauri-apps/api/core";

/**
 * Focuses the current window.
 */
export function focusWindow() {
    invoke(TauriFunctionEnum.FOCUS_WINDOW);
}

/**
 * Hides the current window.
 */
export function hideWindow() {
    invoke(TauriFunctionEnum.HIDE_WINDOW);
}

/**
 * Maximizes or unmaximizes the current window.
 */
export function maximizeWindow() {
    invoke(TauriFunctionEnum.MAXIMIZE_WINDOW);
}

/**
 * Opens a new window.
 */
export function openWindow() {
    invoke(TauriFunctionEnum.OPEN_WINDOW);
}

/**
 * Refreshes the current window.
 */
export function refreshWindow() {
    invoke(TauriFunctionEnum.REFRESH_WINDOW);
}

/**
 * Sets the default size of the current window.
 */
export function setDefaultSizeWindow() {
    invoke(TauriFunctionEnum.SET_DEFAULT_SIZE_WINDOW);
}


/**
 * Close window.
 */
export function exitWindow() {
    invoke(TauriFunctionEnum.EXIT_WINDOW);
}


/**
 * Minimize window.
 */
export function minimizeWindow() {
    invoke(TauriFunctionEnum.MINIMIZE_WINDOW)
}