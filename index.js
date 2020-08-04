const div = document.getElementById("container")

/* slowMath.add(6, 2)
.then(response => {
    div.append(response)
    return slowMath.multiply(response, 2)
})
.then(response => {
    div.append(response)
    return slowMath.divide(response, 4)
})
.then(response => {
    div.append(response)
    return slowMath.subtract(response, 3)
})
.then(response => {
    div.append(response)
    return slowMath.add(response, 98)
})
.then(response => {
    div.append(response)
    return slowMath.remainder(response, 2)
})
.then(response => {
    div.append(response)
    return slowMath.multiply(response, 50)
})
.then(response => {
    div.append(response)
    return slowMath.remainder(response, 40)
})
.then(response => {
    div.append(response)
    return slowMath.add(response, 32)
})
.then(response => {
    div.append(`The final result is ${response}.`)
})
.catch(e => div.append(e)) */

//Implementing the exact same operations with ES6 async/await syntax
async function doMath() {
    try {
        let result = await slowMath.add(6, 2)
        console.log(result)
        result = await slowMath.multiply(result, 2)
        console.log(result)
        result = await slowMath.divide(result, 4)
        console.log(result)
        result = await slowMath.subtract(result, 3)
        console.log(result)
        result = await slowMath.add(result, 98)
        console.log(result)
        result = await slowMath.remainder(result, 2)
        console.log(result)
        result = await slowMath.multiply(result, 50)
        console.log(result)
        result = await slowMath.remainder(result, 40)
        console.log(result)
        result = await slowMath.add(result, 32)
        console.log(`The final result is ${result}`)
    }
    catch (e) {
        console.log(e)
    }
}
doMath()