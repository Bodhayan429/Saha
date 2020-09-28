menu_list_array = ["Farmhouse","Chicken Pepperoni","Chicken Dominator","Chicken Fiesta","Chicken Sausage","Peri Peri Pizza","Cheese N Corn","Margherita","Double Cheese Margherita","Onion, Ginger, Tomato, Pepperoni"];

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){

        htmldata=htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>' + menu_list_array[i] + '</div>'
    }
      htmldata=htmldata+"</section>"
      document.getElementById("display_addedmenu").innerHTML = htmldata;
}