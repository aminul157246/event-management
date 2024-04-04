function temp() {
    let counter = 0

    return function () {
        counter = counter + 1;
    }
}

const add = temp()
add()
console.dir(add)
