from firebase import firebase

url = 'https://mycovidapp-8ec60.firebaseio.com/'

firebase = firebase.FirebaseApplication(url, None)
result = firebase.get('/Users', '')

opf = open("output_coor.txt",'r')

output = opf.readlines()

for user in output:
    user = user.replace("\n","")
    arr = user.split(',')
    firebase.put("/Users/"+str(arr[0]),"output_Latitude",arr[1])
    firebase.put("/Users/"+str(arr[0]),"output_Longitude",arr[2])