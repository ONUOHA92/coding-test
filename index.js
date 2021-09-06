var listOfArray = [30,4,55,4,6,43,5,9,4,55,9,33,4,55,8,23,4];

// THIS IS THE MINIMUM VALUE OF AN ARRAY
let min = (array, min = array[0]) => {
  for(let i = 0; i < array.length; i++){
    if(min > array[i])min = array[i]
    
  }
  
  return min
  
}

// THIS IS THE MAXMIMUM VALUE OF AN ARRAY
let max = (array, max = array[0]) => {
    for(let i = 0; i < array.length; i++){
      if(max < array[i])max = array[i]
      
    }
    
    return max
  }



  function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}


  const resutl1  = getOccurrence(listOfArray, 4)
  const resutl2  = getOccurrence(listOfArray, 55)


console.log(`minimum value of an element ${min(listOfArray)}`)
console.log(`maximum value of an element ${max(listOfArray)}`)


// the result for the number of time a maximum and minmum number occur
console.log(`The minmum number of time: ${resutl1} `);
console.log(`The maximun of time: ${resutl2}`);  