import "./Navbar-css.css";

const Navbar = () => {
  return (
    <nav className="text-white bg-[#0A0F3B] p-[15px] h-[12vh] overflow-hidden flex items-center justify-around">
        <div className="left-nav">
            <img src="/Logo_2.png" alt=""/>
        </div>
        <div className="right-nav border-b-2 p-[10px]">
          <ul className="flex justify-center items-center gap-[25px]">
            <li><a href="/" className="hover:font-extrabold">Home</a></li>
            <li><a href="/" className="hover:font-extrabold">Connections</a></li>
            <li><a href="/" className="hover:font-extrabold">Jobs</a></li>
            <li><a href="/" className="hover:font-extrabold">Messaging</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar
