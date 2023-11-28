import styled from 'styled-components';

function ThreeDBox() {
    return (
        <Container>
            <div className="box-top"></div>
            <div>
                <span className="face-0"></span>
                <span className="face-1"></span>
                <span className="face-2"></span>
                <span className="face-3"></span>
            </div>
        </Container>
    );
}
const Container = styled.div`
    position: relative;
    width: 12rem;
    height: 12rem;
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
        transform: rotateX(90deg) translateZ(60px);
        &::before {
            content: '';
            position: absolute;
            top: 0;
            top: 0;
            width: 100%;
            height: 100%;
            box-shadow: 0 0 120px var(--main-color), 0 0 200px var(--main-color), 0 0 200px var(--main-color),
                0 0 200px var(--main-color);
            filter: blur(20px);
            transform: translateZ(-160px);
        }
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
            transform: rotateY(calc(0deg)) translateZ(60px);
            &.face-1 {
                transform: rotateY(calc(90deg)) translateZ(60px);
            }
            &.face-2 {
                transform: rotateY(calc(180deg)) translateZ(60px);
            }
            &.face-3 {
                transform: rotateY(calc(270deg)) translateZ(60px);
            }
            border: 5px solid var(--main-color);
        }
    }
`;
export default ThreeDBox;
