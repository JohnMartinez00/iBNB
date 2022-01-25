import react from "react";
import "./OurTeam.css";
import TeamCard from "./TeamCard";

const person_card_infos = [
  { id: 1, title: "Ramy", content: "Chief Executive Officer" },
  { id: 2, title: "Jonathan", content: "Chief Operations Officer" },
  { id: 3, title: "Niccolo", content: "Chief Technology Officer" },
  { id: 4, title: "Justin", content: "Chief Automation Officer" },
  { id: 5, title: "Maxime", content: "Chief Quantitative Officer" },
  { id: 6, title: "Mohammed", content: "Chief Quantitative Officer" },
  { id: 7, title: "Paul", content: "Chief Brand Officer" },
  { id: 8, title: "Jack", content: "Chief Communication Officer" },
];

const OurTeam = () => {
  return (
    <div className="w-full">
      <div id="team" className="team_container mx-auto">
        <h1 className="team_title">Our Team</h1>
        <div className="flex flex-wrap">
          <button type="button" className="btn_team mr-3 btn_padding uppercase">
            all
          </button>
          <button type="button" className="btn_team mr-3 btn_padding uppercase">
            core
          </button>
          <button type="button" className="btn_team mr-3 btn_padding uppercase">
            tech
          </button>
          <button type="button" className="btn_team mr-3 btn_padding uppercase">
            development
          </button>
          <button type="button" className="btn_team mr-3 btn_padding uppercase">
            design
          </button>
        </div>
        <div className="grid gap-x-8 gap-y-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-11">
          <TeamCard person_card_infos={person_card_infos} />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
