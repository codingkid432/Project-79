var menu=["cheese","pepperoni","hawaiian"];
console.log(menu)
function menu_visible(){
    document.getElementById("fixed_menu").innerHTML=menu;
}
function add_menu(){
    var menu_value=document.getElementById("menu_item_input").value
    menu.push(menu_value)
    document.getElementById("changing_menu").innerHTML=menu;
    console.log(menu);
}