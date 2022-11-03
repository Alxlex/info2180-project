/* Add your JavaScript to this file */

window.onload = function(){

    var submitButton = document.getElementsByClassName("btn")[1];
    submitButton.addEventListener("click", () => {
        preventDefault(); 

        var email = document.getElementById("email").value;

        console.log(email);

        if(email != ""){
            document.getElementsByClassName("message")[0].innerHTML = "Thank You! Your email address " +email+ " has been added to our mailing list";
        }else{
            document.getElementsByClassName("message")[0].innerHTML = "";
        }
    });

}