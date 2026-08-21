import googleDataAnalytics from "../assets/Certificate/google-data-analytics.png";
import ibmDataAnalytics from "../assets/Certificate/ibm-data-analytics.png";
import dataAnalyticsInternship from "../assets/Certificate/data-analytics-internship.png";
import microsoftExcel from "../assets/Certificate/microsoft-excel.png";

import machineLearning from "../assets/Certificate/machine-learning-onramp.png";
import deepLearning from "../assets/Certificate/deep-learning-onramp.png";
import mongodbBasics from "../assets/Certificate/mongodb-basics.png";
import javaInternship from "../assets/Certificate/java-internship.png";


function CertificateCard({ image, icon, title, provider }) {
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
      "
    >

      {/* ================= IMAGE AREA ================= */}
      <div
        className="
          w-full
          h-56
          bg-white
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
            rounded-md
            transition-transform
            duration-300
            group-hover:scale-[1.02]
          "
        />
      </div>


      {/* ================= DETAILS ================= */}
      <div className="p-4 min-h-[125px]">

        <div className="text-2xl mb-2">
          {icon}
        </div>

        <h3 className="text-base font-bold text-yellow-300 leading-snug">
          {title}
        </h3>

        <p className="text-white/70 text-sm mt-2">
          {provider}
        </p>

      </div>

    </div>
  );
}


function Certificates() {
  return (
    <section
      id="certificates"
      className="
        py-12
        px-5
        md:px-8
        bg-gradient-to-br
        from-orange-600
        via-fuchsia-900
        to-rose-950
      "
    >

      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-8">

          <p className="text-yellow-300 text-sm font-medium">
            🏆 My Achievements
          </p>

          <h2 className="text-3xl font-bold text-white mt-1">
            Certificates
          </h2>

          <div className="w-14 h-1 bg-yellow-400 rounded-full mx-auto mt-2"></div>

        </div>


        {/* ================= PROFESSIONAL ================= */}

        <div className="mb-9">

          <h3 className="text-xl font-bold text-white mb-5">
            🎯 Professional Certifications
          </h3>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
              items-stretch
            "
          >

            <CertificateCard
              image={googleDataAnalytics}
              icon="📊"
              title="Google Data Analytics Professional Certificate"
              provider="Coursera"
            />

            <CertificateCard
              image={ibmDataAnalytics}
              icon="📈"
              title="IBM Introduction to Data Analytics"
              provider="Coursera"
            />

            <CertificateCard
              image={dataAnalyticsInternship}
              icon="💼"
              title="Data Analytics Internship Completion Certificate"
              provider="GB Tech"
            />

            <CertificateCard
              image={microsoftExcel}
              icon="📗"
              title="Microsoft Excel Certificate"
              provider="Great Learning"
            />

          </div>

        </div>


        {/* ================= ADDITIONAL ================= */}

        <div>

          <h3 className="text-xl font-bold text-white mb-5">
            📜 Additional Certifications
          </h3>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
              items-stretch
            "
          >

            <CertificateCard
              image={machineLearning}
              icon="🤖"
              title="Machine Learning Onramp"
              provider="MathWorks"
            />

            <CertificateCard
              image={deepLearning}
              icon="🧠"
              title="Deep Learning Onramp"
              provider="MathWorks"
            />

            <CertificateCard
              image={mongodbBasics}
              icon="🍃"
              title="MongoDB Basics Certification"
              provider="MongoDB"
            />

            <CertificateCard
              image={javaInternship}
              icon="☕"
              title="Java Programming Internship Certificate"
              provider="CT Interns"
            />

          </div>

        </div>

      </div>

    </section>
  );
}


export default Certificates;