#!/usr/local/bin/python3
from subprocess import call
import serial, re, time, math
from datetime import date

# pprint for debugging
import pprint

ser = serial.Serial('/dev/tty.usbmodemfa131', 9600)
prog = re.compile('SNAP\r\n')

print(ser)

while True:
    filename = '_upload/photo_'+str(date.today())+'_'+str(math.floor(time.time()))+'.jpg'
    x = ser.readline()
    print(x)

    #imagesnap -d "Logitech Camera" _upload/snap.JPG
    #pprint.pprint(x)

    if (prog.match(x.decode("utf-8"))):
        y = call(["imagesnap", "-d", "Logitech Camera", filename])
        pprint.pprint(y)


'''
ensure ftp mount with ExpanDrive
cd /Volumes/ischool.berkeley.edu/public_html/ladybug
python3 bug.py

http://people.ischool.berkeley.edu/~shaun/ladybug/
'''

