/**
 * 计算垂直居中的高度
 * @description
 *
 * @param {Object} el 需要计算的DOM元素
 *
 */

const calcTop = el => {
  const maskHeight = el.height();
  const windowHeight = $(window).height();
  const posTop = (windowHeight - Number(maskHeight)) / 2;
  el.css('top', posTop);
};
