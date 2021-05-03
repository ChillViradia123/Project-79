menu_list_array = ["Veg Margherita Pizza",//add more items
                    ];


menu_list_array=["Veg Margherita Pizza","Chiken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe veggie pizza","Veg extravanganza pizza"];

function getmenu(){

var htmldata;
htmldata="<ol class='menullist'>"
menu_list_array.sort();
for(var i=0;<menu_list_array.length;i++){htmldata=htmldata+'<li>' +neu_list_array[i] = '</li>'}

htmldata=htmldata+"</ol>"

document.getElemenetById("display_menu").innerHTML=htmldata;


function add_top(){

bar item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();

}
}



