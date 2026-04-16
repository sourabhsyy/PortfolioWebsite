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
              name: "Credit Card Fraud Detection System",
              category: "Machine Learning Application",
              tools: "Python, Scikit-learn, SMOTE, Streamlit",
              description: "Machine learning system on a highly imbalanced dataset (0.17% fraud cases), focusing on real-world fraud detection challenges. Applied SMOTE-based resampling to balance data distribution. Built and optimized a Random Forest model achieving high recall with minimal false negatives. Evaluated using precision, recall, and F1-score. Deployed a real-time Streamlit application with probability-based fraud alerts."
            },
            {
              name: "Bank Reconciliation Engine",
              category: "Financial Data System",
              tools: "Python, Pandas, Streamlit",
              description: "Built a reconciliation system to match transactions between internal records and bank statements, enabling accurate financial validation. Automated identification of matched, missing, and mismatched entries. Handled real-world inconsistencies and developed an interactive dashboard for visualizing discrepancies and tracking reconciliation results."
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
