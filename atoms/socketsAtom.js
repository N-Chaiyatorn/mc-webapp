import { atom } from "recoil";

export const socketsStatusState = atom({
  key: "socketsStatus",
  default: "Not connected",
});

export const socketsLatestDataState = atom({
  key: "socketsLatestData",
  default: "",
});
