/* eslint-disable react/display-name */
import styled from 'styled-components';
import { forwardRef } from 'react';
import SkillItem from '../components/skills/SkillItem';
import ThreeDBox from '../components/3dbox/ThreeDBox';
const Skills = forwardRef((props, ref) => {
    return (
        <Container ref={ref} id="skills">
            <h2 className="heading">
                My<span> Skills</span>
                <span className="animate"></span>
            </h2>
            <div className="skills-wrapper">
                <div className="skills-left">
                    <h2>
                        Frontend Skills<span className="animate"></span>
                    </h2>
                    <SkillItem image={'images/tailwind.png'} title={'Tailwind'} content={'Used for faster CSS styling.'} />
                    <SkillItem
                        image={'images/mui.png'}
                        title={'Material UI'}
                        content={'Move faster with intuitive React UI tools.'}
                    />
                    <SkillItem image={'images/redux.png'} title={'Redux Toolkit'} content={'Use Redux to manage state.'} />
                    <SkillItem
                        image={'images/react.png'}
                        title={'React'}
                        content={'The library for web and native user interfaces.'}
                    />
                    <SkillItem image={'images/next.png'} title={'NextJS'} content={'Create high-quality web applications.'} />
                </div>
                <div className="box">
                    <ThreeDBox />
                </div>
                <div className="skills-right">
                    <h2>
                        Backend Skills<span className="animate"></span>
                    </h2>

                    <SkillItem
                        image={'images/firebase.png'}
                        title={'Firebase'}
                        content={'Helps you build and grow apps users love.'}
                    />
                    <SkillItem
                        image={'images/ggclound.png'}
                        title={'Google Clound Console'}
                        content={`Google Cloud computing services.`}
                    />

                    <SkillItem
                        image={'images/graphql.png'}
                        title={'RESTfulAPI, GraphQL'}
                        content={'An query language for your API.'}
                    />
                    <SkillItem
                        image={'images/nest.webp'}
                        title={'Express, NestJS, Laravel, Django'}
                        content={'Some powerful frameworks.'}
                    />
                    <SkillItem
                        image={'images/docker.png'}
                        title={'Docker Engine'}
                        content={'To build, share, and run app anywhere.'}
                    />
                </div>
            </div>
        </Container>
    );
});
const Container = styled.section`
    min-height: 100vh;
    padding: 5rem 9% 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background-color: var(--second-bg-color);
    .animate {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: var(--second-bg-color);
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

    .skills-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 2rem;
    }
    .skills-left,
    .skills-right {
        flex: 2 1 30rem;
        h2 {
            position: relative;
            font-size: 2.4rem;
            margin-bottom: 1rem;
            .animate {
                animation-delay: 0.9s;
            }
        }
    }
    .box {
        flex: 1 1 15rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 6rem;
    }
    @media (max-width: 991px) {
        .box {
            display: none;
        }
    }
`;
export default Skills;
