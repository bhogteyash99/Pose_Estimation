function getInputValue(){
 const endpoint1= "http://localhost:5000";
    fetch(endpoint1,{
        mode: 'cors',
        method:"POST",
        body: "hello",
    }).catch(console.error)
}

function login(){
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if(username === "admin"){
        if(password === "admin"){
            window.location.replace('http://localhost:8000/dashboard.html');
        }else{
            alert("Wrong Password For This User")
        }
    }else{
        alert("User-Doen't Exist")
    }
   

}
