
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCUSjnxyyLCY7AWzrlYa1IRbdbEfzYpkzQ",
    authDomain: "lets-chat-web-app-91999.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-91999-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-91999",
    storageBucket: "lets-chat-web-app-91999.appspot.com",
    messagingSenderId: "407919437737",
    appId: "1:407919437737:web:d65e9896e8e131435c46b8",
    measurementId: "G-DHQ47L5Q6R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      }); }); }
       getData(); 
     
function redirectToRoomName(name) {
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
      }
function logout() {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html";
     }