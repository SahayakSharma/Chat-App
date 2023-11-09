
import { useEffect, useState } from 'react';
import './App.css';
import './second.css'
import io from 'socket.io-client'

import { firstname,secondname,avatar } from './userinfo';

const socket=io.connect("http://localhost:8000")

// let msgs=[{}]
let id=0



function App() {

  const [message,setmessage]=useState("")
  const [display,setdisplay]=useState([])
  const [msgs,setmsgs]=useState([])

  

  const handlechange=(e)=>{

    setmessage(e.target.value)
  }


  const handlesubmit=()=>{
    let tosend=[message,firstname,avatar];
    socket.emit("send_message",tosend)
    setmsgs([...msgs,{
      id:id,
      type:"sent",
      name1:firstname,
      name2:secondname,
      avatar:avatar,
      message:message,
      time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()
    }])
    id=id+1;
    console.log(msgs)
   
    
    
  }
  useEffect(()=>{
    socket.on("receive_message",(data)=>{
      // ms.push(data.message)
      setdisplay([...display,data.message])
      setmsgs([...msgs,{
        id:id,
        type:"received",
        name1:data.message[1],
        name2:data.name2,
        avatar:data.message[2],
        message:data.message[0],
        time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()
      }])
      id=id+1;
      console.log(msgs)
   
    
    })
    
  },[socket,display,msgs])

    

  return (
    <div className="App box">

      <div className='box1'><input type="text" onChange={handlechange} value={message} placeholder='Type message here' />
      <button onClick={handlesubmit}>Send</button></div>
      
      <div className='box2'>{msgs.map((item,key)=>{
        if(item.type==="sent"){
          return(
            <>
            <div className='w-[100%] flex justify-end'>
            <img src={item.avatar} alt="" className='w-[20px] h-[20px] rounded-full inline mx-[10px] mt-[5px]' />
            <p key={key} className='max-w-[50%] text-left'><p className='text-[9px] text-left'>{item.name1}</p>{item.message} <p className='time'>{item.time}</p> </p>
            </div>
            </>
          )
        }
        else{
          return(
            <>
            <div className='w-[100%] flex '>
            <img src={item.avatar} alt="" className='w-[20px] h-[20px] rounded-full inline mx-[10px] mt-[5px] ' />
            <p key={key} className='max-w-[50%] ' ><p className='text-[9px] text-left'>{item.name1}</p>{item.message} <p className='time'>{item.time}</p></p>
            </div>
            </>
          )
        }
      })}</div>
      <div className='w-[100%] h-[15%] bg-rgb(167, 174, 122) border-b-[2px] text-black flex items-center'><img src={avatar} className='w-[70px] h-[70px] rounded-full  mx-[30px] border-black border-2' alt="" /><p className='text-left text-[35px] font-bold'>{firstname}</p>
      </div>
      
      
    </div>
  );
}

export default App;
