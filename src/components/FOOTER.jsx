import { Link } from "react-router-dom";

function Footer(){
  return(
    <footer className=" w-full h-40 rounded-3xl flex items-center p-4 bg-gradient-to-r from-purple-600 to-indigo-900 shadow-2xl">
      <div className=" flex justify-between w-full" >
        <p className="text-white text-xl">2025 <span className="text-lg font-bold">FLE</span><span className="text-yellow-300 font-bold text-xl">XY</span>. All rights reserved.</p>
        <ul className="flex justify-evenly">
          <li><a className=" rounded-full p-4 text-white hover:bg-yellow-500 hover:font-semibold hover:text-black transition duration-300 ease-in-out" href="#">Privacy</a></li>
          <li><a className=" rounded-full p-4 text-white hover:bg-yellow-500 hover:font-semibold hover:text-black transition duration-300 ease-in-out" href="#">Terms</a></li>
          <li><Link to="/contact" className=" rounded-full p-4 text-white hover:bg-yellow-500 hover:font-semibold hover:text-black transition duration-300 ease-in-out" >Contact</Link></li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer;