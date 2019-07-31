function getCookie(name) {
  const cookie = document.cookie;
  const cookieReg = new RegExp(`(?:^|; |;)\s*${name}=([^;]*)`, 'gm');
  let result = cookieReg.exec(cookie);
  if (result) {
    return decodeURIComponent(result[1]);
  }
  return void 0;
}
function setCookie(name, value) {
  let date = new Date('2089-12-31');
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${date.toGMTString()}; path=/;`;
}