function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-rose-950/70 backdrop-blur-xl border-b border-white/10 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold text-yellow-300">
          ✨ Divya Portfolio
        </h1>

        <ul className="hidden md:flex gap-8 text-white">

          <li className="hover:text-yellow-300 transition cursor-pointer">
            🏠 Home
          </li>

          <li className="hover:text-yellow-300 transition cursor-pointer">
            👩 About
          </li>

          <li className="hover:text-yellow-300 transition cursor-pointer">
            🎓 Education
          </li>

          <li className="hover:text-yellow-300 transition cursor-pointer">
            💻 Skills
          </li>

          <li className="hover:text-yellow-300 transition cursor-pointer">
            📂 Projects
          </li>

          <li className="hover:text-yellow-300 transition cursor-pointer">
            🏆 Certificates
          </li>

          <li className="hover:text-yellow-300 transition cursor-pointer">
            📞 Contact
          </li>

        </ul>

        <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition">

          📄 Resume

        </button>

      </div>

    </nav>
  );
}

export default Navbar;