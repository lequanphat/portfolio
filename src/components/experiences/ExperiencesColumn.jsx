import styled from 'styled-components';
import ExperienceBox from './ExperienceBox';

// eslint-disable-next-line react/prop-types
function ExperienceColumn({title, right}) {
    return (
        <Container theme={{ right: right }}>
            <h3 className="title">{title}</h3>
            <div className={`education-box`} >
                <ExperienceBox right={right} />
                <ExperienceBox right={right} />
                <ExperienceBox right={right} />
            </div>
        </Container>
    );
}
const Container = styled.div`
    flex: 1 1 40rem;
    .title {
        text-align: ${props => props.theme.right || 'left'};
        font-size: 2.5rem;
        margin: ${props => props.theme.right ? '0 2rem 1.5rem 0' : '0 0 1.5rem 2rem'};;
    }
    .education-box {
        /* border-left: 0.2rem solid var(--main-color); */
        border-left: ${props => props.theme.right ? 'none' : '0.2rem solid var(--main-color)'};
        border-right: ${props => props.theme.right ? '0.2rem solid var(--main-color)' : 'none'};
    }
`;
export default ExperienceColumn;
