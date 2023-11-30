/* eslint-disable react/display-name */
import { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import ExperienceColumn from '../components/experiences/ExperiencesColumn';

const Education = forwardRef((props, ref) => {
    const [educationData, setEducationData] = useState([])
    const [experiencesData, setExperiencesData] = useState([])
    useEffect(()=> {
        const data = [
            {
                period: '2021 - 2025',
                title: 'Student in SaiGon University',
                content: `I'm a student at SaiGon University, pursuing a degree in Information Technology. Driven
                by a passion for coding.`,
            },
            {
                period: '2025 - 2099',
                title: 'Comming Soon',
                content: `Comming Soon`,
            },
            {
                period: '2025 - 2099',
                title: 'Comming Soon',
                content: `Comming Soon`,
            },
        ];
        const ex_data = [
            {
                period: '2023 - 2023',
                title: 'Built a Realtime Chat-app',
                content: `Build a real-time chat app project using React, Nodejs, Expresjs, MongoDB, Socketio and integrate ChatGPT API`,
            },
            {
                period: '2025 - 2099',
                title: 'Comming Soon',
                content: `Comming Soon`,
            },
            {
                period: '2025 - 2099',
                title: 'Comming Soon',
                content: `Comming Soon`,
            },
        ];
        setEducationData(data)
        setExperiencesData(ex_data);
    }, [])
    
    return (
        <Container id="education" ref={ref}>
            <h2 className="heading">
                My <span>Journey</span>
                <span className="animate"></span>
            </h2>
            <div className="education-row">
                <ExperienceColumn title={'Education'} data={educationData} />
                <ExperienceColumn title={'Experiences'} data={experiencesData} right={'right'} />
                <span className="animate"></span>
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
    min-height: 100vh;
    .animate {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: var(--bg-color);
        z-index: 98;
    }
    &.show-animate .animate {
        animation: showRight 1s ease forwards;
    }
    .heading {
        position: relative;
        font-size: 3.8rem;
        margin-bottom: 3rem;
        text-align: center;
        .animate {
            animation-delay: 0.3s;
        }
    }
    span {
        color: var(--main-color);
    }
    .education-row {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        .animate {
            width: 120%;
            right: -10%;
            animation-delay: 0.9s;
        }
    }
    @media (max-width: 462px) {
        .education {
            padding: 10rem 4% 5rem 5%;
        }
    }
`;
export default Education;
