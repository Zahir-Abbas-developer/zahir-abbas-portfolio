import React from "react";
import "./Education.scss";
import EducationCard from "@/component/EducationCard/EducationCard";

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Numl University",
      logo: "./assets/images/numl.png",
      subHeader: "Bachelor in Software Engineering",
      duration: "August 2018 - April 2022",
      descBullets: [
        "Enthusiastic  Software Engineer",
        "Passionate about Coding and Innovation in Front End Technology",
        "Problem-solving",
        "Eager to contribute to cutting-edge tech projects and make a positive impact.",
      ],
    },
  ],
};

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <div className="flex justify-center">
          <h1 className="heading">Education</h1>
        </div>
        <div className="education-card-container">
          {educationInfo.schools.map((school: any, index: any) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
