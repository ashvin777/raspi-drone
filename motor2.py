import sys
# import RPi.GPIO as GPIO
import time

def getSpeed(lines):
    return lines[0]

def main():
    # GPIO.setmode(GPIO.BOARD)
    # GPIO.setup(10, GPIO.OUT)
    # motor1 = GPIO.PWM(10, 50)
    lines = sys.stdin.readlines()
    speed = float(getSpeed(lines))
    # motor1.start(speed)
    print(speed)
    time.sleep(1)

#start process
if __name__ == '__main__':
    main()
