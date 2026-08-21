import trafficDashboard from "../assets/traffic-dashboard.png";
import burgerKingDashboard from "../assets/burgerking-dashboard.png";

function ProjectCard({
  image,
  title,
  type,
  description,
  icon,
  points,
  tags,
}) {
  return (
    <div
      className="
        group
        flex flex-col
        overflow-hidden
        rounded-2xl
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        shadow-lg
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-300
        h-full
      "
    >

      {/* ================= IMAGE ================= */}
      <div
        className="
          w-full
          h-64
          bg-black/25
          border-b border-white/20
          p-3
          flex
          items-center
          justify-center
          overflow-hidden
          shrink-0
        "
      >
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-full
            object-contain
            rounded-lg
            transition-transform
            duration-300
            group-hover:scale-[1.02]
          "
        />
      </div>


      {/* ================= PROJECT DETAILS ================= */}
      <div className="flex flex-col flex-1 p-5">

        {/* TITLE + TYPE */}
        <div className="flex items-start justify-between gap-3">

          <h3 className="text-lg md:text-xl font-bold text-yellow-300 leading-snug">
            {icon} {title}
          </h3>

          <span
            className="
              shrink-0
              bg-white/10
              border border-white/20
              text-white
              px-3 py-1.5
              rounded-full
              text-xs
              font-medium
            "
          >
            📊 {type}
          </span>

        </div>


        {/* DESCRIPTION */}
        <p className="text-white/80 text-sm leading-6 mt-4">
          {description}
        </p>


        {/* KEY ANALYSIS */}
        <div className="mt-5">

          <h4 className="text-yellow-300 font-bold text-sm mb-3">
            🔍 Key Analysis
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-5">

            {points.map((point, index) => (
              <p
                key={index}
                className="text-white/80 text-sm"
              >
                {point}
              </p>
            ))}

          </div>

        </div>


        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mt-auto pt-5">

          {tags.map((tag, index) => (
            <span
              key={index}
              className="
                bg-white/10
                border border-white/20
                text-white
                px-3 py-1.5
                rounded-full
                text-xs
              "
            >
              {tag}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}


function Projects() {
  return (
    <section
      id="projects"
      className="
        py-12
        px-5
        md:px-8
        bg-gradient-to-br
        from-rose-950
        via-fuchsia-900
        to-orange-600
      "
    >

      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-8">

          <p className="text-yellow-300 text-sm font-medium">
            🚀 My Work
          </p>

          <h2 className="text-3xl font-bold text-white mt-1">
            Projects
          </h2>

          <div className="w-14 h-1 bg-yellow-400 rounded-full mx-auto mt-2"></div>

        </div>


        {/* ================= PROJECT GRID ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


          {/* =====================================================
              PROJECT 1
          ===================================================== */}

          <ProjectCard
            image={trafficDashboard}
            icon="🚦"
            title="City Traffic Accident Analysis Dashboard"
            type="Excel"
            description="Interactive Excel dashboard developed to analyze traffic accident data and identify important accident trends and patterns."
            points={[
              "📊 Accident Data",
              "📈 Pivot Charts",
              "🎛️ Interactive Slicers",
              "🌦️ Weather Analysis",
              "📍 Location Analysis",
              "⚠️ Severity Analysis",
            ]}
            tags={[
              "📊 Microsoft Excel",
              "📈 Pivot Charts",
              "🎛️ Slicers",
              "📍 Data Analysis",
            ]}
          />


          {/* =====================================================
              PROJECT 2
          ===================================================== */}

          <ProjectCard
            image={burgerKingDashboard}
            icon="🍔"
            title="Burger King Sales Analytics Dashboard"
            type="Power BI"
            description="Interactive Power BI dashboard developed to analyze sales and product performance and identify useful business insights."
            points={[
              "🧹 Data Preparation",
              "⚙️ Power Query",
              "📐 Basic DAX",
              "📊 Dashboard Creation",
              "🎯 KPI Analysis",
              "💡 Business Insights",
            ]}
            tags={[
              "📊 Power BI",
              "⚙️ Power Query",
              "📐 DAX",
              "🎯 KPIs",
            ]}
          />

        </div>

      </div>

    </section>
  );
}

export default Projects;