
let submit=async()=>{
    let admin={name:111,email:"manish63singh@gmail.com"}
    let user_detail=JSON.parse(localStorage.getItem("user_token"))
    if(user_detail==null){
        alert("session expired login again")
        window.location.href="../frontend/login.html"
    }
    let userstatus=await getprofile(user_detail.username,user_detail.token)
    console.log(userstatus);
    if(userstatus.username==admin.name && userstatus.email==admin.email){
        let data={
            name:document.getElementById("name").value,
            img:document.getElementById("img").value,
            price:document.getElementById("price").value
        }
    
        let link=`http://localhost:3000/API/newkey`
    
        let res=fetch(link,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        });
         res=await res.json()
         console.log(res); 
    }
    else alert ("you are not a user")
    
   

}

let getprofile=async(username,token)=>{
    
    let link=`https://masai-api-mocker.herokuapp.com/user/${username}`
   
   let res=await fetch(link,{
    headers:{
       Authorization: `Bearer ${token}`
    },

   })
   res=await res.json()

   return res;
  
    
}