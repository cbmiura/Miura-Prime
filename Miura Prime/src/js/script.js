function click() {
   var menu = document.getElementById('contentMenu');
   if (menu.className == "contentMenuOff") {
       menu.className = "contentMenuOn";
   } else {
       menu.className = "contentMenuOff";
   }
}