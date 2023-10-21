
import { useEffect, useState } from 'react';
import './App.css';
import './second.css'
import io from 'socket.io-client'

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
    socket.emit("send_message",message)
    setmsgs([...msgs,{
      id:id,
      type:"sent",
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
        message:data.message,
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
      
      <div className='box2'>{msgs.map((item)=>{
        if(item.type==="sent"){
          return(
            <p className='sent'>{item.message} <p className='time'>{item.time}</p> </p>
          )
        }
        else{
          return(
            <p className='received'>{item.message} <p className='time'>{item.time}</p></p>
          )
        }
      })}</div>
      
      
    </div>
  );
}

export default App;
