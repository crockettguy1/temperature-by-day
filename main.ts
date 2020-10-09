let NewestDay = 0
let NewDay = 0
let Day = 0
let OldDay = 0
let OldestDay = 0
let CurrentTemp = 0
let LastTemp = 0
let TodayTemp = 0
basic.forever(function () {
    for (let index = 0; index < 24; index++) {
        TodayTemp = (TodayTemp + input.temperature()) / 2
        basic.pause(900000)
        basic.pause(900000)
        basic.pause(900000)
        basic.pause(900000)
    }
    OldestDay = OldDay
    OldDay = Day
    Day = NewDay
    NewDay = NewestDay
    NewestDay = TodayTemp
    if (OldestDay <= 10) {
        led.unplot(0, 0)
        led.unplot(0, 1)
        led.unplot(0, 2)
        led.unplot(0, 3)
        led.plot(0, 4)
    } else if (OldestDay > 10 && OldestDay <= 15) {
        led.unplot(0, 0)
        led.unplot(0, 1)
        led.unplot(0, 2)
        led.unplot(0, 4)
        led.plot(0, 3)
    } else if (OldestDay > 15 && OldestDay <= 20) {
        led.unplot(0, 1)
        led.unplot(0, 3)
        led.unplot(0, 4)
        led.unplot(0, 0)
        led.plot(0, 2)
    } else if (OldestDay > 20 && OldestDay <= 25) {
        led.unplot(0, 2)
        led.unplot(0, 0)
        led.unplot(0, 3)
        led.unplot(0, 4)
        led.plot(0, 1)
    } else if (OldestDay > 25) {
        led.unplot(0, 1)
        led.unplot(0, 2)
        led.unplot(0, 3)
        led.unplot(0, 4)
        led.plot(0, 0)
    }
    if (OldDay <= 10) {
        led.unplot(1, 0)
        led.unplot(1, 1)
        led.unplot(1, 2)
        led.unplot(1, 3)
        led.plot(1, 4)
    } else if (OldDay > 10 && OldDay <= 15) {
        led.unplot(1, 0)
        led.unplot(1, 1)
        led.unplot(1, 2)
        led.unplot(1, 4)
        led.plot(1, 3)
    } else if (OldDay > 15 && OldDay <= 20) {
        led.unplot(1, 0)
        led.unplot(1, 1)
        led.unplot(1, 3)
        led.unplot(1, 4)
        led.plot(1, 2)
    } else if (OldDay > 20 && OldDay <= 25) {
        led.unplot(1, 0)
        led.unplot(1, 2)
        led.unplot(1, 3)
        led.unplot(1, 4)
        led.plot(1, 1)
    } else if (OldDay > 25) {
        led.unplot(1, 1)
        led.unplot(1, 2)
        led.unplot(1, 3)
        led.unplot(1, 4)
        led.plot(1, 0)
    }
    if (Day <= 10) {
        led.unplot(2, 1)
        led.unplot(2, 0)
        led.unplot(2, 3)
        led.unplot(2, 2)
        led.plot(2, 4)
    } else if (Day > 10 && Day <= 15) {
        led.unplot(2, 2)
        led.unplot(2, 1)
        led.unplot(2, 0)
        led.unplot(2, 4)
        led.plot(2, 3)
    } else if (Day > 15 && Day <= 20) {
        led.unplot(2, 0)
        led.unplot(2, 1)
        led.unplot(2, 3)
        led.unplot(2, 4)
        led.plot(2, 2)
    } else if (Day > 20 && Day <= 25) {
        led.unplot(2, 2)
        led.unplot(2, 0)
        led.unplot(2, 3)
        led.unplot(2, 4)
        led.plot(2, 1)
    } else if (Day > 25) {
        led.unplot(2, 1)
        led.unplot(2, 2)
        led.unplot(2, 3)
        led.unplot(2, 4)
        led.plot(2, 0)
    }
    if (NewDay <= 10) {
        led.unplot(3, 1)
        led.unplot(3, 2)
        led.unplot(3, 3)
        led.unplot(3, 0)
        led.plot(3, 4)
    } else if (NewDay > 10 && NewDay <= 15) {
        led.unplot(3, 1)
        led.unplot(3, 0)
        led.unplot(3, 2)
        led.unplot(3, 4)
        led.plot(3, 3)
    } else if (NewDay > 15 && NewDay <= 20) {
        led.unplot(3, 1)
        led.unplot(3, 0)
        led.unplot(3, 3)
        led.unplot(3, 4)
        led.plot(3, 2)
    } else if (NewDay > 20 && NewDay <= 25) {
        led.unplot(3, 4)
        led.unplot(3, 0)
        led.unplot(3, 2)
        led.unplot(3, 3)
        led.plot(3, 1)
    } else if (NewDay > 25) {
        led.unplot(3, 1)
        led.unplot(3, 2)
        led.unplot(3, 3)
        led.unplot(3, 4)
        led.plot(3, 0)
    }
    if (NewestDay <= 10) {
        led.unplot(4, 1)
        led.unplot(4, 0)
        led.unplot(4, 2)
        led.unplot(4, 3)
        led.plot(4, 4)
    } else if (NewestDay > 10 && NewestDay <= 15) {
        led.unplot(4, 2)
        led.unplot(4, 1)
        led.unplot(4, 0)
        led.unplot(4, 4)
        led.plot(4, 3)
    } else if (NewestDay > 15 && NewestDay <= 20) {
        led.unplot(4, 3)
        led.unplot(4, 1)
        led.unplot(4, 0)
        led.unplot(4, 4)
        led.plot(4, 2)
    } else if (NewestDay > 20 && NewestDay <= 25) {
        led.unplot(4, 4)
        led.unplot(4, 2)
        led.unplot(4, 3)
        led.unplot(4, 0)
        led.plot(4, 1)
    } else if (NewestDay > 25) {
        led.unplot(4, 1)
        led.unplot(4, 2)
        led.unplot(4, 3)
        led.unplot(4, 4)
        led.plot(4, 0)
    }
})
