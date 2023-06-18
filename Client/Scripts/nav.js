let userInfo = JSON.parse(localStorage.getItem('userInfo')) 
// let userInfo = null
if(userInfo){
    console.log(userInfo);

    let name = userInfo.name.split(" ")[0];
    let div = document.getElementById("signUpY")
    div.innerHTML = name;
	div.style.color="white"

    div.addEventListener("click" , ()=>{
        window.location.href ="./profile.html"
    })
}else{
    let div = document.getElementById("signUpY")

    div.addEventListener("click" , ()=>{
        window.location.href = "./pages/signin.html"
    })
	div.style.color="white"
}