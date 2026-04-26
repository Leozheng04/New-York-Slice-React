import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#111111] px-[5%] py-16 text-white">

      {/* Logo */}
      <div className="mb-8">
        <h1 className="font-['Anton'] text-4xl">NY.SLICE</h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* Hours */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">Hours</h2>
          <p className="mb-2 text-[#CCCCCC]">Monday: Closed</p>
          <p className="mb-2 text-[#CCCCCC]">Tuesday: 11:00 am - 08:00 pm</p>
          <p className="mb-2 text-[#CCCCCC]">Wednesday: 11:00 am - 08:00 pm</p>
          <p className="mb-2 text-[#CCCCCC]">Thursday: 11:00 am - 08:00 pm</p>
          <p className="mb-2 text-[#CCCCCC]">Friday: 11:00 am - 08:00 pm</p>
          <p className="mb-2 text-[#CCCCCC]">Saturday: 11:00 am - 08:00 pm</p>
          <p className="mb-2 text-[#CCCCCC]">Sunday: 11:00 am - 07:00 pm</p>
        </div>

        {/* Location */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">Location</h2>
          <p className="mb-2 text-[#CCCCCC]">123 Broadway</p>
          <p className="mb-2 text-[#CCCCCC]">New York, NY 10001</p>

          <div className="mt-4">
            <p className="text-[#CCCCCC]">NewYorkSlice129@gmail.com</p>
            <p className="text-[#CCCCCC]">(212) 555 - 4444</p>
          </div>
        </div>

        {/* Links */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-[#CCCCCC] hover:text-white">Home</a>
            </li>
            <li className="mb-2">
              <a href="/menu" className="text-[#CCCCCC] hover:text-white">Menu</a>
            </li>
            <li className="mb-2">
              <a href="#gallery-section" className="text-[#CCCCCC] hover:text-white">Gallery</a>
            </li>
            <li className="mb-2">
              <a href="#about" className="text-[#CCCCCC] hover:text-white">About</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="text-[#CCCCCC] hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">Newsletter</h2>

          <form className="mb-6 flex items-center border-b border-[#CCCCCC] pb-3">
            <FaEnvelope className="mr-2 text-[#CCCCCC]" />

            <input
              type="text"
              placeholder="Enter your email"
              className="w-full bg-transparent px-2 text-[#CCCCCC] outline-none"
            />

            <button type="submit" className="ml-2 text-white">
              <FaArrowRight />
            </button>
          </form>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:bg-[#E10600] hover:text-white cursor-pointer">
              <FaFacebook size={18} />
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:bg-[#E10600] hover:text-white cursor-pointer">
              <FaInstagram size={18} />
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:bg-[#E10600] hover:text-white cursor-pointer">
              <FaTwitter size={18} />
            </div>
          </div>
        </div>

      </div>

      <hr className="my-6 border-[#CCCCCC]/40" />

      <p className="text-center text-[#CCCCCC]">
        © 2026 New York Slice - All Rights Reserved
      </p>

    </footer>
  );
}

export default Footer;