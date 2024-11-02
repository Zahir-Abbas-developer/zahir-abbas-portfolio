import Contact from "@/section/contact/Contact";
import Education from "@/section/education/Education";
import Footer from "@/section/footer/Footer";
import Greeting from "@/section/heroSection/Greeting";
import Skill from "@/section/Skill";
import StartupProject from "@/section/StartupProjects/StartupProject";
import WorkExperience from "@/section/workExperience/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[90%] m-auto xxl:w-full">
      <Greeting />
      <div className="relative">
        <div className="absolute right-0 top-0">
          <div className="relative w-[100vw] h-[100dvh]">
            <Image src="/assets/images/sun.png" fill alt="..." />
          </div>
        </div>
        <Skill />
        <WorkExperience />
      </div>
      <StartupProject />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
