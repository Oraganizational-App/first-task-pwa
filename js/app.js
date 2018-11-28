// For the PWA Application, register the Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () =>
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => console.log('Service Worker registered'))
      .catch(err => 'Service Worker registration failed')
  );
}


// Where can we go?
const routes = {
  '/login': loginPage,
  '/signup': signupPage,
  '/main': mainPage,   // change this to /home to prevent refresh
  '/home': homePage,
  '/alltasks': allPage,
  '/calendar': calendarPage,
  '/important': importantPage,
  '/notifications': notifPage,
  '/work': workPage


  // REGISTER NEW URL:VIEWS HERE
};




//// DATA

// user (encrypt later)
var user = [{ id: 1, name: "Whoever", email: "sdfsdf@sdfsd.com", password: "12345" }];

// task
var task = [
  {id: 1, user_id: 1, name: "Write our data", due: { y: 2018, m: 11, d: 28 }, done: false, fav: false},
  {id: 2, user_id: 1, name: "", due: { y: 2018, m: 11, d: 28 }, done: false, fav: false}
]

// subtask
var subtask = [
  {id: 1, name: "Creating the scheme", task_id: 1, done: false }
]











// DATA UPDATER:
// Fires every time a page changes
document.getElementById('page').addEventListener('page', function (e) {

  if (currPage == '/alltasks') {
    // I'm on the all tasks page, now what?


  }


}, false);

// function dropdown_function() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
//
// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
//
// function updateCurrentDate() {
//   var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
//   var today = new Date();
//   var dd = today.getDate();
//   var mm = months[today.getMonth()];
//   var yyyy = today.getFullYear();
//
//   document.getElementById('current-date').innerHTML = `${mm} ${dd}, ${yyyy}`;
// }
// updateCurrentDate();
//
//  function myFunction() {
//    document.getElementByClassName("container two btn").style.color = "blue";
//  }
