input.onButtonPressed(Button.A, function () {
    if (H < 23) {
        H += 1
    } else {
        H = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + H + ":" + form_m)
})
input.onButtonPressed(Button.B, function () {
    if (M < 59) {
        M += 1
    } else {
        M = 0
    }
})
let form_m = ""
let M = 0
let H = 0
music.setTempo(100)
H = 12
M = 0
if (M < 10) {
    form_m = "0" + M
} else {
    form_m = " " + M
}
basic.forever(function () {
    basic.showString("" + H + ":" + form_m)
    basic.pause(60 * 1000)
    if (M < 59) {
        M += 1
    } else {
        M = 0
        if (H < 23) {
            H += 1
        } else {
            H = 0
        }
    }
    if (M < 10) {
        form_m = "0" + M
    } else {
        form_m = " " + M
    }
})
