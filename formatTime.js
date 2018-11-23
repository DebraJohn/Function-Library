/**
 * @description
 * 将时间格式化为12小时制或24小时制
 * eg. 11:08 PM / 23:08
 *
 * @param {Object} time new Date()格式
 * @param {Number} type 12或24
 *
 */
function formatTime(time, type) {
  let hour = time.getHours();
  let minute = time.getMinutes();
  const z = hour > 12 ? 'PM' : 'AM';
  if (type == 12) {
    hour = hour > 12 ? hour - 12 : hour;
  }
  hour = hour > 10 ? hour : `0${hour}`;
  minute = minute > 10 ? minute : `0${minute}`;
  return type == 12 ? `${hour}:${minute} ${z}` : `${hour}:${minute}`;
}

/**
 * @description
 * 将月份/星期转为英文
 * eg. 11:08 PM / 23:08
 *
 * @param {Object} date new Date()格式
 * @param {Object} type 0-缩写， 1-全称
 *
 */
function getMonthString(date, type) {
  const monthString = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const monthAll = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'Octobor',
    'November',
    'December'
  ];
  return type ? monthAll[date.getMonth()] : monthString[date.getMonth()];
}

function getWeekdayString(date, type) {
  // 0-缩写， 1-全称
  const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const weekDayAll = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  return type ? weekDayAll[date.getDay()] : weekDay[date.getDay()];
}
