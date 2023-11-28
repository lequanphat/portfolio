/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import Button from '../components/Button';
const Home = forwardRef((props, ref) => {
    return (
        <Container id="home" ref={ref} className="show-animate">
            <div className="home-content">
                <h1>
                    Hi, I&apos;m <span>Quan Phat</span>
                    <span className="animate"></span>
                </h1>
                <div className="text-animate">
                    <h3>
                        Fullstack Developer<span className="animate"></span>
                    </h3>
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.
                    <span className="animate"></span>
                </p>
                <div className="btn-box">
                    <Button to={'about'}>Read More</Button>
                    <Button to={'contact'} outline>
                        Let&apos;s Talk
                    </Button>
                    <span className="animate"></span>
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
                    <span className="animate"></span>
                </div>
            </div>
            <div className="home-object"><span className="animate"></span></div>
        </Container>
    );
});
const Container = styled.section`
    min-height: 100vh;
    padding: 10rem 9% 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 9%;

    &.show-animate .animate {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: var(--bg-color);
        z-index: 98;
        animation: showRight 1s ease forwards;
    }
    .home-content {
        max-width: 60rem;
        h1 {
            position: relative;
            font-size: 5.6rem;
            font-weight: 700;
            line-height: 1.3;
            .animate {
                animation-delay: 0.3s;
            }
            span {
                color: var(--text-color);
            }
        }
        p {
            position: relative;
            font-size: 1.6rem;
            margin: 2rem 0 4rem;
            .animate {
                animation-delay: 0.9s;
            }
        }
    }

    .home-object {
        position: relative;
        width: 38rem;
        height: 38rem;
        overflow: hidden;
        border-radius: 50%;
        background-image: url('bgme.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        box-shadow: 0 0 60px var(--main-color), 0 0 140px var(--main-color), 0 0 140px var(--main-color),
            0 0 140px var(--main-color);
            .animate {
                animation-delay: 1.8s;
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
            .animate {
                animation-delay: 0.6s;
            }
        }
    }
    .btn-box {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 34.5rem;
        height: 5rem;
        .animate {
            animation-delay: 1.2s;
        }
    }
    .home-sci {
        position: absolute;
        bottom: 4rem;
        width: 17rem;
        display: flex;
        justify-content: space-between;
        .animate {
            animation-delay: 1.5s;
        }
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
    @media (max-width: 991px) {
        .home-object {
            display: none;
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
