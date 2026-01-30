let bipp_bapp_boom = false
let tid = 0
input.onButtonPressed(Button.A, function () {
    bipp_bapp_boom = true
    while (bipp_bapp_boom == true) {
        basic.pause(1000)
        tid += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(tid)
})
input.onButtonPressed(Button.B, function () {
    bipp_bapp_boom = false
})
basic.forever(function () {
	
})
