import "./styles/About.css";
const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Data Analyst / Data Engineer with 1.7+ years of experience building
          production-grade data infrastructure that processes 20 billion+
          records across geospatial and financial domains. At Nysargik, I
          engineered an end-to-end ETL pipeline ingesting 18TB of
          oceanographic NPZ/NetCDF data into QuestDB at 100,000 rows/second
          using 32 parallel workers — processing 15+ years of satellite
          observations across 8 variables and 50 depth layers. I built a
          FastAPI data access layer backed by a 104-case automated test suite
          at 100% pass rate, serving multi-format outputs across billions of
          records. Concurrently, I architected the complete on-premise data
          infrastructure for Kastia Capital — India's first SEBI-regulated
          Collective Investment Scheme — delivering 5 production analytics
          modules covering NAV computation, ESG scoring, AIF due diligence,
          portfolio monitoring, and mutual fund analytics. I hold a B.Tech in
          Computer Science (AI & ML) from Jamia Hamdard (CGPA: 8.49) and
          hold the Google Advanced Data Analytics Professional certification.
          I am actively targeting Data Engineering, Data Science, and ML
          Infrastructure roles at big tech and MNCs, open to relocation
          anywhere in India or internationally.
        </p>
      </div>
    </div>
  );
};
export default About;