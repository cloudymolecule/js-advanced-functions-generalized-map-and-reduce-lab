function map(array, myCallback){
    let newArray = []
    array.forEach(element => {
       newArray.push(myCallback(element))
    })
    return newArray
}


function reduce(array, myCallback, startingPoint){
    let total = 0
    let result = array.every(Boolean)
    if (startingPoint) {total = startingPoint}
    array.forEach(element => {
        total = myCallback(total, element)
    })
    if (total) {return total} else {return result}
}
