function SkillBadge(props) {

  return (
    <div className="sb-skillBox">

      <h2>{props.name}</h2>

      <p>Level: {props.level}</p>

      {
        props.level >= 90
        ?
        <p>👑 Master Level</p>

        :

        props.level >= 70
        ?
        <p>🚀 Growing Fast</p>

        :

        <p>📘 Beginner Mode</p>
      }

    </div>
  );
}

export default SkillBadge;