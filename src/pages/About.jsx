import styled from 'styled-components';
import Button from '../components/Button';

function About() {
    return (
        <Container id="about">
            <h2 className="heading">
                About<span> Me</span>
            </h2>
            <div className="about-img">
                <img src="public/z4920810557724_e11f9798c751bfca2f58025ac73e4141.jpg" alt="me" />
                <span className="circle-spin"></span>
            </div>
            <div className="about-content">
                <h3>Fullstack Developer</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. type and scrambled it to make a type specimen book.
                </p>
                <div className="btn-box btns">
                    <Button>Read More</Button>
                </div>
            </div>
        </Container>
    );
}
const Container = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background-color: var(--second-bg-color);
    .heading {
        font-size: 3.8rem;
        margin-bottom: 3rem;
        text-align: center;
    }
    span {
        color: var(--main-color);
    }
    .about-img {
        position: relative;
        width: 25rem;
        height: 25rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
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
            animation: myrotate 1s linear infinite;

            @keyframes myrotate {
                from {
                    transform: translate(-50%, -50%) rotate(0);
                }
                to {
                    transform: translate(-50%, -50%) rotate(180);
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
            font-size: 2.6rem;
        }
        p {
            text-align: center;
            width: 60%;
            font-size: 1.6rem;
            margin: 2rem 0 3rem;
        }
    }
    .btn-box {
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
