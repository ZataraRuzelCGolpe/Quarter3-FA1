<!DOCTYPE html>
<html>
<body>


<button onclick="myFunction()">Try It</button>

<p id="demo"></p>

<script>
var nickname = "Zatara";
    var height = "60";
    var weight = "50";
    var h = height / 12;
    var w = weight * 2.2046;
    
function myFunction() {
    var txt;
    if (confirm("Share personal information?")) 
    {
        txt = "Name: " + nickname + "<br>" + "Height: " + h  + "'" +  "0"+ "<br>" + "Weight: " + w + "lbs";
    } 
    else {
        txt = "User does not wish to share his/her information.";
    }
    
     document.getElementById("demo").innerHTML = txt;
       
}
</script>



</body>
</html>
