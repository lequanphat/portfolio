import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa6';
import { Link } from 'react-scroll';
function Footer() {
    return (
        <Container id="footer">
            <div className="footer-text">
                <p> Copyright &copy; 2023 by QuanPhat | All Rights Reserved.</p>
            </div>
            <div className="footer-icon-top">
                <Link to="home" smooth={true} duration={500}>
                    <FaArrowUp />
                </Link>
            </div>
        </Container>
    );
}
const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 9%;
    background-color: var(--bg-color);
    .footer-text {
        font-size: 1.6rem;
    }
    .footer-icon-top a {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0.8rem;
        background-color: var(--main-color);
        border-radius: 0.6rem;
        border: 2px solid var(--main-color);
        z-index: 1;
        overflow: hidden;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background-color: var(--second-bg-color);
            z-index: -1;
            transition: 0.5s;
        }
        &:hover::before {
            width: 100%;
        }
        &:hover svg {
            color: var(--main-color);
        }
        svg {
            font-size: 1.8rem;
            color: var(--bg-color);
            transition: 0.5s;
        }
    }
    @media (max-width: 462px) {
        flex-direction: column-reverse;
        justify-content: center;
        p {
            margin: 2rem;
            text-align: center;
        }
    }
`;
export default Footer;
