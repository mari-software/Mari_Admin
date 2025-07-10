import { ThemeEnum } from "$lib/model/enum/theme.enum";
import { themeState } from "$lib/store/state/theme.state.svelte";

const THEME_STORAGE_KEY = 'data-theme';
const DEFAULT_THEME = ThemeEnum.LIGHT;

export function setThemeFromLocalStorage(theme: ThemeEnum) {
  localStorage.setItem(THEME_STORAGE_KEY, theme);  
  themeState.theme = theme;
  document.documentElement.setAttribute(THEME_STORAGE_KEY, themeState.theme);
}

export function getThemeFromLocalStorage() {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (storedTheme && Object.values(ThemeEnum).includes(storedTheme as ThemeEnum)) {
        themeState.theme = storedTheme as ThemeEnum;
        document.documentElement.setAttribute(THEME_STORAGE_KEY, themeState.theme);
    } else {
        themeState.theme = DEFAULT_THEME;
        document.documentElement.setAttribute(THEME_STORAGE_KEY, themeState.theme);
    }
}