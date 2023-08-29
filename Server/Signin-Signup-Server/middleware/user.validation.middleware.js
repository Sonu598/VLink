
const nameRegex=/^[a-zA-Z0-9_]{3,20}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/;

function validation(req,res,next){
    const { name, email, password } = req.body
    if(!nameRegex.test(name)){
        res.status(400).send({msg:"Invalid username"})
    }
    if(!emailRegex.test(email)){
        res.status(400).send({msg:"Invalid email"})
    }
    if(!passwordRegex.test(password)){
        res.status(400).send({msg:"Invalid password"})
    }
    next()
}

module.exports={validation};