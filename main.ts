input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    _message = serial.readString()
    if (_message.substr(0, 1) == "a") {
        radio.sendString("a")
        led.plotBrightness(0, 2, 255)
    } else if (_message.substr(0, 1) == "s") {
        radio.sendString("s")
        led.plotBrightness(4, 2, 255)
    } else if (_message.substr(0, 1) == "w") {
        radio.sendString("w")
        led.plotBrightness(2, 0, 255)
    } else if (_message.substr(0, 1) == "z") {
        radio.sendString("z")
        led.plotBrightness(2, 4, 255)
    } else if (_message.substr(0, 1) == "0") {
        radioNummer = 0
        radio.setGroup(radioNummer)
        basic.showString("" + (radioNummer))
    } else if (_message.substr(0, 1) == "1") {
        radioNummer = 1
        radio.setGroup(radioNummer)
        basic.showString("" + (radioNummer))
    } else if (_message.substr(0, 1) == "2") {
        radioNummer = 2
        radio.setGroup(radioNummer)
        basic.showString("" + (radioNummer))
    } else if (_message.substr(0, 1) == "3") {
        radioNummer = 3
        radio.setGroup(radioNummer)
        basic.showString("" + (radioNummer))
    } else if (_message.substr(0, 1) == "4") {
        radioNummer = 4
        radio.setGroup(radioNummer)
        basic.showString("" + (radioNummer))
    } else {
        radio.sendString("r")
        led.plotBrightness(0, 2, 0)
        led.plotBrightness(4, 2, 0)
        led.plotBrightness(2, 0, 0)
        led.plotBrightness(2, 4, 0)
    }
})
let radioNummer = 0
let _message = ""
let _id = 0
if (control.deviceSerialNumber() == 1395126174) {
    _id = 1
} else if (control.deviceSerialNumber() == 589949937) {
    _id = 2
} else if (control.deviceSerialNumber() == -1379123023) {
    _id = 3
} else if (control.deviceSerialNumber() == -592996470) {
    _id = 4
} else if (control.deviceSerialNumber() == 658422676) {
    _id = 5
} else if (control.deviceSerialNumber() == 734048875) {
    _id = 6
} else if (control.deviceSerialNumber() == 940218175) {
    _id = 0
} else if (control.deviceSerialNumber() == -1103148995) {
    _id = 7
} else if (control.deviceSerialNumber() == 1589646707) {
    _id = 8
} else if (control.deviceSerialNumber() == -1897610602) {
    _id = 9
} else {
    _id = -1
}
basic.showString("" + (_id))
