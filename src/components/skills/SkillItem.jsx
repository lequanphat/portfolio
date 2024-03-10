/* eslint-disable react/prop-types */
import styled from 'styled-components';

function SkillItem({ image, title, content }) {
    return (
        <Container className="skill-item">
            <img src={image} alt="temp" />
            <div className="content">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
            <span className="animate"></span>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1.2rem 3rem 1.2rem 1.2rem;
    border: 2px solid var(--main-color);
    border-radius: 6px;
    margin-bottom: 1.4rem;
    position: relative;
    &.skill-item:nth-child(1) {
        .animate {
            animation-delay: 0.9s;
        }
    }
    &.skill-item:nth-child(2) {
        .animate {
            animation-delay: 1.2s;
        }
    }
    &.skill-item:nth-child(3) {
        .animate {
            animation-delay: 1.5s;
        }
    }
    &.skill-item:nth-child(4) {
        .animate {
            animation-delay: 1.8s;
        }
    }
    &.skill-item:nth-child(5) {
        .animate {
            animation-delay: 2.1s;
        }
    }
    &.skill-item:nth-child(6) {
        .animate {
            animation-delay: 2.4s;
        }
    }
    img {
        width: 5rem;
        height: 5rem;
        object-fit: contain;
        margin-right: 1.4rem;
    }
    .content {
        h1 {
            font-size: 1.7rem;
        }
        p {
            font-size: 1.5rem;
        }
    }
`;

export default SkillItem;
