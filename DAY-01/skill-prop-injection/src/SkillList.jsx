import SkillBadge from "./SkillBadge";

function SkillList(props) {

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>

      {
        props.skills.map((item, index) => (

          <SkillBadge
            key={index}
            name={item.name}
            level={item.level}
          />

        ))
      }

    </div>
  );
}

export default SkillList;