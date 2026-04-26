import Navbar from "../../component/navbar/Navbar";
function Contact(){
    return (
        <>
            <Navbar/>
            <main className="min-h-screen w-screen bg-[#1A1A1A] pt-[120px] flex items-start justify-center">
                <div className="m-auto grid w-[70%] grid-cols-[1fr_2fr] gap-x-16 max-[768px]:grid-cols-1 max-[1024px]:w-full max-[1024px]:p-12">
                
                <div>
                    <form className="flex flex-col">
                    <h1 className="mb-5 font-anton text-white text-4xl">
                        Contact Us
                    </h1>

                    <label className="text-white">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="mb-4 border border-white bg-transparent p-2 text-white"
                    />

                    <label className="text-white">Email</label>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="mb-4 border border-white bg-transparent p-2 text-white"
                    />

                    <textarea
                        rows="4"
                        placeholder="Enter your message"
                        className="border border-white bg-transparent p-2 text-white"
                    />

                    <button
                        type="submit"
                        className="mt-6 rounded-lg border-none bg-[#CCCCCC] px-6 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#C00500] hover:text-white"
                    >
                        Submit
                    </button>
                    </form>
                </div>

                <div>
                    <h1 className="mb-5 font-anton text-white text-4xl">
                    Locate Us
                    </h1>

                    <iframe
                        title="New York Slice Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12088.426069622928!2d-74.0073492128418!3d40.759681900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599a30594f49%3A0xa03d4ee12151414d!2sA%20Slice%20of%20New%20York*21!5e0!3m2!1sen!2sus!4v1772933453113!5m2!1sen!2sus"
                        className="block min-h-[420px] h-[420px] w-full rounded-xl border-none"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                </div>
            </main>
        </>
    );
  };
  
  export default Contact;