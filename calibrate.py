import sys
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)

def main():
    GPIO.setup(8, GPIO.OUT)
    GPIO.setup(10, GPIO.OUT)
    GPIO.setup(12, GPIO.OUT)
    GPIO.setup(16, GPIO.OUT)

    pwm1 = GPIO.PWM(8, 50)
    pwm2 = GPIO.PWM(10, 50)
    pwm3 = GPIO.PWM(12, 50)
    pwm4 = GPIO.PWM(16, 50)

    pwm1.start(10)
    time.sleep(1)
    pwm2.start(10)
    time.sleep(1)
    pwm3.start(10)
    time.sleep(1)
    pwm4.start(10)
    time.sleep(1)

    time.sleep(2)

    pwm1.start(5)
    time.sleep(1)
    pwm2.start(5)
    time.sleep(1)
    pwm3.start(5)
    time.sleep(1)
    pwm4.start(5)
    time.sleep(1)

    time.sleep(2)

    pwm1.stop()
    pwm2.stop()
    pwm3.stop()
    pwm4.stop()

    GPIO.cleanup()
    print("Calibration Completed")
#start process
if __name__ == '__main__':
    main()
