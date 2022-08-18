const firebaseConfig = {
    apiKey: "AIzaSyAN7VUBgCwZLDxKY_C6ZrfQvaqkV6_U3XQ",
    authDomain: "healingminds-52967.firebaseapp.com",
    projectId: "healingminds-52967",
    storageBucket: "healingminds-52967.appspot.com",
    messagingSenderId: "525409045518",
    appId: "1:525409045518:web:aeb25f7cac2cab2969005f",
  };
  firebase.initializeApp(firebaseConfig);

  function insert_data() {
    var full_name = document.getElementById("uname").value;
    var gender = document.getElementById("gender").value;
    var phone = document.getElementById("phone").value;
    var User_email= document.getElementById("email").value;
    var therapy= document.getElementById("therapy").value;
    
    const db = firebase.firestore();
    
    if (full_name.trim() == "" || full_name.trim() == null) {
         alert("Username cannot be null");
    } else if (gender.trim() == "" || gender.trim() == null) {
         alert(" gender cannot be left empty");
    } else if(phone.trim()=="" || phone.trim()==null ){
         alert("phone number cannot be empty");
    }else if(User_email.trim()=="" || User_email.trim()==null ){
         alert("email cannot be empty");
    } else {
      db.collection("clients/")
        .doc()
        .set({
          name:  full_name,
          gender: gender,
          phone_no: phone,
          email: User_email,
          previous_therapist: therapy,
        })
        .then(() => {
          full_name = "";
          gender = "";
          phone = "";
          User_email = "";
          therapy = "",
          alert("Document successfully written!");
        })
        .catch((error) => {
          alert("Error writing document: ", error);
        });
    }
  }
  
  