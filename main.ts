let strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGBW)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(5)
    strip.show()
    basic.pause(100)
})
