/* eslint-disable react/prop-types */
import styled from 'styled-components';
import ExperienceBox from './ExperienceBox';

// eslint-disable-next-line react/prop-types
function ExperienceColumn({ title, data, right }) {
    return (
        <Container theme={{ right: right }}>
            <h3 className="title">
                {title}
                <span className="animate"></span>
            </h3>
            <div className={`education-box`}>
                {data.map((item, index) => (
                    <ExperienceBox
                        key={index}
                        period={item.period}
                        title={item.title}
                        content={item.content}
                        right={right}
                        link={item.link}
                    />
                ))}
            </div>
        </Container>
    );
}
const Container = styled.div`
    flex: 1 1 40rem;
    .title {
        position: relative;
        text-align: ${(props) => props.theme.right || 'left'};
        font-size: 2.5rem;
        margin: ${(props) => (props.theme.right ? '0 2rem 1.5rem 0' : '0 0 1.5rem 2rem')};
        .animate {
            animation-delay: 0.6s;
        }
    }
    .education-box {
        position: relative;
        /* border-left: 0.2rem solid var(--main-color); */
        border-left: ${(props) => (props.theme.right ? 'none' : '0.2rem solid var(--main-color)')};
        border-right: ${(props) => (props.theme.right ? '0.2rem solid var(--main-color)' : 'none')};
    }
`;
export default ExperienceColumn;
