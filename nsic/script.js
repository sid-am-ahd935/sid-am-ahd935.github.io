
function loadRandomBackground(){
    var img_id = Math.floor(Math.random() * 8) + 1;
    document.getElementById("img-background").style.backgroundImage = "url('images/image" + img_id + ".jpg')";
}