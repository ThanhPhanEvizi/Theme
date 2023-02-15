export const randomNumberRanges = (target: number) => {
  return Math.floor(Math.random() * target);
};

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
