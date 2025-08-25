function Feature(){
  return(
    <section className="w-full   bg-gradient-to-r from-purple-700 to-indigo-900">
      <h2 className="text-4xl text-yellow-400 font-bold mb-5 text-center">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-1/2 mx-auto pb-10">
      
      <div className="text-yellow-600 shadow-lg bg-white text-xl  p-4 text-center rounded-3xl hover:shadow-xl hover:bg-gray-50 transform transition duration-300 ease-in-out hover:scale-105 ">
        <p className="text-yellow-600 font-semibold  text-xl text-center mb-10 rounded-3xl">Fast Performance ⚡</p> 
        <button className="px-6 py-3 font-semibold bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition">Learn More</button>
        </div>
      <div className="text-yellow-600 shadow-lg bg-white text-xl  p-4 text-center rounded-3xl hover:shadow-xl hover:bg-gray-50 transform transition duration-300 ease-in-out hover:scale-105 ">
        <p className="text-yellow-600 font-semibold  text-xl text-center  mb-10 rounded-3xl">Responsive Design 📱</p> 
            <button className="px-6 py-3 font-semibold bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition">Learn More</button>
      </div>
      <div className="text-yellow-600 shadow-lg bg-white text-xl  p-4 text-center rounded-3xl hover:shadow-xl hover:bg-gray-50 transform transition duration-300 ease-in-out hover:scale-105 ">
        <p className="text-yellow-600 font-semibold text-xl text-center mb-10">Easy Customization 🎨</p> 
            <button className="px-6 py-3 font-semibold bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition">Learn More</button>

      </div>
      <div className="text-yellow-600 shadow-lg bg-white text-xl p-4 text-center rounded-3xl hover:shadow-xl hover:bg-gray-50 transform transition duration-300 ease-in-out hover:scale-105 ">
        <p className="text-yellow-600 font-semibold text-xl text-center mb-10 rounded-3xl">Fully Scalable ⚡</p> 
        <button className="px-6 py-3 font-semibold bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition">Learn More</button>
        </div>

    </div>
    </section>

  )
}
export default Feature;