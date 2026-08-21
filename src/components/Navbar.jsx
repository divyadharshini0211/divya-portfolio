function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-rose-950/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-yellow-300 hover:text-yellow-200 transition duration-300"
          >
            ✨ Divya Portfolio
          </a>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#home"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              🏠 Home
            </a>

            <a
              href="#about"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              👩 About
            </a>

            <a
              href="#education"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              🎓 Education
            </a>

            <a
              href="#skills"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              💻 Skills
            </a>

            <a
              href="#projects"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              📁 Projects
            </a>

            <a
              href="#certificates"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              🏆 Certificates
            </a>

            <a
              href="#contact"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              📞 Contact
            </a>

          </div>

          {/* Resume */}
          <a
            href="/dd final data analyst resume.pdf"
            download="Divya_Dharshini_dd final analyst resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 hover:scale-105 transition duration-300"
          >
            📄 Resume
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;