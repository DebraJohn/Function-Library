/**
 * 计算垂直居中的高度
 * @description
 * 部分低版本浏览器无法兼容css3
 * 利用js实现响应式垂直居中
 * @param {Object} el 需要计算的DOM元素
 *
 */

const calcTop = el => {
  const maskHeight = el.height();
  const windowHeight = $(window).height();
  const posTop = (windowHeight - Number(maskHeight)) / 2;
  el.css('top', posTop);
};
