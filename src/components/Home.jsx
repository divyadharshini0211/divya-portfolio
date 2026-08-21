function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-rose-950 via-fuchsia-900 to-orange-600 flex items-center px-6 md:px-12 pt-24"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* Welcome Badge */}
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full text-yellow-300 shadow-lg">
            ✨ Welcome to My Portfolio
          </span>


          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-7 leading-tight">
            Hi, I'm
            <br />

            <span className="text-yellow-300">
              Divya Dharshini
            </span>
          </h1>


          {/* Role */}
          <h2 className="text-2xl md:text-3xl text-white mt-5 font-semibold">
            📊 Aspiring Data Analyst
          </h2>


          {/* Introduction */}
          <p className="text-white/85 text-base md:text-lg leading-8 mt-6 max-w-xl">
            I am a Computer Science Engineering undergraduate and a fresher
            aspiring to build my career in Data Analytics. I am interested
            in working with data, creating meaningful visualizations, and
            finding useful insights from datasets.
          </p>


          {/* Skills Preview */}
          <div className="flex flex-wrap gap-3 mt-7">

            <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full">
              🗄️ SQL
            </span>

            <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full">
              📊 Power BI
            </span>

            <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full">
              📗 Excel
            </span>

            <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full">
              📈 Tableau
            </span>

          </div>


          {/* Resume Button */}
          <div className="mt-9">

            <a
              href="/dd final data analyst resume.pdf"
              download="Divya_Dharshini_Resume.pdf"
              className="inline-flex items-center gap-3 bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full shadow-xl hover:bg-yellow-300 hover:scale-105 transition duration-300"
            >
              📄 Download Resume
            </a>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full">
            </div>


            {/* Profile Card */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl flex items-center justify-center">

              <div className="text-center">

                <div className="text-7xl md:text-8xl">
                  👩‍💻
                </div>

                <p className="text-white font-semibold mt-4">
                  Data Analytics
                </p>

                <p className="text-yellow-300 text-sm mt-1">
                  📊 Learning • Building • Growing
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;