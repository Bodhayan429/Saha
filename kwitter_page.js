//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");
    function send() {
          msg= document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like: 0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         row = "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4> <h4 class = 'message_h4'>" + message + "</h4> <button class='btn btn-warning' id='" + firebase_message_id + "' value= '" + like + "'onclick='update_like(this.id)'> <span class='glyphicon glyphicon-thumbs-up'> Like:" + like + "</span> </button> <hr>";
         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();
function update_like(message_id) {
     button_id = message_id;
     likes = document.getElementById(button_id).value;
     likes_num = Number(likes) + 1;
     console.log(likes_num);
     firebase.database().ref(room_name).child(message_id).update({
           like: likes_num
     });
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }