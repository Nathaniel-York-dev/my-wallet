import {CcColorsEnum} from "../enums/cc-colors.enum";

export default class ColorsHelper {
  private static prevColor: string = '';
  public static randomColor(): string {
    const colors = Object.values(CcColorsEnum);
    const color = colors[Math.floor(Math.random() * colors.length)];
    if (color === this.prevColor) {
      return this.randomColor();
    }
    this.prevColor = color;
    return color;
  }
}
