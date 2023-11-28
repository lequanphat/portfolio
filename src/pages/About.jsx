/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const About = forwardRef((props, ref) => {
    return (
        <Container id="about" ref={ref}>
            <h2 className="heading">
                About<span> Me</span>
                <span className="animate"></span>
            </h2>
            <div className="about-img">
                <img src="public/z4920810557724_e11f9798c751bfca2f58025ac73e4141.jpg" alt="me" />
                <span className="circle-spin"></span>
                <span className="animate"></span>
            </div>
            <div className="about-content">
                <h3>
                    Fullstack Developer<span className="animate"></span>
                </h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. type and scrambled it to make a type specimen book.
                    <span className="animate"></span>
                </p>
                <div className="btn-box btns">
                    <Button to="education">Read More</Button>
                    <span className="animate"></span>
                </div>
            </div>
        </Container>
    );
});
const Container = styled.section`
    height: 100vh;
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
    .about-img {
        position: relative;
        width: 24rem;
        height: 24rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .animate {
            animation-delay: 0.6s;
        }
        img {
            width: 90%;
            border-radius: 50%;
            border: 0.2rem solid var(--main-color);
        }
        .circle-spin {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0);
            border-radius: 50%;
            border-top: 0.2rem solid transparent;
            border-bottom: 0.2rem solid transparent;
            border-left: 0.2rem solid var(--main-color);
            border-right: 0.2rem solid var(--main-color);
            animation: imageSpinner 6s linear infinite;

            @keyframes imageSpinner {
                0% {
                    transform: translate(-50%, -50%) rotate(0deg);
                }
                100% {
                    transform: translate(-50%, -50%) rotate(180deg);
                }
            }
        }
    }
    .about-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        h3 {
            position: relative;
            font-size: 2.6rem;
            .animate {
                animation-delay: 0.9s;
            }
        }
        p {
            position: relative;
            text-align: center;
            width: 60%;
            font-size: 1.6rem;
            margin: 2rem 0 3rem;
            .animate {
                animation-delay: 1.2s;
            }
        }
    }
    .btn-box {
        position: relative;
        .animate {
            animation-delay: 1.5s;
        }
    }
    @media (max-width: 462px) {
        .about-content {
            p {
                width: 90%;
            }
        }
    }
`;
export default About;
