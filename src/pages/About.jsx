/* eslint-disable react/display-name */
import { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const About = forwardRef((props, ref) => {
    const [myData, setMyData] = useState([]);
    const SHEET_ID = '1y8jRDoDKE2tvQiisREg3GSfUIHhah6818OwBFJbNgAU';
    const SHEET_TITLE = 'about';
    const SHEET_RANGE = 'B4:C11';
    const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`;

    useEffect(() => {
        fetch(FULL_URL)
            .then((res) => res.text())
            .then((text) => {
                const json = JSON.parse(text.substring(47).slice(0, -2));
                const data = json.table.rows.map((row) => {
                    return {
                        title: row.c[0]?.v,
                        content: row.c[1]?.v,
                    };
                });
                setMyData(data);
            });
    }, []);
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
                            {myData.map((item, index) => {
                                if (index > 5) return;
                                return (
                                    <div key={index} className="about-detail-item">
                                        <p>{item.title}:</p>
                                        <a>{item.content}</a>
                                        <span className="animate"></span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="about-right">
                        <div className="about-img">
                            <img className="cover-image" src="images/me.jpg" alt="me" />
                            <img className="hidden-image" src="images/also-me.jpg" alt="me" />
                            <span className="circle-spin"></span>
                            <span className="animate"></span>
                        </div>
                        <h3>
                            Quan Phat
                            <span className="animate"></span>
                        </h3>
                    </div>
                </div>
                <div className="about-wrapper" style={{ marginTop: '3rem' }}>
                    <div className="further-item">
                        <p className="further">{myData[6]?.title}:</p>
                        <p className="further-details">{myData[6]?.content}</p>
                        <span className="animate"></span>
                    </div>
                </div>
                <div className="about-wrapper">
                    <div className="further-item">
                        <p className="further">{myData[7]?.title}:</p>
                        <p className="further-details">{myData[7]?.content}</p>
                        <span className="animate"></span>
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
        animation: showRight 1.2s ease forwards;
    }
    .heading {
        position: relative;
        width: fit-content;
        font-size: 3.8rem;
        margin: 0 auto;
        margin-bottom: 3rem;
        text-align: center;
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
        h3 {
            position: relative;
            font-size: 2.2rem;
            margin: 1rem 0;
            .animate {
                animation-delay: 2.4s;
            }
        }
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
            animation-delay: 2.1s;
        }
        img {
            width: 90%;
            border-radius: 50%;
            border: 0.2rem solid var(--main-color);
        }
        .hidden-image {
            display: none;
        }
        &:hover .hidden-image {
            display: block;
        }
        &:hover .cover-image {
            display: none;
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
        align-items: center;
        flex: 1;
        width: 100%;
        .about-details {
            width: 100%;
            .about-detail-item {
                position: relative;
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
        position: relative;
        width: 100%;
        .animate {
            animation-delay: 2.4s;
        }
        .further {
            width: 165px;
            font-size: 1.54rem;
        }
        .further-details {
            flex: 1;
            font-size: 1.54rem;
        }
    }
    .about-detail-item:nth-child(1) {
        .animate {
            animation-delay: 0.3s;
        }
    }
    .about-detail-item:nth-child(2) {
        .animate {
            animation-delay: 0.6s;
        }
    }
    .about-detail-item:nth-child(3) {
        .animate {
            animation-delay: 0.9s;
        }
    }
    .about-detail-item:nth-child(4) {
        .animate {
            animation-delay: 1.2s;
        }
    }
    .about-detail-item:nth-child(5) {
        .animate {
            animation-delay: 1.5s;
        }
    }
    .about-detail-item:nth-child(6) {
        .animate {
            animation-delay: 1.8s;
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
