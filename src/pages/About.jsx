import Header from  "../components/HEADER";

function About(){
  return(
    <section className="h-auto w-full bg-gradient-to-r from-purple-700 to-indigo-900 ">
      <Header></Header>
    <div className="mx-auto text-center py-8 w-1/2">
      <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl pb-3">FLE<span className="text-yellow-400 font-sans font-bold">XY</span></h1>
      <p className="text-white font-sans text-xl max-w-3xl mx-auto">At Flexy, we believe building a modern website should be simple, fast, and flexible.
Our platform is designed for creators, businesses, and developers who want to bring their ideas online without the hassle of outdated tools or complex setups.</p>
<p className="text-white font-sans text-xl max-w-3xl mx-auto">With a modern tech stack and a clean, responsive design approach, Flexy empowers you to:

⚡ Build lightning-fast, mobile-friendly websites.

🎨 Customize layouts with modern styling and smooth animations.

🔗 Seamlessly integrate features like routing, dynamic pages, and more.

Whether you’re launching a personal portfolio, a startup landing page, or a full business site — Flexy gives you the foundation to create with confidence.</p>
    </div>
    </section>
  )
}
export default About;