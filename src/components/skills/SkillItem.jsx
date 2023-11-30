/* eslint-disable react/prop-types */
import styled from 'styled-components';

function SkillItem({image, title, content}) {
    return (
        <Container>
            <img src={image} alt="temp" />
            <div className="content">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
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
    img {
        width: 5rem;
        height: 5rem;
        object-fit: contain;
        margin-right: 1.4rem;
    }
    .content {
        h1{
            font-size: 1.7rem;
        }
        p{
            font-size: 1.5rem;
        }
    }
`;

export default SkillItem;
