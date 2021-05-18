//https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript

function dutyFree(normPrice, discount, hol){
  const savingMoney = normPrice * (discount / 100);
  const quantityBottles = Math.floor(hol / savingMoney);
  return quantityBottles;
}
