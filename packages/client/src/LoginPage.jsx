import React, { useEffect, useState } from 'react'
import {setavatar,setfirstname,setsecondname,firstname,secondname,avatar} from './userinfo';
import { useNavigate } from 'react-router';






const LoginPage = () => {
    const[name1,setname1]=useState("");
    const[name2,setname2]=useState("");
    const [border1,setborder1]=useState("");
    const [border2,setborder2]=useState("");
    const [border3,setborder3]=useState("");
    const [border4,setborder4]=useState("");
    const [activeavtar,setactiveavtar]=useState("");

    const navigate=useNavigate();

    const avatarclick1=(a)=>{
        if(border1===""){
            setactiveavtar("/avatars/men-1.png")
            setborder1("3px solid black")
            setborder2("")
            setborder3("")
            setborder4("")
        }
        else{
            setborder1("")
            setactiveavtar("")
        }
        console.log("hi")
    }
    const avatarclick2=(a)=>{
        if(border2===""){
            setactiveavtar("/avatars/men-2.png")
            setborder1("")
            setborder2("3px solid black")
            setborder3("")
            setborder4("")
        }
        else{
            setborder2("")
            setactiveavtar("")
            
        }
        console.log("hi")
    }
    const avatarclick3=(a)=>{
        if(border3===""){
            setactiveavtar("/avatars/women-1.png")
            setborder1("")
            setborder2("")
            setborder3("3px solid black")
            setborder4("")
        }
        else{
            setborder3("")
            setactiveavtar("")
        }
        console.log("hi")
    }
    const avatarclick4=(a)=>{
        if(border4===""){
            setactiveavtar("/avatars/women-2.png")
            setborder1("")
            setborder2("")
            setborder3("")
            setborder4("3px solid black")
        }
        else{
            setborder4("")
            setactiveavtar("")
        }
        console.log("hi")
    }

    const handlechange1=(e)=>{
        setname1(e.target.value);
    }
    const handlechange2=(e)=>{
        setname2(e.target.value);
    }

    const handlesubmit=()=>{

        if(name1===""){
            alert('Enter First Name')
        }
        else if(name2===""){
            alert('Enter Second Name')
        }
        else if(activeavtar===""){
            alert('Choose an avatar')
        }
        else{
        setfirstname(name1);
        setsecondname(name2);
        setavatar(activeavtar);

        console.log(firstname+" "+secondname+" "+avatar)
        navigate("/chat");

        }

        

    }
    
  return (
    <div className='w-[100vw]  h-[100vh] flex items-center'>
        <div className='border-[2px] bg-[#dddddd] rounded-lg flex flex-col w-[60%] h-[500px] m-auto justify-around'>
            <div className='h-[5%]'></div>
            <input type="text" className='w-[80%] h-[80px] m-auto  border-none placeholder:text-[20px] rounded-md text-[20px] pl-[20px]' placeholder='Enter your first name' value={name1} onChange={handlechange1}/>
            <input type="text" className='w-[80%] h-[80px] m-auto  border-none placeholder:text-[20px] rounded-md text-[20px] pl-[20px]' placeholder='Enter your second name' value={name2} onChange={handlechange2}/>
            <div className='w-[80%] h-[20%] m-auto  flex flex-col' >
                
                <div className='w-[100%] h-[100%] flex justify-around items-center'>
                    <img src="/avatars/men-1.png" alt="a" className='w-[70px] h-[70px] rounded-full cursor-pointer' onClick={avatarclick1} style={{border:border1}} />
                    <img src="/avatars/men-2.png" alt="a" className='w-[70px] h-[70px] rounded-full cursor-pointer' onClick={avatarclick2} style={{border:border2}}/>
                    <img src="/avatars/women-1.png" alt="a" className='w-[70px] h-[70px] rounded-full cursor-pointer' onClick={avatarclick3} style={{border:border3}}/>
                    <img src="/avatars/women-2.png" alt="a" className='w-[70px] h-[70px] rounded-full cursor-pointer'onClick={avatarclick4} style={{border:border4}}/>
                </div>
            </div>
            <button className='w-[20%] h-[10%] m-auto bg-black hover:border-black hover:border-2 text-[18px] rounded-md text-white font-bold px-[10px] py-[5px]'onClick={handlesubmit}>Start Chatting</button>
            <div className='h-[5%]'></div>

        </div>
    </div>
  )
}

export default LoginPage
