import styled from 'styled-components';
/* eslint-disable react/display-name */
import { forwardRef } from 'react';
const Skills = forwardRef((props, ref) =>  {
    return (
        <Container id="skills" ref={ref}>
            <h2 className="heading">
                My <span>Skills</span>
            </h2>
            <div className="skills-row">
                <div className="skills-column">
                    <h3 className="title">Coding Skills</h3>
                    <div className="skills-box">
                        <div className="skill-content">
                            <div className="progress">
                                <h3>
                                    HTML <span>90%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>
                            <div className="progress">
                                <h3>
                                    CSS <span>30%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>
                            <div className="progress">
                                <h3>
                                    JavaScript <span>90%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>
                            <div className="progress">
                                <h3>
                                    HTML <span>90%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills-column">
                    <h3 className="title">Coding Skills</h3>
                    <div className="skills-box">
                        <div className="skill-content">
                            <div className="progress">
                                <h3>
                                    HTML <span>90%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>
                            <div className="progress">
                                <h3>
                                    CSS <span>30%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>
                            <div className="progress">
                                <h3>
                                    JavaScript <span>90%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>
                            <div className="progress">
                                <h3>
                                    HTML <span>90%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
});
const Container = styled.div`
    min-height: 100vh!important;
    padding: 4rem 9%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
    background-color: var(--second-bg-color);
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
        .progress {
            position: relative;
            padding: 1rem 0;

            h3 {
                font-size: 1.7rem;
                display: flex;
                justify-content: space-between;
                span {
                    color: var(--text-color);
                }
            }
            .bar {
                height: 2.5rem;
                border-radius: 0.6rem;
                border: 0.2rem solid var(--main-color);
                padding: 0.3rem;
                margin: 1rem 0;
            }
            .bar span {
                display: block;
                width: 50%;
                height: 100%;
                border-radius: 0.3rem;
                background-color: var(--main-color);
                transition: 0.5s;
                &:hover {
                    width: 100%;
                }
            }
        }
    }
    .skill-content {
        position: relative;
        border: 0.2rem solid var(--main-color);
        border-radius: 0.6rem;
        padding: 0.5rem 1.5rem;
        overflow: hidden;
    }
`;
export default Skills;
