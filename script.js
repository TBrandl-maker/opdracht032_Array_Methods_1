// opdracht A

const addTheWordCool = function (array) {
    array.push("cool");
    return array;
}

console.log(addTheWordCool(["nice", "awesome", "tof"]));

// opdracht B

const amountOfElementsInArray = (array) => array.length

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

//opdracht C

const selectBelgiumFromBenelux = (array) => array[0]

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

//opdracht D

const lastElementInArray = (array) => array[array.length - 1];

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

//opdracht E

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (array) {
    return array.slice(1)
}
const impeachTrumpSplice = function (array) {
    return array.splice(1)
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//opdracht F

const stringsTogether = (array) => array.join(' ')

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"

//Opdracht G

const combineArrays = (array, array1) => array.concat(array1)


console.log(combineArrays([1, 2, 3], [4, 5, 6]))
  // resultaat: [1,2,3,4,5,6]
