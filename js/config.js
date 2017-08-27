import { cdnUrl } from "../package.json";

const { hash } = window.location;
let config = {};
if (hash) {
  try {
    config = JSON.parse(hash.slice(1));
  } catch (e) {
    console.error("Failed to decode config from hash: ", e);
  }
}

const assetBase = process.env.NODE_ENV === "production" ? cdnUrl : "";
// Turn on the incomplete playlist window
export const skinUrl = config.skinUrl || `${assetBase}skins/base-2.91.wsz`;
export const audioUrl = config.audioUrl || `${assetBase}mp3/llama-2.91.mp3`;
export const playlistEnabled = config.playlist || false;
// Turn on the incomplete equalizer window
export const equalizerEnabled = config.equalizer || false;
export const noMarquee = config.noMarquee || false;
export const hideAbout = config.hideAbout || false;
export const initialState = config.initialState || undefined;
