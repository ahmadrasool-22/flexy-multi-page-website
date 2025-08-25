import { Link } from "react-router-dom";
function Header(){

  return(
    <header >
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl">FLE<span className="text-yellow-400 font-sans font-bold">XY</span></h1>
        <ul className="flex justify-evenly text-white">
          <li> <Link to="/" className=" rounded-full p-4 hover:bg-yellow-500 hover:font-semibold hover:text-black transition duration-300 ease-in-out">Home</Link></li>
          <li><Link to="/About" className=" rounded-full p-4 hover:bg-yellow-500 hover:font-semibold hover:text-black transition duration-300 ease-in-out">About</Link></li>
          <li><Link to="/contact" className=" rounded-full p-4 hover:bg-yellow-500 hover:font-semibold hover:text-black transition duration-300 ease-in-out" >Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header;