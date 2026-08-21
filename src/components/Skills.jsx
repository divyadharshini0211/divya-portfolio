function Skills() {
  return (
    <section
      id="skills"
      className="py-10 px-6 bg-gradient-to-br from-rose-950 via-fuchsia-900 to-orange-600"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-7">

          <p className="text-yellow-300 text-sm">
            💻 What I Work With
          </p>

          <h2 className="text-3xl font-bold text-white mt-1">
            Skills
          </h2>

          <div className="w-12 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>

        </div>


        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">


          {/* Programming & Database */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-5 shadow-lg hover:-translate-y-1 transition duration-300">

            <div className="text-3xl">
              💻
            </div>

            <h3 className="text-lg font-bold text-yellow-300 mt-3">
              Programming & Database
            </h3>

            <div className="flex flex-wrap gap-2 mt-4">

              <span className="skill-tag text-white">
                ☕ Java
              </span>

              <span className="skill-tag text-white">
                🗄️ SQL
              </span>

              <span className="skill-tag text-white">
                🐬 MySQL
              </span>

              <span className="skill-tag text-white">
                🧩 OOP
              </span>

            </div>

          </div>


          {/* Data Analytics */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-5 shadow-lg hover:-translate-y-1 transition duration-300">

            <div className="text-3xl">
              📊
            </div>

            <h3 className="text-lg font-bold text-yellow-300 mt-3">
              Data Analytics
            </h3>

            <div className="flex flex-col gap-2 mt-4 text-sm text-white/85">

              <span>📈 Data Analysis</span>

              <span>🧹 Data Cleaning</span>

              <span>📊 Data Visualization</span>

              <span>🗃️ Database Concepts</span>

              <span>🔍 Exploratory Analysis</span>

            </div>

          </div>


          {/* Power BI */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-5 shadow-lg hover:-translate-y-1 transition duration-300">

            <div className="text-3xl">
              📉
            </div>

            <h3 className="text-lg font-bold text-yellow-300 mt-3">
              Power BI
            </h3>

            <div className="flex flex-col gap-2 mt-4 text-sm text-white/85">

              <span>⚙️ Power Query</span>

              <span>📐 DAX</span>

              <span>📊 Interactive Dashboards</span>

              <span>🎯 KPIs</span>

              <span>💡 Business Insights</span>

            </div>

          </div>


          {/* Tools */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-5 shadow-lg hover:-translate-y-1 transition duration-300">

            <div className="text-3xl">
              🛠️
            </div>

            <h3 className="text-lg font-bold text-yellow-300 mt-3">
              Tools
            </h3>

            <div className="flex flex-col gap-2 mt-4 text-sm text-white/85">

              <span>📗 Microsoft Excel</span>

              <span>📊 Power BI</span>

              <span>📈 Tableau</span>

              <span>🗄️ MySQL</span>

              <span>📄 Microsoft Word</span>

              <span>☕ Eclipse IDE</span>

              <span>📐 ArgoUML</span>

              <span>💻 Visual Studio Code</span>

            </div>

          </div>

        </div>


        {/* Soft Skills */}
        <div className="mt-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4">

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm">

            <span className="text-yellow-300 font-bold">
              🌟 Soft Skills
            </span>

            <span className="text-white/85">
              🧠 Analytical Thinking
            </span>

            <span className="text-white/85">
              💡 Problem Solving
            </span>

            <span className="text-white/85">
              💬 Communication
            </span>

            <span className="text-white/85">
              🤝 Team Collaboration
            </span>

            <span className="text-white/85">
              ⏱️ Time Management
            </span>

            <span className="text-white/85">
              🚀 Adaptability
            </span>

            <span className="text-white/85">
              📚 Quick Learner
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;