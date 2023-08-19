import { Card, CardContent, Stack } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'


const Setpassword = () => {
    const [name,setname]=useState()
    const [pass,setpass]=useState()``
    const [pass1,setpass1]=useState()
    const fun=async()=>{
        if(pass==pass1){
        try{
        const res=await axios.post("http://localhost:8000/update/"+name+"/"+pass)
        if(res){
            alert("successfully updated")
        }
    }
    catch(e){
        alert(e)
    }
    }
    else{
        alert("Password didnot match")
    }
}
  return (
    <div>
        {/* <label style={{textAlign:'center',fontSize:'30px',color:'blue'}}><b>resetting password</b></label>
        <input type="text" placeholder="enter the new password" onChange={(e)=>setpass(e.target.value)} style={{width:'400px',height:'50px',marginTop:'10px'}}/>
        <br/>
        <button onClick={fun}>Submit</button> */}
        <div>
        <Card sx={{borderRadius:'16px',height:'400px',width:'450px',margin:'auto',marginTop:'10%'}}>
        <CardContent>
        <Stack spacing={2} direction='column' >
        <label style={{textAlign:'center',fontSize:'30px',color:'blue'}}><b>Resetting passowrd</b></label>
        <input type="name" placeholder="name" onChange={(e)=>setname(e.target.value)} style={{width:'400px',height:'50px'}}/>
        <br/>
        <input type="password" placeholder="Enter the new password" onChange={(e)=>setpass(e.target.value)} style={{width:'400px',height:'50px'}}/>
        <br/>
        <input type="password" placeholder="Re-enter the password" onChange={(e)=>setpass1(e.target.value)} style={{width:'400px',height:'50px'}}/>
        <br/>
        <input type="submit" onClick={fun} style={{width:'410px',height:'50px'}}/>
        </Stack>
        </CardContent>
        </Card>
        </div>

    </div>
  )
}

export default Setpassword