import "./styles/Work.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "Local Business Support App",
              category: "Business Analytics",
              tools: "Python, SQLite, Streamlit",
              description: "A comprehensive analytics application designed to help local businesses track performance and gather actionable insights. Built using Python and Streamlit, it leverages an SQLite database to efficiently store and analyze operational data in real-time."
            },
            {
              name: "Resume Screening System",
              category: "ATS-based Application",
              tools: "Python, Pandas, Streamlit",
              description: "An automated applicant tracking system (ATS) that streamlines the hiring process. This intelligent tool uses Python and Pandas to analyze, filter, and rank resumes based on job requirements, presenting the results through a user-friendly Streamlit interface."
            },
            {
              name: "Smart Expense Analyzer",
              category: "Data Analytics Dashboard",
              tools: "Python, Pandas, Matplotlib, Streamlit",
              description: "A sophisticated data analytics dashboard for finance management. It processes transaction data using Python and Pandas, utilizing Matplotlib to generate intuitive visualizations that map out spending habits and help optimize budgeting."
            }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <div className="work-image work-description">
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
