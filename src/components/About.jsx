function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-gradient-to-br from-rose-950 via-fuchsia-900 to-orange-600"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <p className="text-yellow-300 text-base font-medium">
            👩‍💻 Get to Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            About Me
          </h2>

          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-5 rounded-full"></div>

        </div>


        {/* Main About Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">

          <div className="grid md:grid-cols-3 gap-10 items-center">

            {/* Profile Side */}
            <div className="flex justify-center">

              <div className="w-52 h-52 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl flex items-center justify-center">

                <span className="text-7xl">
                  👩‍💻
                </span>

              </div>

            </div>


            {/* About Content */}
            <div className="md:col-span-2">

              <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-5">
                Fresher | Aspiring Data Analyst 📊
              </h3>

              <p className="text-white/90 text-lg leading-8">
                I am a Computer Science Engineering undergraduate with
                a strong interest in Data Analytics and data-driven
                decision-making.
              </p>

              <p className="text-white/80 text-lg leading-8 mt-4">
                I have knowledge of SQL, Microsoft Excel, Power BI,
                Tableau, Java, and Data Visualization. I enjoy working
                with datasets, cleaning data, creating dashboards, and
                transforming raw data into meaningful insights.
              </p>

              <p className="text-white/80 text-lg leading-8 mt-4">
                I am continuously improving my analytical and technical
                skills through projects and hands-on learning, with the
                goal of starting my career as a Data Analyst.
              </p>

            </div>

          </div>


          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">

            {/* Card 1 */}
            <div className="bg-white/10 rounded-2xl p-5 text-center border border-white/10 hover:bg-white/20 hover:-translate-y-1 transition duration-300">

              <div className="text-3xl">
                📊
              </div>

              <p className="text-white font-semibold mt-3">
                Data Analysis
              </p>

            </div>


            {/* Card 2 */}
            <div className="bg-white/10 rounded-2xl p-5 text-center border border-white/10 hover:bg-white/20 hover:-translate-y-1 transition duration-300">

              <div className="text-3xl">
                🧹
              </div>

              <p className="text-white font-semibold mt-3">
                Data Cleaning
              </p>

            </div>


            {/* Card 3 */}
            <div className="bg-white/10 rounded-2xl p-5 text-center border border-white/10 hover:bg-white/20 hover:-translate-y-1 transition duration-300">

              <div className="text-3xl">
                📈
              </div>

              <p className="text-white font-semibold mt-3">
                Data Visualization
              </p>

            </div>


            {/* Card 4 */}
            <div className="bg-white/10 rounded-2xl p-5 text-center border border-white/10 hover:bg-white/20 hover:-translate-y-1 transition duration-300">

              <div className="text-3xl">
                💡
              </div>

              <p className="text-white font-semibold mt-3">
                Problem Solving
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;