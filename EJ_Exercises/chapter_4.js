// Data Structures: Objects and Arrays

/*

Objects - A data structure that groups values together.
Array - Data type for storing sequences of values.

*/

// The Sum of a Range

function range(start, end, step) {
    let array  = [];

    if (!arguments[2]) {
        for( let i = start; i < (end + 1); i++) {
            array.push(i);
        }
    }
    else {
        for( let i = start; i < (end + 1); i = i + step) {
            array.push(i);
        }
    }

    return array
}
// console.log(range(15,25, 2))

function sum(array){
    let sum = 0;
    for(i = 0; i < array.length; i++){
        sum = sum + array[i]
    }
    return sum;
}
//console.log(sum(range(15,17)))

// Reversing an Array

function reverseArray(array){
    let newArray = [];
    for(i = (array.length - 1); i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray
}


function reverseArrayInPlace(array){
    for(i = (array.length - 1); i > 0; i--){
        array.push(i);
        array.splice(i - 1, 1);
    }
    return array
}
// console.log(reverseArrayInPlace([1,2,3,4,5]));

// A List



var listEx = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};



function arrayToList(array){
    let list = {};
    for(let i = (array.length - 1); i >= 0; i--){
        if (i == (array.length - 1)) {
            list = {value: array[i], rest: null}
        }
        else {
            list = {value: array[i], rest: list}
            console.log(list);
        }
    }
    return list;
}

//console.log(arrayToList([1, 2, 3, 4]));

function listToArray(list){
    let newArray = [];
    for(let obj = list; obj; obj = obj.rest){
        newArray.push(obj.value)
    }
    return newArray;
}

function prepend(value, list){
    list = {value: value, rest: list};
    return list;
}

function nth(number, list){
    let newList = {};
    for(let obj = list; obj; obj = obj.rest){
        if ((obj.value) == number){
            newList = obj;
            return newList;
        }
        else if (obj == null){
            return undefined;
        }
    }
}

//console.log(nth(2,listEx));

//recursive version

function nthRecursive(list, number){
    if(!list){
        return undefined;
    }
    else if (number === 0){
        return list.value;
    }
    else {
        return nthRecursive(list.rest, number - 1);
    }
}

console.log(nthRecursive(listEx, 0));

// Deep Comparison

function deepEqual(v1, v2){
    if (v1 === v2){
        return true;
    }
    if ((v1 == null) || (v2 == null) || (typeof v1 != 'object') || (typeof v2 != 'object')) {
        return false;
    }

    let propsInV1 = 0, propsInV2 = 0;

    for (props in v1){
        propsInV1 += 1;
    }

    for (props in v2){
        propsInV2 += 2;
        if (!(props in v1) || !(deepEqual(v1[props], v2[props]))){
            return false;
        }
    }

    return propsInV1 == propsInV2;

}