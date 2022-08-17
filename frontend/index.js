

let getdata=async()=>{
    let link=`https://masai-api-mocker.herokuapp.com/auth/register`
    let res=await fetch(link)
    let data=await res.json()
    console.log(data);
}
let data=async()=>{
    let form_data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        username: document.getElementById("username").value,
        mobile: document.getElementById("mobile").value,
        description: document.getElementById("description").value,
      };

      let link=`https://masai-api-mocker.herokuapp.com/auth/register`
      let res=await fetch (link,{
        method:"POST",
        body:JSON.stringify(form_data),
        headers:{
            "Content-Type":"application/json"
        },
      })
      res=await res.json()
      console.log(res);
      window.location.href="./login.html"
     
}

