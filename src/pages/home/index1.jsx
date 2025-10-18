import React,{useState}from "react";
import {useNavigate} from 'react-router-dom'

const Homepage = () =>{
  const[roomcode,setRoomCode] = useState('')
  const navigate = useNavigate()

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    navigate(`/room/${roomcode}`)

  }


    return(
        <div className="home-page">
          <form onSubmit={handleFormSubmit} className="form">
            <div>
              <label>Enter Room Code</label>
              <input value={roomcode}
               onChange={e=>setRoomCode(e.target.value)}
               type="text" 
               required 
               placeholder="Enter Room Code" />
            </div>
              <button type="submit">Enter Room</button>
            
          </form>

        </div>
    )

}

export default Homepage