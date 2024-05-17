let Gas = 0
pins.digitalWritePin(DigitalPin.P5, 1)
pins.setPull(DigitalPin.P13, PinPullMode.PullDown)
basic.forever(function () {
    Gas = pins.digitalReadPin(DigitalPin.P0)
    if (Gas == 0) {
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
})
basic.forever(function () {
    if (Gas == 0) {
        basic.showString("Danger Gas!")
    } else {
        basic.showString("Safe~")
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
