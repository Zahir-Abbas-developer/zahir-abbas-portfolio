import Button from "@/component/Button/Button";
import SocialMedia from "@/component/SocialMedia/SocialMedia";
import emoji from "react-easy-emoji";
import { IconCloudDemo } from "../cloud";
import "./Greeting.scss";

const greeting = {
  username: "Zahir Abbas",
  title: "Hi, I'm Zahir",
  resumeLink:
    "https://drive.google.com/file/d/1dQIN2vy33bbmAjd7CtLhQWDX9O8VPJyn/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

export default function Greeting() {
  return (
    <div className="greet-main relative" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div w-full lg:w-[60%] xl:w-[70%] pt-6 md:pt-[5rem]">
          <div>
            <h1 className={"greeting-text mb-4"}>
              {" "}
              {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className={"greeting-text-p subTitle "}>
              A passionate Front End Software Developer <br></br> having an
              experience of building different Type Website with <br></br>{" "}
              JavaScript / Reactjs / Nextjs and some other cool libraries and
              frameworks.
            </p>
            <SocialMedia />
            <div className="flex justify-center lg:justify-start gap-3 items-center mt-2">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              )}
            </div>
          </div>
        </div>
        <div className="greeting-image-div relative hidden lg:block lg:w-[40%] xl:w-[30%]">
          {/* <Image alt="..." src="/assets/images/header.gif" fill></Image> */}
          <IconCloudDemo />
        </div>
      </div>
    </div>
  );
}
