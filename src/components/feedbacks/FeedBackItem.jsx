import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
export const FeedBackItem = ({ name, email, content, date }) => {
    return (
        <Container>
            <div className="author">
                <img src="images/default_avatar.jpg" />
                <div className="author-info">
                    <p className="author-name">{name}</p>
                    <p className="author-email">{email}</p>
                </div>
                <p className="date">{date}</p>
            </div>
            <div className="content">
                <p>{content}</p>
                <p className="date">{date}</p>
            </div>
        </Container>
    );
};

const Container = styled.div`
    padding: 14px;
    border: 2px solid var(--main-color);
    border-radius: 4px;
    font-size: 14px;
    .author {
        display: flex;
        align-items: center;
        img {
            width: 40px;
            height: 40px;
            border-radius: 10%;
        }
        .author-info {
            margin-left: 10px;
            p {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            p.author-name {
                font-weight: bold;
            }
            p.author-email {
                opacity: 0.8;
            }
        }
        p.date {
            flex: 1;
            text-align: end;
            opacity: 0.8;
        }
    }
    .content {
        padding-top: 12px;
        p {
            opacity: 0.9;
        }
        .date {
            margin-top: 4px;
            font-size: 12px;
            display: none;
        }
    }
    @media (max-width: 462px) {
        p.date {
            display: none;
        }
        .content .date {
            display: block;
        }
    }
`;
