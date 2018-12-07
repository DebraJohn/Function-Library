// 从数组中随机抽取n个
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