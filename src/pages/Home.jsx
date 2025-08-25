import Hero from  "../components/HERO";
import Features from  "../components/FEATURES";
import Header from  "../components/HEADER";
import Footer from  "../components/FOOTER";
function Home(){
  return(
    <div className="h-auto w-full bg-gradient-to-r from-purple-700 to-indigo-900">
      <Header></Header>
    <Hero></Hero>
    <Features></Features>
    <Footer></Footer>


    </div>
  )
}
export default Home; 
