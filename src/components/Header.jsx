/* eslint-disable for-direction */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { CgMenu } from 'react-icons/cg';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

function Header({ arrRef }) {
    const [scrolled, setScrolled] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isShowNavBar, setIsShowNavBar] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const height = window.scrollY + 300;
            const isScrolled = window.scrollY > 0;
            for (let i = 5; i >= 0; i--) {
                if (height > arrRef[i].current.offsetTop ) {
                    arrRef[i].current.classList.add('show-animate');
                    setActiveIndex(i);
                    // for (let j = 4; j >= 0; j--) {
                    //     if(j !== i)
                    //     arrRef[j].current.classList.remove('show-animate');
                    // }
                    break;
                }
            }
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClickNavBar = () => {
        setIsShowNavBar(false);
    };
    return (
        <Container className={`${scrolled && 'scrolled'}`} id="header">
            <a className="logo">
                QuanPhat. <span className="logo-animate"></span>
            </a>
            <span
                className="menu-icon"
                onClick={() => {
                    setIsShowNavBar(!isShowNavBar);
                }}
            >
                <span className="menu-icon-animate"></span>
                {isShowNavBar ? <IoCloseOutline /> : <CgMenu />}
            </span>
            <nav className={`navbar ${isShowNavBar && 'active'}`}>
                <Link
                    to="home"
                    smooth={true}
                    className={`${activeIndex === 0 && 'active'}`}
                    onClick={handleClickNavBar}
                >
                    Home
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    className={`${activeIndex === 1 && 'active'}`}
                    onClick={handleClickNavBar}
                >
                    About
                </Link>
                <Link
                    to="education"
                    smooth={true}
                    className={`${activeIndex === 2 && 'active'}`}
                    onClick={handleClickNavBar}
                >
                    Education
                </Link>
                <Link
                    to="skills"
                    smooth={true}
                    className={`${activeIndex === 3 && 'active'}`}
                    onClick={handleClickNavBar}
                >
                    Skills
                </Link>
                <Link
                    to="hobbies"
                    smooth={true}
                    className={`${activeIndex === 4 && 'active'}`}
                    onClick={handleClickNavBar}
                >
                    Hobbies
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    className={`${activeIndex === 5 && 'active'}`}
                    onClick={handleClickNavBar}
                >
                    Contact
                </Link>
                <span className="active-nav"></span>
                <span className="navbar-animate"></span>
            </nav>
        </Container>
    );
}
const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem 9%;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;

    &.scrolled {
        background-color: var(--bg-color);
    }

    .logo {
        position: relative;
        font-size: 2.2rem;
        font-weight: 600;
        color: var(--main-color);
    }
    .logo-animate,
    .navbar-animate,
    .menu-icon-animate {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: var(--bg-color);
        z-index: 98;
        animation: showRight 1s ease forwards;
        animation-delay: calc(0.3s);
    }
    .navbar-animate {
        animation-delay: calc(0.6s);
    }
    .navbar {
        position: relative;
    }
    .navbar a {
        text-decoration: none;
        font-size: 1.7rem;
        color: var(--text-color);
        font-weight: 500;
        margin-left: 3.5rem;
        transition: 0.3s;
        cursor: pointer;
        &:hover,
        &.active {
            color: var(--main-color);
        }
    }
    .menu-icon {
        position: relative;
        font-size: 3rem;
        color: var(--text-color);
        cursor: pointer;
        display: none;
    }
    @media (max-width: 768px) {
        #header {
            background-color: var(--bg-color);
        }
        .menu-icon {
            display: block;
        }
        .navbar {
            position: absolute;
            top: 100%;
            left: -100%;
            width: 100%;
            padding: 1rem 4%;
            background-color: var(--main-color);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
            transition: 0.25s ease;
            transition-delay: 0.25s;
            z-index: 1;
            a {
                display: block;
                font-size: 2rem;
                margin: 3rem 0;
            }
        }
        .navbar.active {
            transition-delay: 0s;
            left: 0;
        }
        .navbar .active-nav {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background-color: var(--bg-color);
            border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
            z-index: -1;
            transition: 0.25s ease;
            transition-delay: 0s;
        }
        .navbar.active .active-nav {
            transition-delay: 0.25s;
            left: 0;
        }
        .navbar a {
            display: block;
            font-size: 2rem;
            margin: 3rem 0;
            transform: translateX(-20rem);
            transition-delay: 0s;
        }
        .navbar.active a {
            transform: translateX(0);
            transition-delay: 0.25s;
        }
    }
`;
export default Header;
