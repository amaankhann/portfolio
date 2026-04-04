import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Nysargik FPO · New Delhi</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and operating end-to-end ETL pipelines ingesting 18TB of
              oceanographic NPZ/NetCDF data into QuestDB at 100,000 rows/second
              via 32 parallel workers. Built production FastAPI data access layer
              with 104-case automated test suite at 100% pass rate. Architecting
              full on-premise infrastructure (QuestDB, PostgreSQL, Airflow, MinIO)
              for the Ocean Foundation Model and Kastia Capital — India's first
              SEBI-regulated Collective Investment Scheme.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Trainee</h4>
                <h5>Insignia Consultancy Solutions · New Delhi</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built and optimised ML/NLP pipelines (NLTK, SpaCy, BERT) for text
              classification and sentiment analysis, achieving 90%+ accuracy.
              Improved model performance by 45% via hyperparameter tuning and
              feature engineering. Presented results via Tableau dashboards for
              stakeholder review.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI / ML Developer</h4>
                <h5>Esperon Digital Pvt. Ltd. · New Delhi</h5>
              </div>
              <h3>2022–23</h3>
            </div>
            <p>
              Designed end-to-end supervised and unsupervised ML pipelines for
              large-scale predictive analytics and classification using Python
              (scikit-learn, XGBoost), with rigorous validation and performance
              benchmarking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — CS (AI & ML)</h4>
                <h5>Jamia Hamdard · New Delhi</h5>
              </div>
              <h3>2020–24</h3>
            </div>
            <p>
              Bachelor of Technology in Computer Science with specialisation in
              Artificial Intelligence and Machine Learning. CGPA: 8.49.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;