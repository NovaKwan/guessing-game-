input.onSound(DetectedSound.Loud, function () {
    basic.showNumber(randint(1, 3))
    music.playTone(500, music.beat(BeatFraction.Half))
    basic.pause(3000)
    basic.clearScreen()
})
input.setSoundThreshold(SoundThreshold.Loud, 158)
