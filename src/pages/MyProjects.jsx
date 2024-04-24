/* eslint-disable react/display-name */
import { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import ExperienceColumn from '../components/experiences/ExperiencesColumn';

const MyProjects = forwardRef((props, ref) => {
    const [basicData, setBasicData] = useState([]);
    const [advancedData, setAdvancedData] = useState([]);
    useEffect(() => {
        const data = [
            {
                period: '2018 - 2021',
                title: 'Student in Vinh Binh High School',
                content: `During the period from 2018 to 2021, I was a student at Vinh Binh High School. There are even many new things waiting, which will be shared soon.`,
            },
            {
                period: '2021 - 2025',
                title: 'Student in SaiGon University',
                content: `Driven by my strong love for coding, I thrive on challenges to further develop myself.`,
            },
            {
                period: '2025 - 2099',
                title: 'Comming Soon',
                content: `Comming Soon`,
            },
        ];
        const ex_data = [
            {
                period: '2023 - Present',
                title: 'Furniture Shop - Ecommerce',
                content: `Building a furniture sales management website with all the features for a modern online experience using Laravel, Bootstrap, JQuery and various other technologies.`,
                link: 'https://github.com/lequanphat/furniture_shop',
            },
            {
                period: '2022 - 2023',
                title: 'Realtime VideoCall, Chat Application',
                content: `Building a real-time messaging, calling, and video call application with ReactJS, NestJS, MongoDB, MUI, SocketIO, WebRTC and various other technologies.`,
                link: 'https://github.com/lequanphat/chat-app',
            },
            {
                period: '2021 - 2022',
                title: 'Travel Tickets Booking',
                content: `Design and build travel ticket booking website interface using pure HTML, CSS, and JavaScript.`,
                link: 'https://github.com/lequanphat/travel-website',
            },
        ];
        setBasicData(data);
        setAdvancedData(ex_data);
    }, []);

    return (
        <Container id="education" ref={ref}>
            <h2 className="heading">
                My <span>Projects</span>
                <span className="animate"></span>
            </h2>
            <div className="education-row">
                <ExperienceColumn title={'Basic projects'} data={basicData} />
                <ExperienceColumn title={'Advanced projects'} data={advancedData} right={'right'} />
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
    background-color: var(--bg-color);

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
    }
    span {
        color: var(--main-color);
    }
    .education-row {
        position: relative;
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
export default MyProjects;
