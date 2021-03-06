'use strict';

var menuInstance;
var collapsibleInstance;
var collapsibleElems;
var menuElems;
var openMenuItem;
var navItem;
var navItemArticleHtml;
var itemCabinet;


navItemArticleHtml = document.querySelectorAll(".nav_item_article_click");
openMenuItem = document.querySelectorAll(".collapsible-header");
navItem = document.querySelectorAll(".nav_item_click");


//Initialization materialize js sidenav
document.addEventListener('DOMContentLoaded', function () {
  menuElems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(menuElems);
  menuInstance = M.Sidenav.getInstance(menuElems[0]);
  collapsibleElems = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibleElems, {
    onOpenStart: function(item) {
      item.children[0].children[0].innerHTML = "arrow_upward";
    },
    onCloseStart: function(item) {
      item.children[0].children[0].innerHTML = "arrow_downward";
    }
  });
});

// open-close sidenav
document.getElementById("menu").addEventListener("click", function () {
  menuInstance.open();
})
document.querySelector(".close").addEventListener("click", function (e) {
  e.stopPropagation();
  menuInstance.close();
})

//close item sidenav
navItem.forEach(function (item) {
  
  item.addEventListener("click", function (e) {

    menuInstance.close();
  })
})
//close sous nav article
navItemArticleHtml.forEach(function (e) {

  e.addEventListener("click", function (event) {
    collapsibleElems.forEach(function(item){
      var instance = M.Collapsible.getInstance(item);
      instance.close();
    })
    
  })
})

