import ExperienceCard from "@/component/ExperienceCard/ExperienceCard";
import "./WorkExperience.scss";

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "React JS Developer",
      company: "I Gen Solution",
      companylogo: "/assets/images/igen.png",
      date: "Jul 2021 - Apr 2022",
      bgColor: "#4E357B",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Used React, JavaScript, and related tech to create dynamic web pages for a better user experience.",
        "Made reusable components, optimized for faster load times, improving user experience.",
        "Collaborated with the backend team to integrate APIs for smooth data flow and consistency across the platform.",
      ],
    },
    {
      role: "Front-End Developer",
      company: "Orcalo Holding",
      companylogo: "/assets/images/orcalo.png",
      date: "Apr 2022 - Jun 2023",
      bgColor: "#2778A6",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Developing web apps using HTML, CSS, Material UI, JavaScript, React, and Next.js.",
        "Created user-friendly interfaces, increasing  customer engagement and satisfaction.",
        "Collaborated with the backend team to integrate APIs for smooth data flow and consistency.",
      ],
    },
    {
      role: "React / Next js Developer",
      company: "NGN International",
      companylogo: "assets/images/ngn.png",
      date: "Jun 2023 - Present",
      bgColor: "#2B945E",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Led a team in developing web apps using HTML, CSS, Tailwind, JavaScript, React, and Next.js.",
        "Consistently delivered high-quality, well-structured code.",
        "Created user-friendly interfaces, increasing  customer engagement and satisfaction.",
        "Collaborated with the backend team to integrate APIs for smooth data flow and consistency.",
      ],
    },
  ],
};

export default function WorkExperience() {
  if (workExperiences.display) {
    return (
      <div className="experience" id="experience">
        <div className="flex justify-center">
          <h1 className="heading">Experiences</h1>
        </div>
        <div>
          <div className="experience-cards-div">
            {workExperiences.experience.map((card, i) => {
              return (
                <ExperienceCard
                  key={i}
                  isDark={false}
                  cardInfo={{
                    company: card.company,
                    date: card.date,
                    bgColor: card.bgColor,
                    companylogo: card.companylogo,
                    role: card.role,
                    descBullets: card.descBullets,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
