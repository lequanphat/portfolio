import styled from 'styled-components';
/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import Progress from '../components/mylife/Progress';

const MyLife = forwardRef((props, ref) => {
    return (
        <Container id="hobbies" ref={ref}>
            <h2 className="heading">
                My <span>Hobbies</span>
            </h2>
            <div className="skills-row">
                <div className="skills-column">
                    <h3 className="title">Really love it</h3>
                    <div className="skills-box">
                        <div className="skill-content">
                            <Progress name={"Watching movies"} value={80}/>
                            <Progress name={"Playing game"} value={65} />
                            <Progress name={"Coding"} value={100} />
                            <Progress name={"Sleeping"} value={80} />
                        </div>
                    </div>
                </div>
                <div className="skills-column">
                    <h3 className="title ">Maybe like it</h3>
                    <div className="skills-box">
                        <div className="skill-content">
                            <Progress name={"Outdoor activities"} value={45} />
                            <Progress name={"Traveling"} value={65}/>
                            <Progress name={"Reading"} value={55} />
                            <Progress name={"Cooking"} value={1} />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
});
const Container = styled.div`
    min-height: 100vh !important;
    padding: 4rem 9%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
    background-color: var(--bg-color);
    .heading {
        font-size: 3.8rem;
        margin-bottom: 3rem;
        text-align: center;
    }
    span {
        color: var(--main-color);
    }
    .skills-row {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 5rem;
    }
    .skills-column {
        width: 40%;
        flex: 1 1 30rem;
        .title {
            font-size: 2.5rem;
            margin: 0 0 1.5rem;
           
        }
    }
    .skills-box {
        /* position: relative;
        border: 0.2rem solid var(--main-color);
        border-radius: 0.6rem;
        padding: 0.5rem 1.5rem; */
    }
    .skill-content {
        position: relative;
        border: 0.2rem solid var(--main-color);
        border-radius: 0.6rem;
        padding: 0.5rem 1.5rem;
        overflow: hidden;
    }
`;
export default MyLife;
