//https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript
function sc(floor){
  let screamArr = ["Pa!"];
  if (floor < 0, floor <= 1){
    screamArr.shift();
  } else if (floor > 1, floor <= 6){
    for (let j = 1; j < floor; j++){
      screamArr.unshift("Aa~");
    }
    screamArr.push("Aa!");
  } else if (floor > 6){
    for (let i = 1; i < floor; i++){
      screamArr.unshift("Aa~");
    }
  }
  let screamStr = screamArr.join(" ");
  return screamStr;
};
