
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
        console.log("Name: " + nickname);
        console.log("Height: " + h  + "'" +  "0");
        console.log("Weight: " + w + "lbs");
    } 
    else {
        console.log( "User does not wish to share his/her information.");
    }
    
  
}
</script>
