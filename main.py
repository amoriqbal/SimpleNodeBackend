import os
#import schedule
import time

#def run():
os.system("python3 update_input.py")
time.sleep(5)
os.system("python3 optscript.py")
time.sleep(5)
os.system("python3 update_database.py")

# schedule.every(20).seconds.do(run)

# while 1:
#     schedule.run_pending()
#     time.sleep(1)