    let s_nameEl=document.getElementById("s-name")
    let s_emailEl=document.getElementById("s-email")
    let s_passEl=document.getElementById("s-pass")


    const onSignup=()=>{
        const payload={
            name:s_nameEl.value,
            email:s_emailEl.value,
            password:s_passEl.value,
        }
        // console.log(payload)
        fetch("",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            alert(res.msg)
        })
        .catch(err=>console.log(err))
    }

    let l_emailEl=document.getElementById("l-email")
    let l_passEl=document.getElementById("l-pass")
    const onLogin=()=>{
        const payload={
            email:l_emailEl.value,
            password:l_passEl.value,
        }
        // console.log(payload)
        fetch("",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
        localStorage.setItem("token",res.token)
        alert(res.msg)
        window.location.href="Client/Styles/dashboard.html"
    })
        .catch(err=>console.log(err))
    } 
    