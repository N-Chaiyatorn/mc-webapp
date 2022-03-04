import { atom } from "recoil";

export const sidebarToggleState = atom({
  key: "sidebarState",
  default: true,
});

export const modalToggleState = atom({
  key: "modalState",
  default: false,
});

export const commandDataState = atom({
  key: "commandState",
  default: [],
});

export const errorDataState = atom({
  key: "errorState",
  default: false,
});

export const filteredCommandDataState = atom({
  key: "filteredCommandState",
  default: [],
});