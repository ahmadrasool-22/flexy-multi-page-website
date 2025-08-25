import Header from "../components/HEADER"
import { useState } from "react"

function Contact(){
  let [state,setState]=useState("");
  const [states,setStates]=useState("");

  const handleChange=(e)=>{
    e.preventDefault()
    setState(e.target.value)

  }
  const handleClick=()=>{
    setState("")
    setStates("your message has been sent");
  }


  return(
    <section className="h-screen w-full bg-gradient-to-r from-purple-700 to-indigo-900 ">
      <Header> </Header>
      <div className="text-center mx-auto">
        <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl pb-3">FLE<span className="text-yellow-400 font-sans font-bold">XY</span></h1>
          <input type="text"
          value={state} 
          placeholder="Enter your Message"
          onChange={handleChange} 
          onClick={()=>setStates("")}
          className="mx-auto p-6 py-4 w-auto h-auto  bg-white text-black font-sans text-xl transform active:scale-105 transition duration-300 ease-in-out rounded-full"
          />
          <button onClick={handleClick} className="px-6 py-3 font-semibold bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition duration-200 ease-in-out ml-3 mt-3">Send Message</button>
          
        <h2 className="text-white text-2xl font-serif mx-auto py-3 max-w-xl">{states}</h2>

      </div>

    </section>
  )
}
export default Contact;