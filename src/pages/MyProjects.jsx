/* eslint-disable react/display-name */
import { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import ExperienceColumn from '../components/experiences/ExperiencesColumn';

const MyProjects = forwardRef((props, ref) => {
    const [basicData, setBasicData] = useState([]);
    const [advancedData, setAdvancedData] = useState([]);

    useEffect(() => {
        const SHEET_ID = '1y8jRDoDKE2tvQiisREg3GSfUIHhah6818OwBFJbNgAU';
        const SHEET_TITLE_1 = 'basic-projects';
        const SHEET_TITLE_2 = 'advanced-projects';
        const SHEET_RANGE = 'B4:E8';
        const FULL_URL_1 = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE_1}&range=${SHEET_RANGE}`;
        const FULL_URL_2 = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE_2}&range=${SHEET_RANGE}`;

        // fetch data from google sheet
        fetch(FULL_URL_1)
            .then((res) => res.text())
            .then((text) => {
                const json = JSON.parse(text.substring(47).slice(0, -2));
                const data = json.table.rows.map((row) => {
                    return {
                        period: row.c[0].v,
                        title: row.c[1].v,
                        content: row.c[2].v,
                        link: row.c[3] ? row.c[3].v : '',
                    };
                });
                setBasicData(data);
            });

        // fetch data from google sheet
        fetch(FULL_URL_2)
            .then((res) => res.text())
            .then((text) => {
                const json = JSON.parse(text.substring(47).slice(0, -2));
                const data = json.table.rows.map((row) => {
                    return {
                        period: row.c[0].v,
                        title: row.c[1].v,
                        content: row.c[2].v,
                        link: row.c[3] ? row.c[3].v : '',
                    };
                });
                setAdvancedData(data);
            });
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
