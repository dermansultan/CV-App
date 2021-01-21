function ExperiencesList({ experiences }) {
  return experiences.map((exp) => {
    return (
      <div key={exp.company.toString() + 1}>
        <div>{exp.company}</div>
        <div>{exp.position}</div>
        <div>{exp.tasks}</div>
        <div>{exp.startDate}</div>
        <div>{exp.endDate}</div>
      </div>
    );
  });
}

export default ExperiencesList;
