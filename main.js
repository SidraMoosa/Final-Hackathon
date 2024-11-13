var firebaseConfig = {
  apiKey: "AIzaSyB0NPK_RycxfUq1xiElp3arPHgtSpGiAKw",
  authDomain: "hackathon-6f38a.firebaseapp.com",
  databaseURL: "https://hackathon-6f38a-default-rtdb.firebaseio.com",
  projectId: "hackathon-6f38a",
  storageBucket: "hackathon-6f38a.firebasestorage.app",
  messagingSenderId: "818253767590",
  appId: "1:818253767590:web:8ecb15deb432b3ee20e567"
};


var app = firebase.initializeApp(firebaseConfig);

function submit() {
  try {
      var name = document.getElementById("name").value;
      var number = document.getElementById("number").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var city = document.getElementById("city").value;
      console.log(name);
    
      var userObj = {
          userName: name,
          userNumber: number,
          userEmail: email,
          userPassword: password,
          userCity: city,
      };
      console.log(userObj);
      

       firebase.database().ref("users").push(userObj);

  } catch (error) {
      console.log(error);

  }
}



// other Functionality

window.onload= function(){
  Swal.fire({
    title: "Welcome to Hajiya's Carpentry!",
    text: "Discover beautifully crafted wooden products made with quality and care, just for you.",
    imageUrl: "https://media.istockphoto.com/id/481628382/photo/carpenter-taking-measurement.jpg?s=612x612&w=0&k=20&c=l2cAPfJL2bGltBasmnqUlsz2OHv6H6bUzjzhx0feOJg=",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
  });
}


// Array of random tips
const tips = [
  "Always use high-quality tools for better results.",
  "Measure twice, cut once. Accuracy is key in carpentry.",
  "Wear safety gear like goggles and gloves when working with wood.",
  "Keep your workspace clean to avoid accidents.",
  "Wood expands and contracts with temperature and humidity changes, so always allow wood to acclimate before working on it.",
  "Use clamps to secure wood before cutting or drilling for safety and precision.",
  "Never rush your work; patience leads to better craftsmanship."
];


function displayRandomTip() {  
  var randomIndex = Math.floor(Math.random() * tips.length);
  
  Swal.fire({
    title: 'Tip of the Day:',
    text: tips[randomIndex],
    icon: 'info',  
    confirmButtonText: 'Got it!'
  });

}
setInterval(displayRandomTip,120000)



 

























