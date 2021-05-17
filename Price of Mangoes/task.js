//https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript

function mango(quantity, price){
  let quantityFreeMango = Math.floor(quantity / 3);
  let paidMango = quantity - quantityFreeMango;
  return paidMango * price;
};

//Or

function mango(quantity, price){
  return (quantity - Math.floor(quantity / 3)) * price;
};
