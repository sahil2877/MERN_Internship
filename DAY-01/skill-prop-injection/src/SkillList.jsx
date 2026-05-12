import SkillBadge from "./SkillBadge";

function SkillList(props) {

  return (
    <div>

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