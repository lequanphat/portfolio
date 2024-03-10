import styled from 'styled-components';
import { FaRegCalendarAlt } from 'react-icons/fa';
// eslint-disable-next-line react/prop-types
function ExperienceBox({ period, title, content, right, link }) {
    return (
        <Container theme={{ right: right }}>
            {' '}
            <div className="content">
                <div className="year">
                    <span>
                        <FaRegCalendarAlt />
                    </span>
                    {period}
                </div>
                <h3>{title}</h3>
                <p>{content}</p>
                {link && (
                    <p className="link">
                        Link source: <a href={link}>{link}</a>
                    </p>
                )}
            </div>
        </Container>
    );
}
const Container = styled.div`
    position: relative;
    padding-left: 2rem;
    padding-right: 2rem;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: ${(props) => (props.theme.right ? 'calc(100% - 0.8rem)' : '-0.9rem')};
        width: 1.6rem;
        height: 1.6rem;
        background-color: var(--main-color);
        border-radius: 50%;
    }
    .content {
        position: relative;
        padding: 1.5rem;
        border: 0.2rem solid var(--main-color);
        border-radius: 0.6rem;
        margin-bottom: 2rem;
        min-height: 190px;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: ${(props) => (props.theme.right ? '0' : '0')};
            width: 0;
            height: 100%;
            background-color: var(--second-bg-color);
            z-index: -1;
            transition: 0.5s;
        }
        &:hover::before {
            width: 100%;
        }
        .year {
            font-size: 1.5rem;
            color: var(--main-color);
            padding-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            .text {
                margin-bottom: 0.2rem;
            }
        }
        h3 {
            font-size: 1.8rem;
        }
        p {
            font-size: 1.54rem;
        }
        .link {
            margin-top: 4px;
        }
        .link a {
            font-size: 1.4rem;
            color: var(--main-color);
        }
    }
`;
export default ExperienceBox;
