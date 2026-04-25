import Hero from "./component/hero";
import Navbar from "../../component/navbar/Navbar";
function Home(){
    return(
        <>
            <Navbar />
            <main>
                <Hero />

            </main>
        </>
    )
}
export default Home;