import styled from "styled-components";

const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1``;

const SubHeading = styled.h2``;

const Para = styled.p``;

const Btn = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

function EducationCard({ education, delEducation }) {
  if (education) {
    return (
      <CardWrapper>
        <Heading>{education.school}</Heading>
        <SubHeading>{education.program}</SubHeading>
        <Para>{education.startDateStudy}</Para>
        <Para>{education.endDateStudy}</Para>
        <Btn onClick={() => delEducation(education)}></Btn>
      </CardWrapper>
    );
  }
}

export default EducationCard;
