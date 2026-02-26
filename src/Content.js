import * as React from 'react';
import styles from './Content.module.css';

function Face() {
  return (
    <main className={styles.printPage}>
      <img
        className={styles.printBackgroundImage}
        src="/cube.svg"
        alt="Printable website"
        aria-hidden="true"
      />

      <div className={styles.printContent}>
        <header>
          <h1>Yug Bhavsar</h1>
        </header>

        <div className={styles.container}>
          {/* ABOUT */}
          <article>
            <ul>
              <li>
                Data Scientist & Machine Learning Engineer passionate about
                building intelligent systems using machine learning, data
                analytics, and scalable technologies to solve real-world
                problems. Experienced in predictive modeling, data engineering,
                and visualization with a strong research and industry
                background.
              </li>

              <li>yugbhavsar2402@gmail.com</li>

              <li>
                <a
                  href="https://linkedin.com/in/yug-bhavsar-b886b9201/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/aarcane4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </article>

          {/* EXPERIENCE */}
          <section>
            <h2>Work Experience</h2>
            <hr />

            <h3>Research Assistant — University of Texas at Arlington</h3>
            <p>
              Conducted research on time-dependent system reliability using
              Gaussian Process surrogate models to approximate complex dynamic
              limit-state functions across 1,000+ simulation samples. Developed
              surrogate-based Monte Carlo simulations that reduced computational
              cost by 60–70% compared to traditional brute-force methods while
              maintaining estimation accuracy. Applied statistical modeling and
              uncertainty quantification techniques to evaluate engineering
              system performance under uncertainty.
            </p>

            <h3>Data Science Intern — Social Benz</h3>
            <p>
              Optimized SQL queries and improved database architecture,
              reducing response time by 35% and server load by 15%. Designed ETL
              pipelines integrating multiple data sources into a centralized
              analytics warehouse. Developed machine learning models that
              increased user engagement by 20% and created Tableau dashboards
              enabling personalized messaging strategies, improving daily
              active users by 12%. Collaborated with cross-functional teams to
              translate business requirements into data-driven solutions.
            </p>

            <h3>Python Developer Intern — Cre-Art Solutions</h3>
            <p>
              Implemented robust data validation techniques in Django models,
              reducing data entry errors by 18%. Developed customer churn
              prediction models achieving 85% accuracy and deployed them using
              RESTful APIs for real-time predictions. Built interactive Power BI
              dashboards connected to SQL databases for business performance
              tracking and analytics reporting.
            </p>

            <h3>Machine Learning Intern — DevTown</h3>
            <p>
              Implemented supervised machine learning models for customer
              behavior analysis, improving prediction accuracy by 15%.
              Developed PostgreSQL stored procedures and complex queries for
              large-scale data processing. Applied preprocessing, feature
              engineering, and validation techniques achieving 95% model
              performance and presented research on Generative AI applications
              in data privacy.
            </p>
          </section>

          {/* PROJECTS */}
          <section>
            <h2>Projects</h2>
            <hr />

            <h3>Sales Forecasting System</h3>
            <p>
              Developed a machine learning-based sales forecasting system using
              historical time-series data to predict future demand trends.
              Performed data preprocessing, feature engineering, and model
              training using statistical and machine learning approaches.
              Evaluated performance using MAE and RMSE metrics and generated
              insights to support business planning and inventory management.
            </p>

            <h3>Customer Churn Prediction</h3>
            <p>
              Built a classification model to identify customers likely to
              leave a service. Implemented data cleaning, feature engineering,
              and model training using algorithms such as Logistic Regression
              and Random Forest, achieving 85% prediction accuracy. Provided
              actionable insights to improve customer retention strategies and
              business decision-making.
            </p>

            <h3>Reliability Modeling using Gaussian Processes</h3>
            <p>
              Designed Gaussian Process surrogate models to approximate complex
              engineering simulations and integrated them with Monte Carlo
              methods to evaluate system reliability. The approach significantly
              reduced computational time while maintaining predictive accuracy,
              demonstrating the effectiveness of machine learning in engineering
              analysis and uncertainty quantification.
            </p>

            <h3>Business Intelligence Dashboards</h3>
            <p>
              Developed interactive dashboards using Tableau and Power BI to
              visualize business metrics and user behavior patterns. Connected
              live SQL databases, created KPIs, and enabled data-driven
              decision-making across teams through intuitive visual analytics.
            </p>
          </section>

          {/* SKILLS */}
          <section>
            <h2>Skills</h2>
            <hr />
            <ul>
              <li>Programming: Python, R, SQL, Java, C++, PHP</li>
              <li>
                Machine Learning & AI: TensorFlow, PyTorch, Scikit-learn, NLP,
                Computer Vision, Time Series Analysis
              </li>
              <li>
                Data Engineering: ETL Pipelines, Data Cleaning, Feature
                Engineering, Statistical Modeling
              </li>
              <li>Databases: PostgreSQL, MySQL, MongoDB, SQL Server</li>
              <li>
                Visualization: Tableau, Power BI, Plotly, Matplotlib, Seaborn
              </li>
            </ul>
          </section>

          {/* EDUCATION */}
          <section>
            <h2>Education</h2>
            <hr />

            <h3>Master of Science in Data Science</h3>
            <p>
              <strong>University of Texas at Arlington</strong>
            </p>

            <p>
              Pursuing a Master’s degree focused on advanced data analytics,
              machine learning, and statistical modeling. Developed strong
              expertise in building predictive models, data-driven decision
              systems, and scalable analytical pipelines through academic
              coursework, research projects, and hands-on implementations.
            </p>

            <p>
              <strong>Relevant Coursework:</strong> Machine Learning,
              Statistical Methods, Data Mining, Deep Learning, Database Systems,
              Data Visualization, Time Series Analysis, Optimization
              Techniques.
            </p>

            <p>
              <strong>Key Skills Gained:</strong> Predictive modeling, feature
              engineering, large-scale data processing, statistical inference,
              model evaluation, and applied AI techniques for solving
              real-world business and engineering problems.
            </p>
          </section>

          {/* CONTACT */}
          <footer>
            <p>
              Happy to connect — feel free to reach out for collaboration,
              research discussions, or career opportunities in Data Science,
              Machine Learning, and AI.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default Face;