/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import Button from '../components/Button';
function Home() {
    return (
        <Container id="home">
            <div className="home-content">
                <h1>
                    Hi, I&apos;m <span>Quan Phat</span>
                </h1>
                <div className="text-animate">
                    <h3>Fullstack Developer</h3>
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.
                </p>
                <div className="btn-box">
                    <Button to={'/'}>Hire Me</Button>
                    <Button to={'/'} outline>
                        Let&apos;s Talk
                    </Button>
                </div>
                <div className="home-sci">
                    <a href="#">
                        <FaFacebookF />
                    </a>
                    <a href="#">
                        <FaGithub />
                    </a>
                    <a href="#">
                        <BiLogoInstagramAlt />
                    </a>
                </div>
            </div>
            <div className="home-object">
                {/* <div className="home-img">
                    <img src="/z4920805935531_92b68f75fff6e12696288288e05d7667.jpg" alt="avt" />
                </div> */}
                <div className="box">
                    <div className="box-top"></div>
                    <div>
                        <span className="face-0"></span>
                        <span className="face-1"></span>
                        <span className="face-2"></span>
                        <span className="face-3"></span>
                    </div>
                </div>
            </div>
        </Container>
    );
}
const Container = styled.section`
    min-height: 100vh;
    padding: 10rem 9% 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 9%;
    .home-content {
        max-width: 60rem;
        h1 {
            font-size: 5.6rem;
            font-weight: 700;
            line-height: 1.3;
            span {
                color: var(--text-color);
            }
        }
        p {
            font-size: 1.6rem;
            margin: 2rem 0 4rem;
        }
    }
    .box {
        position: relative;
        width: 26rem;
        height: 26rem;
        transform-style: preserve-3d;
        transform: rotateX(-26deg);
        animation: rotate 10s linear infinite;
        animation-delay: 1s;
        margin-right: 5rem;
        @keyframes rotate {
            0% {
                transform: rotateX(-25deg) rotateY(0deg);
            }
            100% {
                transform: rotateX(-25deg) rotateY(360deg);
            }
        }
        .box-top {
            position: absolute;
            top: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #2980b9;
            /* box-shadow:  0 0 200px 7px var(--main-color), 0 0 200px 20px var(--main-color),
                0 0 200px var(--main-color); */
            transform: rotateX(90deg) translateZ(145px);
            &::before {
                content: '';
                position: absolute;
                top: 0;
                top: 0;
                width: 100%;
                height: 100%;
                box-shadow: 0 0 120px var(--main-color), 0 0 200px var(--main-color),
                    0 0 200px var(--main-color), 0 0 200px var(--main-color);
                filter: blur(20px);
                transform: translateZ(-350px);
            }
            /* box-shadow: 0 0 200px 7px greenyellow, 0 0 200px 20px lightgreen,
                0 0 200px green;
            transform: rotateX(90deg) translateZ(145px);
            &::before {
                content: '';
                position: absolute;
                top: 0;
                top: 0;
                width: 100%;
                height: 100%;
                box-shadow: 0 0 120px rgba(0, 255, 0, 0.2), 0 0 200px rgba(0, 255, 0, 0.4),
                    0 0 200px rgba(0, 255, 0, 0.4), 0 0 200px rgba(0, 255, 0, 0.4);
                filter: blur(20px);
                transform: translateZ(-350px);
            } */
        }
        div {
            position: absolute;
            top: 0;
            top: 0;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            span {
                position: absolute;
                top: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(#222, var(--main-color));
                opacity: 0.8;
                transform: rotateY(calc(0deg)) translateZ(145px);
                &.face-1 {
                    transform: rotateY(calc(90deg)) translateZ(145px);
                }
                &.face-2 {
                    transform: rotateY(calc(180deg)) translateZ(145px);
                }
                &.face-3 {
                    transform: rotateY(calc(270deg)) translateZ(145px);
                }
                border: 5px solid var(--main-color);
            }
        }
    }
    .home-img {
        position: relative;
        width: 40rem;
        height: 40rem;
        border-radius: 50%;
        overflow: hidden;
        padding: 1rem;
        border: 0.6rem solid var(--main-color);
        animation: floatImage 4s ease-in-out infinite;
        animation-delay: 2s;
        img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        @keyframes floatImage {
            0% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-22px);
            }
            100% {
                transform: translateY(0);
            }
        }
    }
    .text-animate {
        position: relative;
        width: 32.8rem;
        h3 {
            font-size: 3.2rem;
            font-weight: 700;
            color: transparent;
            -webkit-text-stroke: 0.7px var(--main-color);
            background-image: linear-gradient(var(--main-color), var(--main-color));
            background-repeat: no-repeat;
            -webkit-background-clip: text;
            background-position: -33rem 0;
            animation: homeText 6s linear infinite;
            animation-delay: 2s;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 0;
                height: 100%;
                border: 1px solid var(--main-color);
                z-index: 1;
                animation: homeCursorText 6s linear infinite;
                animation-delay: 2s;
            }
        }
    }
    .btn-box {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 34.5rem;
        height: 5rem;
    }
    .home-sci {
        position: absolute;
        bottom: 4rem;
        width: 17rem;
        display: flex;
        justify-content: space-between;
        a {
            position: relative;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 4rem;
            height: 4rem;
            background-color: transparent;
            border: 0.2rem solid var(--main-color);
            font-size: 1.7rem;
            border-radius: 50%;
            color: var(--main-color);
            z-index: 1;
            overflow: hidden;
            transition: 0.5s;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 0;
                height: 100%;
                background-color: var(--main-color);
                z-index: -1;
                transition: 0.5s;
            }
            &:hover::before {
                width: 100%;
            }
            &:hover {
                color: var(--bg-color);
            }
        }
    }

    @media (max-width: 520px) {
        .home-content h1 {
            display: flex;
            flex-direction: column;
        }
        .home-sci {
            width: 160px;
            a {
                width: 38px;
                height: 38px;
            }
        }
    }
    @media (max-width: 462px) {
        .home-content h1 {
            font-size: 5.2rem;
        }
    }
    @media (max-width: 371px) {
        justify-content: center;
        .home-content {
            display: flex;
            align-items: center;
            text-align: center;
            flex-direction: column;
            h1 {
                font-size: 5rem;
            }
        }
    }
    @keyframes homeText {
        0%,
        10%,
        100% {
            background-position: -33rem 0;
        }
        65%,
        85% {
            background-position: 0 0;
        }
    }
    @keyframes homeCursorText {
        0%,
        10%,
        100% {
            left: 0;
        }
        65%,
        78%,
        85% {
            left: 100%;
            opacity: 1;
        }
        75%,
        81% {
            opacity: 0;
        }
    }
`;
export default Home;
