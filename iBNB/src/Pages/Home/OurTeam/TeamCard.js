import react from "react";
import "./TeamCard.css";

function TeamCard(props) {
  const card_chip = props.person_card_infos.map((person_card_info) => (
    <div className="flex flex-wrap flex-col block">
      <img
        src={require(`./person` + person_card_info.id + `.png`).default}
        className="person_border"
      ></img>
      <p className="person_name">{person_card_info.title}</p>
      <p className="person_info">{person_card_info.content}</p>
      <div>
        <button
          type="button"
          className="px-3 py-2 rounded-lg person_card person_card_color01 uppercase"
        >
          Tech
        </button>
        <button
          type="button"
          className="px-3 py-2 rounded-lg person_card person_card_color02 uppercase"
        >
          Core
        </button>
      </div>
    </div>
  ));
  return <>{card_chip}</>;
}
export default TeamCard;
