function Contact() {
  return (
    <section
      id="contact"
      className="py-10 px-6 bg-gradient-to-br from-rose-950 via-fuchsia-900 to-orange-600"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-7">
          <p className="text-yellow-300 text-sm">
            💌 Let's Connect
          </p>

          <h2 className="text-3xl font-bold text-white mt-1">
            Contact Me
          </h2>

          <div className="w-12 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
        </div>


        {/* Main Contact Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">

          {/* Intro */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-yellow-300">
              Interested in connecting? 🤝
            </h3>

            <p className="text-white/75 text-sm mt-2">
              I'm open to learning opportunities, internships,
              and meaningful collaborations.
            </p>
          </div>


          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-7">


            {/* EMAIL */}
            <a
              href="mailto:dharshinimzcet@gmail.com"
              className="bg-white/10 border border-white/10 rounded-xl p-5 text-center
              hover:bg-white/20 hover:-translate-y-1 transition duration-300"
            >

              <div className="text-3xl">
                📧
              </div>

              <h4 className="text-yellow-300 font-semibold text-sm mt-3">
                Email
              </h4>

              <p className="text-white text-xs mt-2 break-all">
                dharshinimzcet@gmail.com
              </p>

            </a>


            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/divyadharshini0205"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/10 rounded-xl p-5 text-center
              hover:bg-white/20 hover:-translate-y-1 transition duration-300"
            >

              <div className="text-3xl">
                💼
              </div>

              <h4 className="text-yellow-300 font-semibold text-sm mt-3">
                LinkedIn
              </h4>

              <p className="text-white text-xs mt-2 break-all">
                linkedin.com/in/divyadharshini0205
              </p>

            </a>


            {/* GITHUB */}
            <a
              href="https://github.com/divyadharshini0211"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/10 rounded-xl p-5 text-center
              hover:bg-white/20 hover:-translate-y-1 transition duration-300"
            >

              <div className="text-3xl">
                💻
              </div>

              <h4 className="text-yellow-300 font-semibold text-sm mt-3">
                GitHub
              </h4>

              <p className="text-white text-xs mt-2 break-all">
                github.com/divyadharshini0211
              </p>

            </a>


          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;