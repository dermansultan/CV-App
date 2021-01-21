import styled from "styled-components";
import ExperienceCard from "./ExpCard";

const ExperiencesWrapper = styled.ul`
display: flex;
flex-direction column;
`;

function ExperiencesList({ experiences, delExperience }) {
  // Method for deleting self (pass to cards)
  // = find index of where it equals the same property
  console.log(delExperience);

  return (
    <ExperiencesWrapper>
      {experiences.map((experience) => (
        <ExperienceCard 
        experience={experience}
        delExperience={delExperience}
        />
      ))}
    </ExperiencesWrapper>
  );
}

export default ExperiencesList;
