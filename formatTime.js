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
  const addZero = num => (num < 10 ? `0${num}` : num);
  let hour = time.getHours();
  let minute = time.getMinutes();
  if (type === 24) return `${hour}:${minute}`;
  if (hour > 12) return `${addZero(hour - 12)}:${addZero(minute)} PM`;
  return `${addZero(hour)}:${addZero(minute)} AM`;
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
