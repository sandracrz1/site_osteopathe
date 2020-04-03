'use strict';

var menuInstance;
var collapsibleInstance;
var menuElems;
var openMenuItem;
var navItem;


openMenuItem = document.querySelectorAll(".collapsible-header");
navItem = document.querySelectorAll(".nav_item_click");
console.log(navItem);

//Initialization materialize js sidenav
document.addEventListener('DOMContentLoaded', function() {
   menuElems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(menuElems);
  menuInstance = M.Sidenav.getInstance(menuElems[0]);
  var collapsibleElems = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibleElems);
  collapsibleInstance = M.Collapsible.getInstance(collapsibleElems[0]);
});

// open-close sidenav
document.getElementById("menu").addEventListener("click", function() {
  menuInstance.open();
})
document.querySelector(".close").addEventListener("click", function(e){
  e.stopPropagation();
  menuInstance.close();
})
//close item sidenav
navItem.forEach(function(item) {
  item.addEventListener("click", function(e) {
    e.stopPropagation();
    menuInstance.close();
  }) 
})
openMenuItem.forEach(function(e){
  e.addEventListener("click", function(event){
 var a = event.target.children[0];
  if (a.innerHTML === "arrow_downward") {
      a.innerHTML = "arrow_upward";
  } else {
      a.innerHTML = "arrow_downward";
  }})
 })
 

  
 
  

