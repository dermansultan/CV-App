import styled from "styled-components";
import EducationCard from "./EduCard";

const EducationWrapper = styled.ul`
display: flex;
flex-direction column;
`;

function EducationList({ educations, delEducation }) {
  return (
    <EducationWrapper>
      {educations.map((education) => (
        <EducationCard education={education} delEducation={delEducation} />
      ))}
    </EducationWrapper>
  );
}
