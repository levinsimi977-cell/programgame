     
 function login(){
    let firstname=document.querySelector('#username').value;
    let passward=document.querySelector('#password').value;
    let email=document.querySelector('#email').value;
    if(window.localStorage.getItem(email)!==null)
        {
            let user=window.localStorage.getItem(email);
            user=JSON.parse(user);
            if(user.passward===passward)
                {
                    window.localStorage.setItem("currentUser",JSON.stringify(user));
                    alert("succes login");                   
                     window.location.href="../index/index.html";
                    return;
                }
        }
        alert("error login");
        document.querySelector('#username').value = '';
        document.querySelector('#password').value = '';
        document.querySelector('#email').value = '';
}
function Registration() {
    let firstname = document.querySelector('#username').value;
    let passward = document.querySelector('#password').value;
    let email = document.querySelector('#email').value;
    let user = {
        "firstname": firstname,
        "passward": passward,
        "email": email
    }
    if (window.localStorage.getItem(email) === null) {
        window.localStorage.setItem(email, JSON.stringify(user));
        alert("success Registration");
        window.localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href="../index/index.html";

    } else {
        alert("error Registration");
    }
}