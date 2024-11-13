function navBar() {
    var navBar = document.getElementById("navbar").innerHTML = `
      <nav class="navbar navbar-expand-lg   px-5 border-bottom bg-dark-subtle fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand fs-2 fw-bold" href="#"><i class="fa-solid fa-hammer "></i> &nbsp;Hajiya's- <span class="text-primary">Carpentry</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 pe-3 fs-5 fw-bold text-center ">
            <li class="nav-item">
              <a class="nav-link active " aria-current="page" href="./mainindex.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active " aria-current="page" href="./mainindex.html#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active " aria-current="page" href="./mainindex.html#product">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active " aria-current="page" href="./mainindex.html#gallery">Gallery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./mainindex.html#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active " aria-current="page" href="./mainindex.html#contact">Contact</a>
            </li> 
        </div>
      </div>
    </nav>
    `;
  }
  
  navBar();


  function infoSec() {
    var information = document.getElementById("info").innerHTML = `
    <section class="my-5  py-3">
  <div class="container">
  
  <div class="row">
  
  
  <div class="col-sm-12 col-md-4 col-lg-4 col-12 ">
    <h2><i class="fa-solid fa-hammer "></i> &nbsp;Hajiya's <span class="text-primary">Carpentry</span></h2>
  </div>
  
  <div class="col-sm-12 col-md-2 col-lg-2 col-12  ">
    <h4>Quicks links</h4>
    <ul class="list-unstyled ms-4">
     <a href="file:///C:/Users/smart%20com/Desktop/Hajiya_s%20carpentary1/mainindex.html" class="text-decoration-none"><li>Home</li></a>
      <a href="./mainindex.html#about" class="text-decoration-none"><li>About</li></a>
      <a href="./mainindex.html#product" class="text-decoration-none"><li>Products</li></a>
      <a href="./mainindex.html#gallery" class="text-decoration-none"><li>Gallery</li></a>
      <a href="./mainindex.html#services" class="text-decoration-none"><li>Services</li></a>
      <a href="./mainindex.html#contact" class="text-decoration-none"><li>Contact</li></a>
    </ul>
  </div>
  
  
  <div class="col-sm-12 col-md-3 col-lg-3 col-12 "> 
  <h4>Opening Hours</h4>
  <p class="text-primary">Monday - Friday: 9 AM - 10 PM</p>
  <p class="text-primary">Saturday: 10 AM - 7 PM</p>
  <p class="text-primary">Sunday: Closed</p>
  
  </div>
  
  
  <div class="col-sm-12 col-md-3 col-lg-3 col-12 ">
    <h4>Contact us</h4>
    <p class="text-primary">Email: info@hajiyascarpentry.com</p>
    <p class="text-primary">Phone: 03132777250</p>
  </div>
  </div>
  </div>
  </section>
  `;
  }
  
  infoSec()

function footer(){
    var footer= document.getElementById("footer").innerHTML=`
    <section class="bg-info-subtle  pt-3 ">

      <div class="container text-center">
        <div class="row">

          <div class="col-sm-12 col-md-6 col-lg-6 col-12  ">
            <p>© 2024 Hajiya's. All right reversed </p>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-6 col-12 fs-4 text text-end ">
            <a href="https://www.facebook.com/Saeed Khan" target="_blank"><i class="fa-brands fa-square-facebook"></i></a>&nbsp; &nbsp; <a href="https://www.instagram.com/Saeed Hajiya" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
          </div>
        </div>
      </div>

    </section>`;
}
footer()


// Array of random tips
const tips = [
  
  "When assembling furniture, use wood glue along with screws for stronger joints that last longer.",
  "Make sure to sand all surfaces before applying stain or finish to ensure an even coat.",
  "For outdoor furniture, always use weather-resistant wood like teak or cedar to withstand the elements.",
  "If your furniture has intricate details, consider using a wood carving tool for precision.",
  "To maintain the appearance of your wooden products, regularly apply a protective wood finish.",
  "When working with plywood, always use a fine-toothed saw to avoid splintering the edges.",
  "For a smooth and professional finish, apply multiple thin coats of stain rather than one thick coat.",
  "For children’s furniture, make sure to choose non-toxic paints and finishes for safety.",
  "When choosing wood for furniture, make sure it has been properly kiln-dried to prevent warping over time."
  ];
  
  function randomTip() {
    var randomIndex = Math.floor(Math.random() * tips.length);
    
    Swal.fire({
      title: 'Craftsmanship Tip:',
      text: tips[randomIndex],
      icon: 'info',  
      confirmButtonText: 'Got it!'
    });
  }
  setInterval(randomTip,60000)




  function order() {
    Swal.fire({
      title: "Place your order?",
      text: "Are you sure you want to order this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ordered!",
          text: "Your order has been placed successfully.",
          icon: "success"
        });
      }
    });
  }


  