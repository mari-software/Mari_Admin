import { FontEnum } from "$lib/model/enum/font.enum";
import { fontState } from "$lib/store/state/font.state.svelte";

const FONT_STORAGE_KEY = 'data-font';
const DEFAULT_FONT = FontEnum.Adwaita_Sans;

export function setFontFromLocalStorage(font: FontEnum) {
     localStorage.setItem(FONT_STORAGE_KEY, font);
     fontState.font = font;
     document.documentElement.setAttribute(FONT_STORAGE_KEY, fontState.font);
};

export function getFontFromLocalStorage() {
    const storedFont = localStorage.getItem(FONT_STORAGE_KEY);
    
    if (storedFont && Object.values(FontEnum).includes(storedFont as FontEnum)) {
        fontState.font = storedFont as FontEnum;
        document.documentElement.setAttribute(FONT_STORAGE_KEY, fontState.font);
    } else {
        fontState.font = DEFAULT_FONT;
        document.documentElement.setAttribute(FONT_STORAGE_KEY, fontState.font);
    }
}