import { atom } from "recoil";

export const sidebarToggleState = atom({
  key: "sidebarState",
  default: true,
});

export const commandDataState = atom({
  key: "commandState",
  default: [],
});

export const errorDataState = atom({
  key: "errorState",
  default: false,
});

export const selectedCommandDataState = atom({
  key: "selectedCommandState",
  default: [],
});