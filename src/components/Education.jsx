function Education() {
  return (
    <section
      id="education"
      className="py-14 px-6 bg-gradient-to-br from-orange-600 via-fuchsia-900 to-rose-950"
    >
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-7">

          <p className="text-yellow-300 text-sm">
            🎓 Academic Background
          </p>

          <h2 className="text-3xl font-bold text-white mt-1">
            Education
          </h2>

          <div className="w-12 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>

        </div>


        {/* Compact Education Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-5 py-5 shadow-xl">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            {/* Education Details */}
            <div>

              <h3 className="text-lg font-bold text-yellow-300">
                Bachelor of Engineering
              </h3>

              <p className="text-white text-sm font-medium mt-1">
                Computer Science and Engineering
              </p>

              <p className="text-white/70 text-sm mt-2">
                🏫 Mount Zion College of Engineering and Technology, Pudukkottai
              </p>

            </div>


            {/* Academic Details */}
            <div className="md:text-right">

              <p className="text-white text-sm font-semibold">
                🎓 2023 – 2027
              </p>

              <p className="text-yellow-300 text-sm font-bold mt-1">
                CGPA: 7.43 / 10
              </p>

              <p className="text-white/50 text-xs mt-1">
                Till 6th Semester
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;