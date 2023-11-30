/* eslint-disable react/prop-types */
import styled from 'styled-components';

function Progress({name, value}) {
    return (
        <Container theme={{ width: value }}>
            <h3>
                {name} <span>{value}%</span>
            </h3>
            <div className="bar">
                <span></span>
            </div>
        </Container>
    );
}
const Container = styled.div`
    position: relative;
    padding: 1rem 0;

    h3 {
        font-size: 1.7rem;
        display: flex;
        justify-content: space-between;
        span {
            color: var(--text-color);
        }
    }
    .bar {
        height: 2.5rem;
        border-radius: 0.6rem;
        border: 0.2rem solid var(--main-color);
        padding: 0.3rem;
        margin: 1rem 0;
    }
    .bar span {
        display: block;
        width: ${props => props.theme.width+"%" || "0%"};
        height: 100%;
        border-radius: 0.3rem;
        background-color: var(--main-color);
        transition: 0.5s;
    }
`;
export default Progress;
