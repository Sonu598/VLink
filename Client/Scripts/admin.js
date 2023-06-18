//--------------------add hovered class to selected list item--------------
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

//-----------------------------Menu Toggle---------------------------------

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

//-----------------------------Menu Toggle---------------------------------

const signout = document.querySelector("#signout")

signout.addEventListener("click",()=>{
  window.location.href = "index.html"
})

// ----------------------------Add New Admin--------------------------------------
const dashboard = document.querySelector("#dashboard")
const addBox = document.querySelector(".details")
const addButton = document.querySelector("#addnew")

addButton.addEventListener("click",(e)=>{
  e.preventDefault()
  addBox.innerHTML = ""
  addBox.setAttribute('id', 'addpro');
  addBox.classList.remove("details")
 
          const name = document.createElement('input');
          name.type = 'text';
          name.name = 'name';
          name.placeholder = 'Name';
          addBox.appendChild(name);

          const email = document.createElement('input');
          email.type = 'text';
          email.name = 'email';
          email.placeholder = 'Email';
          addBox.appendChild(email);

          const passInput = document.createElement('input');
          passInput.type = 'text';
          passInput.name = 'rating';
          passInput.placeholder = 'Password';
          addBox.appendChild(passInput);

          const submitButton = document.createElement('button');
          submitButton.type = 'submit';
          submitButton.textContent = 'Add Admin';
          addBox.appendChild(submitButton);

          submitButton.addEventListener("click",()=>{
            add()
          })

          function add(){
            const payload = {
               name: name.value,
               image : image.value,
               price : price.value,
               gender : gender.value,
               strikePrice : strikePrice.value,
               category : categorySelect.value,
               brand : brandInput.value,
               rating : ratingInput.value,
               color : colorInput.value,
               discount : discountInput.value
            }
    
            fetch("https://stormy-flannel-shirt-ox.cyclic.app/products/add1",{
                method:"POST",
                body: JSON.stringify(payload),
                headers:{
                    "Content-type":"application/json",
                }
            })
            .then((res)=>res.json())
        .then(res=>{
            console.log(res)
            alert(`${res.msg}`)
        })

        .catch((err)=>{
            console.log(err)
        })
        }
})

dashboard.addEventListener("click",()=>{
  location.reload()
})


// ----------------------------Get all Products--------------------------------------

const getButton = document.querySelector("#getAll")

getButton.addEventListener("click",(e)=>{
  e.preventDefault()
  addBox.innerHTML = ""
  addBox.id = ""
  addBox.classList.remove("details")
  addBox.setAttribute('id', 'getpro');

  function fetched(){
    fetch("https://pink-eagle-coat.cyclic.app/user/alluser")
        .then((res)=>res.json())
        .then(res=>{
            console.log(res.data)
            displayData(res.data)

        })

        .catch((err)=>{
            console.log(err)
        })
    }
    fetched()

    function displayData(data){

      addBox.innerHTML = null

      data.forEach(el=>{
        let getbox = document.createElement("div")
        let image = document.createElement("img")
        let UserID = document.createElement("h4")
        let name = document.createElement("h2")
        let email = document.createElement("p")
        let remove = document.createElement("button")
      

        image.src = "/Client/Images/3135715-removebg-preview.png"
        UserID.textContent = `ID: ${el._id}`
        name.textContent = `${el.name}`
        email.textContent = `Email  : ${el.email}`
        remove.textContent = "Delete User"

        remove.addEventListener("click",()=>{
          const confirmed = confirm("Are you sure you want to delete this item?");
              if (confirmed) {
                deleteProduct(el._id)
                location.reload()
              } else {
                // do nothing
              }
        })
        getbox.append(image,UserID,name,email,remove)
        addBox.append(getbox)
      })
    }
  
})

// function deleteProduct(id){
//   fetch(`https://stormy-flannel-shirt-ox.cyclic.app/products/delete1/${id}`,{
//                 method:"DELETE",
//             })
//             .then((res)=>res.json())
//         .then(res=>{
//             // console.log(res)
//         })

//         .catch((err)=>{
//             console.log(err)
//         })
//   }

// -----------------------TOTAL USER--------------------------------

fetch('https://pink-eagle-coat.cyclic.app/user/alluser')
        .then(res => res.json())
        .then(data => {
          // console.log(data.product.length)   
          const totalU = document.querySelector("#totalP")
          totalU.innerHTML = data.data.length
      })
        .catch((err)=>{
          console.log(err)
        })


// -----------------TOTAL EARNINGS--------------------------

fetch('https://pink-eagle-coat.cyclic.app/paiduser/total-earning')
        .then(res => res.json())
        .then(data => {
          let total = data.data[0].total
          // console.log(total)   
          const totalE = document.querySelector("#totalE")
          totalE.innerHTML = `₹ ${total}`
      })
        .catch((err)=>{
          console.log(err)
        })


//-----------------------DASHBOARD PAGE [Premium Customers]---------------------------


function fetchedUser(){
  fetch("https://pink-eagle-coat.cyclic.app/paiduser/")
      .then((res)=>res.json())
      .then(res=>{
          // console.log(res.data)
          const totalPC = document.querySelector("#totalPC")
          totalPC.innerHTML = `${res.data.length}`
          displayData(res.data)
      })

      .catch((err)=>{
          return err
      })
  }
  fetchedUser()

function displayData(data){
const tbody = document.querySelector(".details tbody")
tbody.innerHTML = null;

data.forEach((el)=>{

  let row = document.createElement("tr");
  let name = document.createElement("td");
  let price = document.createElement("td");
  let status = document.createElement("td");
  let statusInside = document.createElement("span");

  name.textContent = el.username;
  price.textContent = el.price;
  statusInside.textContent = el.plan;
  statusInside.setAttribute("class", "status delivered")
  status.appendChild(statusInside);
  row.append(name,price,status)
  tbody.append(row)
})
}














// -------------------------ADMIN LIST----------------------------------

// const userlist = document.getElementById("customerlist")

// userlist.addEventListener("click",(e)=>{
//   e.preventDefault()
//   addBox.innerHTML = "";
//   addBox.id = "";
//   addBox.setAttribute('id', 'userlist');

//   var table = document.createElement('table');
//       table.classList.add('tableC');

//       // let heading = document.createElement("h2")
//       // heading.innerHTML = "Customer List:-"
      
//       // create table header
//       var header = document.createElement('thead');
//       var headerRow = document.createElement('tr');
//       headerRow.appendChild(createCell('th', 'Sr.No.'))
//       headerRow.appendChild(createCell('th', 'Username'));
//       headerRow.appendChild(createCell('th', 'Email'));
//       headerRow.appendChild(createCell('th', 'Gender'));
//       // headerRow.appendChild(createCell('th', 'Age'));
//       // headerRow.appendChild(createCell('th', 'City'));
//       headerRow.appendChild(createCell('th', 'Phone'));
//       header.appendChild(headerRow);
//       table.appendChild(header);


//         fetch('https://stormy-flannel-shirt-ox.cyclic.app/users1/')
//         .then(res => res.json())
//         .then(data => {
//           // console.log(data.user)
//           displayData(data.user)
//       })
//         .catch((err)=>{
//           console.log(err)
//         })

//       function displayData(data){
//         let tbody = document.createElement("tbody")
//         tbody.innerHTML = null
//         let count=0
//         data.forEach((el)=>{
      
//           let row = document.createElement("tr")
      
//               let srno = document.createElement("td")
//               let username = document.createElement("td")
//               let email = document.createElement("td")
//               let gender = document.createElement("td")
//               // let age = document.createElement("td")
//               // let city = document.createElement("td")
//               let phone = document.createElement("td")
      
              
//               count++
//               srno.textContent = `${count}.`
//               username.textContent = el.username
//               username.style.fontWeight = "Bold"
//               email.textContent = el.email
//               gender.textContent = el.gender
//               // age.textContent = el.age
//               // city.textContent = el.city
//               phone.textContent = generateMobileNumber()
          

//             row.append(srno,username,email,gender,phone)
//             tbody.append(row)
//             table.appendChild(tbody)
            
//         })
//         // addBox.appendChild(heading)
//         addBox.appendChild(table)
//       }
      
//       function createCell(tag, text) {
//         var cell = document.createElement(tag);
//         cell.textContent = text;
//         return cell;
//       }


//       function generateMobileNumber() {
//         var mobileNumber = '9'; 
//         for (var i = 1; i < 10; i++) { 
//           mobileNumber += Math.floor(Math.random() * 10); 
//         }
//         return mobileNumber;
//       }
// })