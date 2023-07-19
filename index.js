var menu = document.querySelector(".menu")
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var iconList = document.querySelector('.icon-list')
var arrowIcon= document.querySelectorAll(".icon i");
var exporeIcon = document.querySelectorAll(".explore-icon");
var hidepara = document.querySelector(".hide-view");
var show = document.getElementById("show-more");

menu.onclick = function(){
    sideBar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}


// let isDragging = false;

// const handleIcons =() => {
//     let scrollVal= iconList.scrollLeft;
//     arrowIcon[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
// }
// arrowIcon.forEach(icon =>{
//  icon.addEventListener("click", () =>{
//     // if clicked icon is left reduce 350 from list
//     iconList.scrollLeft += icon.id === "left" ? -350 : 350;
//     handleIcons();

//  })
// })

// const dragging = (e) =>{
//     if(!isDragging) return;
//     iconList.classList.add("dragging");
//     iconList.scrollLeft -= e.movementX;
// }
// const dragStop = () =>{
//     isDragging =false;
//     iconList.classList.remove("dragging");
// }
// iconList.addEventListener("mousedown",() => isDragging=true);
// iconList.addEventListener("mousemove",dragging);
// iconList.addEventListener("mouseup", dragStop);

// creating input list for suggestions

// let availableKeywords = [
//     'HTML',
//     'CSS',
//     'Easy Tutorials',
//     'Web design tutorials',
//     'Javascript',
//     'Where to learn coding online',                                               
//     'how to create website',
// ];
 
// right side toggle

let subMenu = document.getElementById("subMenu");
function toggleMenu(){
    subMenu.classList.toggle("open-menu")
}

// input suggestion 

var inputBox=document.querySelector(".result-box");
function showItems(){
    inputBox.style.display="block";
}

document.addEventListener('mouseup' , function(e){
    var hide =document.querySelector('.result-box')
    if(!hide.contains(e.target)){
        hide.style.display= "none";
    }
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 21,
  spaceBetween: 2, 
  
  
  navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});


var dropBtns = document.querySelectorAll(".popup_menu")

dropBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const dropMenu = e.currentTarget.nextElementSibling

    if (dropMenu.classList.contains('show')) { 
      dropMenu.classList.toggle('show')
    } else {
      document.querySelectorAll('.dot-popup').forEach(item => item.classList.remove('show'))
      dropMenu.classList.add('show')
    }
  });
})