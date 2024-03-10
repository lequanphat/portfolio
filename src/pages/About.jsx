/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import styled from 'styled-components';

const About = forwardRef((props, ref) => {
    return (
        <Container id="about" ref={ref}>
            <div>
                <h2 className="heading">
                    About<span> Me</span>
                    <span className="animate"></span>
                </h2>
                <div className="about-wrapper">
                    <div className="about-content">
                        <div className="about-details">
                            <div className="about-detail-item">
                                <p>Full name:</p>
                                <a>Le Quan Phat</a>
                            </div>
                            <div className="about-detail-item">
                                <p>Birth date:</p>
                                <a>24/11/2003</a>
                            </div>
                            <div className="about-detail-item">
                                <p>Email address:</p>
                                <a href="mailto:lequanphat3579@gmail.com">lequanphat3579@gmail.com</a>
                            </div>
                            <div className="about-detail-item">
                                <p>Phone number:</p>
                                <a href="tel:+84383642670">+84383642670</a>
                            </div>
                            <div className="about-detail-item">
                                <p>Address:</p>
                                <a>District 8, Ho Chi Minh City, Viet Nam</a>
                            </div>
                            <div className="about-detail-item">
                                <p>Specialization:</p>
                                <a>Software Engineer</a>
                            </div>
                        </div>
                    </div>
                    <div className="about-right">
                        <div className="about-img">
                            <img src="me.jpg" alt="me" />
                            <span className="circle-spin"></span>
                            <span className="animate"></span>
                        </div>
                        <h3>
                            Quan Phat<span className="animate"></span>
                        </h3>
                    </div>
                </div>
                <div className="about-wrapper" style={{ marginTop: '3rem' }}>
                    <div className="further-item">
                        <p className="further">Future Aspirations: </p>
                        <p className="further-details">
                            Aspiring to evolve into a proficient Full-Stack Developer, I am dedicated to mastering both
                            the Frontend and Backend realms of web development. My goal is to seamlessly integrate
                            diverse technologies, delivering robust and user-centric solutions.
                        </p>
                    </div>
                </div>
                <div className="about-wrapper">
                    <div className="further-item">
                        <p className="further">Conclusion: </p>
                        <p className="further-details">
                            Finally, I&apos;d like to say two things. First, Django is a great framework for backend
                            developers, but not for me. Second, your grandmother can run faster than your code, remember
                            this :))
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
});
const Container = styled.section`
    min-height: 100vh;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    .about-wrapper {
        display: flex;
        align-items: center;
        width: 60%;
        margin: 0 auto;
        margin-bottom: 1.4rem;
    }
    .about-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;
    }
    .about-img {
        position: relative;
        width: 22rem;
        height: 22rem;
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
    h3 {
        position: relative;
        font-size: 2.2rem;
        margin: 1rem 0;
        .animate {
            animation-delay: 0.9s;
        }
    }
    .about-content {
        display: flex;
        align-items: center;
        flex: 1;
        width: 100%;
        .about-details {
            width: 100%;
            .about-detail-item {
                display: flex;
                font-size: 1.54rem;
                margin: 1rem 0;
                width: 100%;
                p {
                    width: 165px;
                    text-align: start;
                    .animate {
                        animation-delay: 1.2s;
                    }
                }
                a {
                    color: var(--main-color);
                }
            }
        }
    }
    .further-item {
        display: flex;
        width: 100%;
        .further {
            width: 165px;
            font-size: 1.54rem;
        }
        .further-details {
            flex: 1;
            font-size: 1.54rem;
        }
    }

    @media (max-width: 991px) {
        .about-wrapper {
            width: 90%;
        }
    }
    @media (max-width: 800px) {
        .about-wrapper {
            width: 80%;
            flex-direction: column-reverse;
        }
        .about-detail-item p {
            width: 130px !important;
        }
        .further {
            width: 130px !important;
        }
    }
    @media (max-width: 462px) {
        .about-wrapper {
            width: 98%;
            flex-direction: column-reverse;
        }
        .about-detail-item p {
            width: 110px !important;
        }
        .further {
            width: 110px !important;
        }
        .about-content {
        }
    }
`;
export default About;
