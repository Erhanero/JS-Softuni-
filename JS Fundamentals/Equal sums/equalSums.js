function equalSums(array) {

    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
  
    for (let i = 0; i < array.length; i++) {
      
        leftSum = 0;
        rightSum = 0;
        
        for (let j = 0; j < i; j++) {
            let currentNum = array[j]
            leftSum += currentNum;

        }
        for (k = i + 1; k < array.length; k++) {
            let currentNum2 = array[k];
            rightSum += currentNum2;

        }
        if (leftSum == rightSum) {
            console.log(i)
            isEqual = true;

            break;
        }
    }
    if (!isEqual) {
        console.log('no')
    }
}
