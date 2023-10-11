/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Chernyshev
 * Created on: Oct 2023
 * This program ...
*/

let randomNumber: number = 0
let score = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
  randomNumber = randint(0, 2)
  basic.clearScreen()

  if (randomNumber === 0) {
    images.createImage(`
      . . . . .
      . # # # .
      . # # # .
      . # # # .
      . . . . .
    `).showImage(0)
    basic.pause(2000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
  }
  if (randomNumber === 1) {
    images.createImage(`
      # # # # #
      # . . . #
      # . . . #
      # . . . #
      # # # # #
    `).showImage(0)
    basic.pause(2000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
  }
  if (randomNumber === 2) {
    images.createImage(`
      # # . . #
      # # . # .
      . . # . .
      # # . # .
      # # . . #
    `).showImage(0)
    basic.pause(2000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
  }
})

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  score = score + 1
  basic.showIcon(IconNames.Yes)
  basic.pause(1000)
  basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showString('Score : ' + (score).toString())
  basic.showIcon(IconNames.Happy)
})
