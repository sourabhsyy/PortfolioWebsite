import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Internship</h4>
                <h5>Eargs Learning Solutions</h5>
              </div>
              <h3>Internship</h3>
            </div>
            <p>
              Hands-on experience in data science, machine learning, and analytical model development for business use cases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>IBM & MKCL</h5>
              </div>
            </div>
            <p>
              IBM Artificial Intelligence Fundamentals <br />
              Foundation AI and ML - iLike / MKCL <br />
              Digital Freelancing - iLike / MKCL
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Science in Computer Science (CGPA: 7.12)</h4>
                <h5>K.V.Pendharkar College of Arts, Science and Commerce</h5>
              </div>
              <h3>2023 – 2026</h3>
            </div>
            <p>
              Dombivli, Maharashtra
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Education (Percentage: 49.50%)</h4>
                <h5>Eknath B Madhavi Junior College</h5>
              </div>
              <h3>2021 – 2023</h3>
            </div>
            <p>
              Dombivli, Maharashtra
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Education (Percentage: 77.60%)</h4>
                <h5>S.M.G VIDYAMANDIR HIGH SCHOOL</h5>
              </div>
              <h3>2015 – 2021</h3>
            </div>
            <p>
              Diva, Maharashtra
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
