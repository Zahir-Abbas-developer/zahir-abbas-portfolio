import Link from "next/link";
import "./StartupProjects.scss";

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "./assets/images/mortgage.png",
      projectName: "MortgageBasket",
      class: "one",
      projectDesc:
        "Mortgage Basket is a platform that helps the client to take a loan to purchase some real estate property or home. The borrower sets a rate and chooses the best  option. Also, several different roles are involved mainly System Admin, Mortgage Broker and Estate agent.",
      url: "https://app-dev.mortgagebasket.co.uk/home",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://app-dev.mortgagebasket.co.uk/home",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: "./assets/images/shareMyDine.png",
      projectName: "Share My Dine",
      class: "two",
      projectDesc:
        "The Vision of the product is to have the concept of sharing your meal at the kitchen owner's location/house and create a hospitable community by having the customers as your guest and inviting them for a meal as we develop an Acquaintanceship",
      url: "https://www.sharemydine.co.uk/",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://app-dev.sharemydine.co.uk/authentication/signin",
        },
      ],
    },
    {
      image: "./assets/images/foster.png",
      projectName: "Foster App",
      class: "three",
      projectDesc:
        "Foster care constitutes a system wherein a minor is placed under the care of a state-certified caregiver, often referred to as a foster parent, residing in a ward, group home, treatment facility, or a private residence.Alternatively, a recognized family member can assume this role.",
      url: "https://fosterapp.co.uk/home",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fosterapp.co.uk/home",
        },
      ],
    },
    {
      image: "./assets/images/nexio.png",
      projectName: "Nexio Health Care",
      class: "four",
      projectDesc:
        "Nexio Health is a dynamic force in the healthcare IT landscape, dedicated to driving innovation and excellence in patient care. We offer a comprehensive healthcare IT platform infused with AI-powered clinical solutions designed to transform patient care, improve operational efficiency, and make a significant impact on lives.",
      url: "https://app.nexiohealth.com/",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://app.nexiohealth.com/",
        },
      ],
    },
    {
      image: "./assets/images/realandvas.png",
      projectName: "ReaLand VA'S",
      class: "five",
      projectDesc:
        "Real estate investor with 7 years of experience. 3 years of fixes and flips and 4 years of Real estate wholesaling. I hold a total of 6 years in property management in commercial and residential management. Now the owner of First Impression Holding LLC a full-time Real Estate Investor and President at ReaLandVA’s.",
      url: "https://realandvas.net/",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://realandvas.net/",
        },
      ],
    },
    {
      image: "./assets/images/mpred.png",
      projectName: "MPRED",
      class: "six",
      projectDesc:
        "Data management enhances decision-making, boosts efficiency, and fuels business innovation.Our data management services provide comprehensive solutions to help organizations effectively handle their data assets.",
      url: "https://mpred.net/",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mpred.net/",
        },
      ],
    },
    {
      image: "./assets/images/wezingly.avif",
      projectName: "Wezingly",
      class: "seven",
      projectDesc:
        "Awezingly appears to be an online retail platform based in Australia. They offer a wide range of products across various categories, including furniture, home and garden items, electronics, baby and kids' products, sports equipment, and pet care.",
      url: "https://www.awezingly.com/",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.awezingly.com/",
        },
      ],
    },
    {
      image: "./assets/images/sheikh.png",
      projectName: "Sheikh Presents",
      class: "eight",
      projectDesc:
        "A premium editing and photography service company based in Islamabad, Pakistan. With over 10 years of experience, 300+ happy clients, and 1,000+ completed projects, we are committed to delivering top-tier photo and video editing services. Whether you’re a photographer or a business.",
      url: "https://sheikhpresents.shop/",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sheikhpresents.shop/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

export default function StartupProject() {
  return (
    <div className="my-6" id="projects">
      <div className="flex justify-center">
        <h1 className="heading">Projects</h1>
      </div>
      <div className="projects-container ">
        {bigProjects.projects.map((project, i) => {
          return (
            <div className="card-wrap" key={i}>
              <div className={`card-header ${project.class}`}>
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="card-image"
                ></img>
              </div>
              <div className="card-content">
                <h1 className="card-title">{project.projectName}</h1>
                <p className="card-text">{project.projectDesc}</p>
                <Link
                  className={`card-btn ${project.class}`}
                  href={project.url}
                  passHref
                >
                  View
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
