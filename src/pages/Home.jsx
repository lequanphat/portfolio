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
                    <Button to={"/"}>Hire Me</Button>
                    <Button to={"/"} outline>Let&apos;s Talk</Button>
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
                <div className="home-img"></div>
                <div className="home-img-hover"></div>
            </div>
        </Container>
    );
}
const Container = styled.section`
    min-height: 100vh;
    padding: 10rem 9% 2rem;
    display: flex;
    align-items: center;
    padding: 0 9%;
    background: url('/home.jpg') no-repeat;
    background-size: cover;
    background-position: center;
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
    .home-img-hover {
        position: absolute;
        top: 0;
        right: 0;
        width: 45%;
        height: 100%;
        background: transparent;
        transition: 3s;
        &:hover {
            background-color: var(--bg-color);
            opacity: 0.8;
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
