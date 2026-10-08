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
                <h4>Web & AI Development Intern</h4>
                <h5>Pentapolis Foundation, Kolkata</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on web development using the MERN stack, contributing to
              responsive user interfaces and REST API integration. Gained
              practical experience in problem-solving, teamwork, and developing
              web-based solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development With AI Trainee</h4>
                <h5>3 Skill</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completed practical training focused on web development with AI,
              strengthening my understanding of frontend development,
              responsive design, and modern web technologies through hands-on
              tasks and projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aspiring Java Developer</h4>
                <h5>Personal Development</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently strengthening my foundation in Java, OOP, data
              structures, and web development while building practical
              projects. My goal is to grow into a Java Full-Stack Developer
              and contribute to real-world software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
