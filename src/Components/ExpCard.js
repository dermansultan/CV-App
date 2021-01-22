import styled from "styled-components";

const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1``;

const SubHeading = styled.h2``;

const Para = styled.p``;

const Btn = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

function ExperienceCard({ experience, delExperience }) {
  if (experience) {
    return (
      <CardWrapper>
        <Heading>{experience.company}</Heading>
        <SubHeading>{experience.position}</SubHeading>
        <Para>{experience.tasks}</Para>
        <Para>{experience.startDate}</Para>
        <Para>{experience.endDate}</Para>
        <Btn onClick={() => delExperience(experience)}>Delete Experience</Btn>
      </CardWrapper>
    );
  } else return null;
}

export default ExperienceCard;
