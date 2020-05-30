const white = "#ffffff";
const poor = "#ff6529";
const bad = "#ff9f29";
const doNotRecommended = "#ffd129";
const prettyGood = "#4d96f0";
const perfect = "#6bc7a2";

export const getRatingColor = rating => {
  let bg,
    text = "";
  if (rating <= 3) {
    bg = poor;
    text = white;
  } else if (rating <= 5) {
    bg = bad;
    text = white;
  } else if (rating <= 6) {
    bg = doNotRecommended;
    text = white;
  } else if (rating <= 8) {
    bg = prettyGood;
    text = white;
  } else if (rating <= 10) {
    bg = perfect;
    text = white;
  }
  return {
    bg,
    text,
  };
};
