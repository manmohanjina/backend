post=async()=>{
    let data={
        username:document.getElementById("username").value,
        password:document.getElementById("password").value
    }

    let link=`https://masai-api-mocker.herokuapp.com/auth/login`

    let res=await fetch(link,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
    let user=document.getElementById("username").value
    let token=await res.json()
   // console.log(token.token,user);
  //getprofile(user,token.token)
  savetoken(token.token,60000,data.username)
    
}




let savetoken=(token,time,username)=>{
    let user={token,username}
    
    localStorage.setItem("user_token",JSON.stringify(user))

    setTimeout(()=>{
        localStorage.setItem("user_token",JSON.stringify(null))

    },time)
}