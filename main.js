menu_list_array = ["Veg Margherita Pizza","peppy paneer","Mexician green wave","Deluxe veggie","Non veg supreme","chicken Dominaton"   ];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
        }
        htmldata=htmldata+"</ol>"
        document.getElementById("display_menu").innerHTML = htmldata;
 
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
        menu_list_array.sort();
        htmldata="<section class='cards'>"
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+'div class="card">'+'<img src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F06%2F15%2Fmozzarella-pizza-margherita-FT-RECIPE0621.jpg" style="width: 100px; height:80px;"/>' + menu_list_array[i]+'</div>';
        }
        htmldata=htmldata+"</section>"
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
