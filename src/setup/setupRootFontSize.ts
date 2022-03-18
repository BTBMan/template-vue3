/**
 * 设置document的字体
 * @param  {number=1440} baseWidth - 设计搞的基准宽度
 * @param  {number=12} baseSize - 基础文字大小
 * @param  {boolean=false} limitInt - 是否限制为整数
 */
export function setupRootFontSize(
  baseWidth: number = 1440,
  baseSize: number = 12,
  limitInt: boolean = false,
) {
  const scale = document.documentElement.clientWidth / baseWidth;
  let fontSize = Math.round(baseSize * Math.min(scale, 2));

  if (limitInt) {
    if (fontSize <= 12 || (fontSize >= 12 && fontSize < 14)) {
      fontSize = 12;
    } else if (fontSize >= 14 && fontSize < 16) {
      fontSize = 14;
    } else if (fontSize >= 16) {
      fontSize = 16;
    }
  }

  document.documentElement.style.fontSize = `${fontSize}px`;

  window.onresize = () => {
    setupRootFontSize(baseWidth, baseSize, limitInt);
  };
}
