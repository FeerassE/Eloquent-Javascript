function sumDigPow(a, b) {
  let final = [];
  for (let i = a; i < b; i++){
    let sum = 0;
    for(let p = 0; p < i.toString().length; p++){
      let stringI = i.toString();
      
      sum += Math.pow(parseInt(stringI[p]),(p+1));
    }
    if(sum == i){
    final.push(sum);
    }
  }
  return final;
}

console.log(sumDigPow(1, 100));