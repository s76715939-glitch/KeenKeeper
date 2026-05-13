import { FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white p-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Brand Name */}
        <h1 className="text-4xl sm:text-5xl font-bold">
          Keen<span className="font-light">Keeper</span>
        </h1>
        <p className="mt-2 text-sm md:text-base max-w-xl mx-auto text-white opacity-80">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <h3 className="text-xl my-4">Social Links</h3>
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="p-3 rounded-full bg-white text-[#244D3F] hover:bg-[#1a886165] hover:text-white transition-colors duration-300"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-white text-[#244D3F] hover:bg-[#1a886165] hover:text-white transition-colors duration-300"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-white text-[#244D3F] hover:bg-[#1a886165] hover:text-white transition-colors duration-300"
          >
            <FaXTwitter size={20} />
          </a>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm border-t border-[#1a886165] pt-6">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
