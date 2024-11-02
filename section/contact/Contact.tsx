"use client";
import DisplayLottie from "@/component/DisplayLottie/DisplayLottie";
import SocialMedia from "@/component/SocialMedia/SocialMedia";
import emoji from "react-easy-emoji";
import email from "../../public/assets/lottie/email.json";
import "./Contact.scss";

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "923499461014",
  email_address: "zahirr060@gmail.com",
};

const illustration = {
  animated: true, // Set to false to use static SVG
};

export default function Contact() {
  return (
    <div className="mt-10" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="contact-title flex justify-center lg:justify-start items-center">
            {contactInfo.title}
          </h1>
          <p
            className={
              "subTitle contact-subtitle flex justify-center text-center lg:text-start lg:justify-start items-center"
            }
          >
            {contactInfo.subtitle}
          </p>
          <div className={"contact-text-div"}>
            {contactInfo.number && (
              <>
                <a
                  className="contact-detail flex justify-center lg:justify-start"
                  href={`https://wa.me/${contactInfo.number}`} // Ensure the number is in international format without "+"
                  target="_blank"
                  rel="noopener noreferrer" // For security reasons
                >
                  +92-3499461014
                </a>
              </>
            )}
            <a
              className="contact-detail-email  flex justify-center lg:justify-start"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>

            <SocialMedia />
          </div>
        </div>
        <div className="contact-image-div hidden lg:block">
          {illustration.animated ? (
            <DisplayLottie animationData={email} />
          ) : (
            <img
              alt="Man working"
              src="/assets/images/contactMailDark.svg"
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}
