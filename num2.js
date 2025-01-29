<p id="output"></p>
<script>
    var firstName = prompt("Please enter your first name:");
    var lastName = prompt("Please enter your last name:");
    var birthYear = prompt("Please enter your birth year:");

    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;

    var message = "Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?";

    document.getElementById("output").innerText = message;
</script>