const form=document.getElementById("otp-form");
const btn=document.getElementById("verify-btn");
const h2=document.getElementById("errmsg")

btn.addEventListener("click",()=>{
    h2.innerHTML=null;
    let otp="";
    otp+=form.num1.value;
    otp+=form.num2.value;
    otp+=form.num3.value;
    otp+=form.num4.value;
    otp+=form.num5.value;
    otp+=form.num6.value;
    let plan=localStorage.getItem("plan");
    let price=localStorage.getItem("amount");
    let obj={otp,plan,price};
    fetch("https://sore-shoe-bull.cyclic.app/user/verify",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        if(data.msg){
            window.location.href="../dashboard.html"
        }else{
            h2.innerText=data.msg;
        }
    });
})