function getrandom(length){
    var number = Math.floor(Math.random() * length + 1)
    return number
}

export {getrandom}