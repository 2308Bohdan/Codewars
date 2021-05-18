//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

let min = function(list) {
    let minNum = Math.min.apply(null, list);
    return minNum;
}

let max = function(list){
    let maxNum = Math.max.apply(null, list);
    return maxNum;
}
