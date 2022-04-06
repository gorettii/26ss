let tenperatura = 0
basic.forever(function () {
    music.setVolume(37)
    tenperatura = 0
    if (input.temperature() < 5) {
        basic.showIcon(IconNames.Chessboard)
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    if (input.temperature() > 30) {
        basic.showIcon(IconNames.Square)
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
})
