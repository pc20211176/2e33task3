input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showNumber(2)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showNumber(4)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . # .
        . # # # .
        `)
})
