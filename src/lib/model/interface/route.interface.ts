import type { Component } from "svelte";

export interface RouteInterface {
  name: string;
  icon?: Component;
  url: string;
  desc?: string; 
}