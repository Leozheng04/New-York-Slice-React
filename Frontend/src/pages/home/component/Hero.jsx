import heroBg from "../images/hero-background.jpg";

const Hero = () => {
    return (
      <section
        className="relative flex min-h-screen flex-col justify-center gap-8 bg-[#111111] bg-cover bg-no-repeat px-[5%] pb-16 pt-[8.5rem]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.82), rgba(0,0,0,0.45), rgba(0,0,0,0.18)), url(${heroBg})`,
        }}
      >
        
        <div className="max-w-[620px]">
          <h1 className="font-['Anton'] text-[clamp(3rem,7vw,5.5rem)] leading-[1] text-white">
            NEW YORK SLICE
          </h1>
  
          <h2 className="mt-4 mb-4 font-['Anton'] text-[clamp(1.5rem,3vw,2.4rem)] text-[#E10600]">
            Hot, Fresh, and Delicious
          </h2>
  
          <p className="mb-8 max-w-[540px] text-[1.1rem] leading-[1.8] text-[#CCCCCC]">
            The perfect slice for sharing with friends and late night cravings.
          </p>
        </div>
  
        <div>
          <a href="/order">
            <button className="rounded-[10px] bg-[#CCCCCC] px-8 py-4 text-2xl text-black transition duration-300 hover:-translate-y-[2px] hover:bg-[#C00500] hover:text-white">
              Order Now
            </button>
          </a>
        </div>
  
        {/* scroll arrow */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-3xl">
          <a href="#gallery-section" className="animate-bounce text-white/70 hover:text-white">
            ↓
          </a>
        </div>
      </section>
    );
  }
  
  export default Hero;
