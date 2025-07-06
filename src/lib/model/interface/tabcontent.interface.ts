import type { Component } from "svelte";

export interface TabContentInterface {
    component: Component,
    arialLabel: string,
    tabName: string
    icon?: Component
}