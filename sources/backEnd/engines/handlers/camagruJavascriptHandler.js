//Enable all Onload JS Functions
function ft_defaultOnloadEnabler() {

    ft_camDisplay();
}

//Close Modal Button
function ft_closeModalButton() {

    var closeModalReg = document.getElementById('indexRegistrationModalID');
    var closeModalLogin = document.getElementById('indexLoginModalID');

    closeModalReg.style.display = "none";
    closeModalLogin.style.display = "none";
}

function ft_submitButton(sourcePage) {

    if (sourcePage == "login") {

        ft_sendLoginHTTPRequest();
    } else if (sourcePage == "register") {

        ft_sendRegHTTPRequest();
    }
}

function ft_responseHandler(response) {

    //Confirm Login
    var confirmLogin = response[0];

    if (confirmLogin == "1") {

        var destPage = "main";

        ft_redirectController(destPage);
    } else if (response && (confirmLogin != "1")) {

        var canvas = document.getElementById('canvasViewID');
        var context = canvas.getContext('2d');

        canvas.src = response;

        if (response) {

            //Draw image from encoded base64
            context.drawImage(canvas, 15, 10, 250, 150);
        } else {

            ft_clearPhoto(canvas, context, data);
        }
    }else {

        alert(response.substring(1));
    }
}

/*Redirect to Main.php*/
function ft_redirectController(destPage) {

    if (destPage == "main") {

        window.location.href = "sources/frontEnd/html/htmlLayouts/main.php";
    } else {

        window.location.href = "../../../../index.php";
    }
}

function ft_logoutButton() {

    var destPage = "index";

    ft_redirectController(destPage);
}