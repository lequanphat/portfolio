import { Link } from 'react-scroll';
import styled from 'styled-components';
// eslint-disable-next-line react/prop-types
function Button({ children, height, outline, to, ...props }) {
    return (
        <Container {...props} theme={{ height: height }} className={`${outline && 'outline'}`}>
            <Link to={to} smooth={true}>
                {children}
            </Link>
        </Container>
    );
}
const Container = styled.div`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: ${(props) => props.theme.height || '4.5rem'};
    background-color: var(--main-color);
    border: 0.2rem solid var(--main-color);
    border-radius: 0.8rem;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    color: var(--bg-color);
    text-decoration: none;
    cursor: pointer;
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
        background-color: var(--bg-color);
        z-index: -1;
        transition: 0.5s;
    }
    &:hover::before {
        width: 100%;
    }
    &:hover {
        color: var(--main-color);
    }
    &.outline {
        background-color: transparent;
        color: var(--main-color);
        &::before {
            background-color: var(--main-color);
        }
        &:hover {
            color: var(--bg-color);
        }
    }
`;
export default Button;
