import { COLOR_MODE } from "../constants/color";
import { randomNumberRanges, sleep } from "../until/helpers";

const uiApi = {
  async randomMode() {
    await sleep(2000);
    const listMode = [
      COLOR_MODE.BLUE,
      COLOR_MODE.GREEN,
      COLOR_MODE.BROWN,
      COLOR_MODE.DARK,
      COLOR_MODE.LIGHT,
      COLOR_MODE.PINK,
    ];
    const index = randomNumberRanges(listMode.length);
    return { success: listMode[index] };
  },
};

export default uiApi;
