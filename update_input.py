from firebase import firebase

url = 'https://mycovidapp-8ec60.firebaseio.com/'

firebase = firebase.FirebaseApplication(url, None)
result = firebase.get('/Users', '')

inpf = open("input_coor.txt",'w')

for user in result:
    line = str(user) +", "+ str(result[user]["Latitude"]) + ", " + str(result[user]["Longitude"]) + ", " + str(result[user]["Status"]) + "\n"
    inpf.write(line)
    #print(line)
    