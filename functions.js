export default function rangeofNumbers(a,b){
    let arr = [];
    for (let i = a; i < b - 1; i++) {
      arr.push(i + 1);
    }
    return arr;
}