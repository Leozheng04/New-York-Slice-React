import Navbar from "../../component/navbar/Navbar";
import Hero from "./component/Hero";
import Gallery from "./component/Gallery";
import Footer from "./component/Footer";
function Home(){
    return(
        <>
            <Navbar />
            <main>
                <Hero />
                <Gallery />

                {/* About section*/}
                <section
                    id="about"
                    className="min-h-screen bg-[#1A1A1A] px-[5%] py-24 text-[#CCCCCC]"
                >
                    <div className="mx-auto max-w-[900px]">
                    
                    <h2 className="mb-6 text-center font-['Anton'] text-[2.6rem] text-white">
                        About Us
                    </h2>

                    <div className="mx-auto mb-8 h-1 w-[15%] rounded-full bg-[#E10600] lg:w-[10%]" />

                    <p className="mb-6 text-[1.1rem] leading-8">
                        At New York Slice, we think that outstanding pizza is more than simply food; 
                        it is a communal experience, a tradition, and a taste of the city that brings people together. 
                        Our restaurant was inspired by the iconic New York-style slice and opened to serve fresh, tasty pizza in a friendly and welcoming environment.
                    </p>

                    <p className="mb-6 text-[1.1rem] leading-8">
                        What began as a simple idea — cooking authentic, high-quality pizza with the freshest ingredients — has 
                        evolved into a gathering spot for friends, family, and neighbors to share wonderful meals and create lasting
                        memories. From our hand-tossed dough and thick house-made sauce to our carefully chosen toppings, 
                        each pizza is produced with care, passion, and pride.
                    </p>

                    <p className="mb-6 text-[1.1rem] leading-8">
                        Our goal is to bring together the bright energy of New York with the comfort of a neighborhood diner.
                        Whether you're stopping by for a quick lunch, a pie with friends, or a relaxing evening, 
                        we want your visit to be memorable. In addition to our unique pizzas, we take pride in providing fresh ingredients, 
                        large portions, and friendly service that makes each guest feel right at home.
                    </p>

                    </div>
                </section>
                <Footer />
                
            </main>
        </>
    )
}
export default Home;