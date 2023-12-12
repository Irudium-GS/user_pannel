let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}
document.addEventListener("DOMContentLoaded", function() {
   var checkbox = document.getElementById("checkbox");
   var inputFieldsContainer = document.querySelector(".input-fields-container");

   // By default, hide the input fields container
   inputFieldsContainer.style.display = "none";

   // Add event listener to the checkbox
   checkbox.addEventListener("change", function() {
       // If checkbox is checked, show the input fields container
       if (checkbox.checked) {
           inputFieldsContainer.style.display = "block";
       } else {
           // If checkbox is unchecked, hide the input fields container
           inputFieldsContainer.style.display = "none";
       }
   });
});
//=============================== google sheet start ==============================>

let SHEET_ID = '1VsZl7t1f6Kwlc6NwL95MN1XWJKNduXhgRJ2LPQBWAN8';
let SHEET_TITLE = 'overall';
let SHEET_RANGE = 'A1:D66';
const root = document.documentElement;

let FULL_URL = ("https://docs.google.com/spreadsheets/d/" + SHEET_ID + "/gviz/tq?sheet=" + SHEET_TITLE + "&range=" + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
   let data = JSON.parse(rep.substr(47).slice(0,-2));      
   let percentageValue = (data.table.rows[61].c[3].v * 100).toFixed(2);
 console.log(percentageValue);
   // Calculate the animation offset value
   let ani = (522 - (522 * (percentageValue / 100))).toFixed(2);

   root.style.setProperty('--ca', ani);
   let snoTitleElement = document.getElementById("sno_title");
   if (snoTitleElement) {
      snoTitleElement.innerHTML = percentageValue + '%';
   }

   let attendancePercentage = document.getElementById("attendancePercentage");
   if (attendancePercentage) {
      let counter = 0;
      let interval = setInterval(() => {
         if (counter >= percentageValue) {
            clearInterval(interval);
         } else {
            counter += 1;
            attendancePercentage.innerHTML = counter.toFixed(2) + "%";
         }
      }, 30);
   }
});




//============================= attendance end ======================>let animationKeyframes = `

