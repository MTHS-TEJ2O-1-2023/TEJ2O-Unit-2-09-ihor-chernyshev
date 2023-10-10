"""
Created by: Ihor Chernyshev
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *
import random

random_number = -1
score = 0

display.clear()
display.show(Image.HAPPY)

while True:
    accelerometer.was_gesture('shake')
    random_number = random.randint(1, 2)
    if (random_number == 0):
        display.show(Image("00000:" "09990:" "09990:" "09990:" "00000"))
        sleep(2000)
        display.clear()
        display.show(Image.HAPPY)
    elif (random_number == 1):
        display.show(Image( "99999:" "90009:" "90009:" "90009:" "99999"))
        sleep(2000)
        display.clear()
        display.show(Image.HAPPY)
    elif (random_number == 2):
        display.show(Image("99009:" "99090:" "00900:" "99090:" "99009"))
        sleep(2000)
        display.clear()
        display.show(Image.HAPPY)
    if button_a.was_pressed():
        display.clear()
        score = score + 1
        display.show(Image.YES)
        sleep(1000)
        display.show(Image.HAPPY)
    if button_b.was_pressed():
        display.clear()
        display.show()
