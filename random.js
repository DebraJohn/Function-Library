
const arr = [2, 4, 32, 1, 43, 5, 6, 7, 134, 34, 25, 9];

// 方法一 从数组中随机抽取n个
function random(arr, amount) {
  const tempArray = [];
  for (let j = 0; j < arr.length; j++) {
    tempArray.push(arr[j]);
  }
  const newArray = [];
  const num = tempArray.length > amount ? amount : tempArray.length;
  for (let i = 0; i < num; i++) {
    const index = Math.floor(Math.random() * tempArray.length);
    newArray[i] = tempArray[index];
    tempArray.splice(index, 1);
  }
  return newArray;
}

// 方法二
const randomArr = (arr, amount) => {
  const arrCopy = JSON.parse(JSON.stringify(arr))
  const newArr = []
  let i = amount;
  while(arrCopy.length && i > 0) {
    const randomNum = arrCopy[~~(Math.random() * arrCopy.length)]
    newArr.push(randomNum)
    const index = arrCopy.findIndex(num => num === randomNum)
    index > -1 && arrCopy.splice(index, 1)
    i--
  }
  return newArr
}