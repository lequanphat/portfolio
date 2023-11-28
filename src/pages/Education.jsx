import { forwardRef } from 'react';
import styled from 'styled-components';
import ExperienceColumn from '../components/experiences/ExperiencesColumn';
// eslint-disable-next-line react/prop-types, react/display-name
const Education = forwardRef((props, ref) => {
    return (
        <Container id="education" ref={ref}>
            <h2 className="heading">
                My <span>Journey</span>
            </h2>
            <div className="education-row">
                <ExperienceColumn title={'Education'} />
                <ExperienceColumn title={'Experience'} right="right" />
            </div>
        </Container>
    );
});
const Container = styled.section`
    padding: 4rem 9% 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
    .heading {
        font-size: 3.8rem;
        margin-bottom: 3rem;
        text-align: center;
    }
    span {
        color: var(--main-color);
    }
    .education-row {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
    }
    @media (max-width: 462px) {
        .education {
            padding: 10rem 4% 5rem 5%;
        }
    }
`;
export default Education;
