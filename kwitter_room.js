var firebaseConfig = {
    apiKey: "AIzaSyB_EhJ9VMUFs_kTAvsBgZSAHllKJPzjFQo",
authDomain: "kwitterappnew.firebaseapp.com",
databaseURL: "https://kwitterappnew-default-rtdb.firebaseio.com",
projectId: "kwitterappnew",
storageBucket: "kwitterappnew.appspot.com",
messagingSenderId: "705767337408",
appId: "1:705767337408:web:e82b43e2bba38c570aac25"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
