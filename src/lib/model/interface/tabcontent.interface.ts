import type { Component } from "svelte";

export interface TabContentInterface {
    component: Component,
    ariaLabel: string,
    tabName: string
    icon?: Component
}