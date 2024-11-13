const firebaseConfig = {
  apiKey: "AIzaSyB0NPK_RycxfUq1xiElp3arPHgtSpGiAKw",
  authDomain: "hackathon-6f38a.firebaseapp.com",
  projectId: "hackathon-6f38a",
  storageBucket: "hackathon-6f38a.firebasestorage.app",
  messagingSenderId: "818253767590",
  appId: "1:818253767590:web:8ecb15deb432b3ee20e567"
};


const frb = firebase.initializeApp(firebaseConfig);
console.log(frb.auth);


function signUp() {
  var name = document.getElementById("name")
  var email = document.getElementById("email")
  var password = document.getElementById("password")
  var confirmpass = document.getElementById("confirmpass")

  console.log(name.value);
  console.log(email.value);
  console.log(password.value);
  console.log(confirmpass.value);

  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user);
      window.location.href="../mainindex.html"
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);

    });


}

