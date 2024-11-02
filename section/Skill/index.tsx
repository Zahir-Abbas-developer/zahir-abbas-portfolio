import Image from "next/image";

const skills = [
  {
    name: "Javascript",
    icon: "/assets/images/js.png",
  },
  {
    name: "Typescript",
    icon: "/assets/images/typescript.png",
  },
  {
    name: "HTML 5",
    icon: "/assets/images/html.png",
  },
  {
    name: "CSS",
    icon: "/assets/images/css.png",
  },
  {
    name: "SASS",
    icon: "/assets/images/sass.png",
  },
  {
    name: "Tailwind",
    icon: "/assets/images/tailwind.png",
  },
  {
    name: "Bootstrap",
    icon: "/assets/images/bootstrap.png",
  },
  {
    name: "MUI",
    icon: "/assets/images/mui.png",
  },
  {
    name: "React js",
    icon: "/assets/images/react.png",
  },
  {
    name: "Next js",
    icon: "/assets/images/next.png",
  },
  {
    name: "Redux",
    icon: "/assets/images/redux.png",
  },
  {
    name: "Github",
    icon: "/assets/images/github.png",
  },
];

function Skill() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="heading">My Current Stack</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 2xl:gap-[3.5rem] items-center">
        {skills.map((data) => (
          <div
            key={data.name}
            className="flex items-center gap-3 justify-center py-3 px-7 bg-[#F5F5F5] rounded-[12px]"
          >
            <div className="grow">
              <div className="relative h-[3rem] w-[3rem]">
                <Image
                  src={data.icon}
                  alt=".."
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <p className="text-xl whitespace-nowrap">{data.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skill;
