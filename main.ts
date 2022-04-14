let stred = [2, 2]
let A = [0, 0]
let B = [1, 1]
function display() {
    
    basic.clearScreen()
    led.plot(A[0], A[1])
    led.plot(B[0], B[1])
    led.plotBrightness(stred[0], stred[1], 100)
}

function pohyb() {
    let x = [0, 1]
    let number = [2, 1]
    let counter = 0
    for (let v = 0; v < 8; v++) {
        basic.pause(300)
        display()
        if (counter % 2 == 0) {
            x.reverse()
        }
        
        if (counter == 4) {
            number[0] = -Math.abs(number[0])
            number[1] = -Math.abs(number[1])
        }
        
        counter += 1
        A[x[0]] = A[x[0]] + number[0]
        B[x[0]] = B[x[0]] + number[1]
        console.log(counter)
        console.log(A)
    }
}

basic.forever(function on_forever() {
    pohyb()
})
