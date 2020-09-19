function sumItems(array) {
  /* three conditions, if 
  is array =>
  is num => increment i pass
  doesn't not exist  */

  let acc = 0;
  for(e of array) {
    if(Array.isArray(e)) {
      acc += sumItems(e);
    }
    else if (Number.isInteger(e)){
      acc += e;
    }   
  }
  return acc;




  // if(Array.isArray(array)) {
  //   return sumItems(array);
  // }
  // else if(array.length) {
  //   return array[0] + sumItems(array[1]);
  // }
  // return 0;
}

module.exports = sumItems;