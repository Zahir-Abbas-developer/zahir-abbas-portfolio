import "./EducationCard.scss";

export default function EducationCard({ school }: any) {


  const GetDescBullets = ({ descBullets }: any) => {
    return descBullets
      ? descBullets.map((item: any, i: any) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div>
      <div className="education-card">
        {school.logo && (
          <div className="education-card-left">
            <img
              crossOrigin={"anonymous"}
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
        )}
        <div className="education-card-right">
          
          <h5 className="education-text-school my-2">{school.schoolName}</h5>

          <div className="education-text-details">
            <h5 className={"education-text-subHeader"}>{school.subHeader}</h5>
            <p className={` education-text-duration`}>{school.duration}</p>
            <p className="education-text-desc">{school.desc}</p>
            <div className="education-text-bullets">
              <ul>
                <GetDescBullets descBullets={school.descBullets} />
              </ul>
            </div>
          </div>
        </div>
      </div>

 
    </div>
  );
}
