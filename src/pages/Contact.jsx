/* eslint-disable react/display-name */
import styled from 'styled-components';
import { forwardRef, useEffect, useState } from 'react';
import { FeedBackItem } from '../components/feedbacks/FeedBackItem';
const Contact = forwardRef((props, ref) => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const SHEET_ID = '1y8jRDoDKE2tvQiisREg3GSfUIHhah6818OwBFJbNgAU';
    const SHEET_TITLE = 'feedbacks';
    const SHEET_RANGE = 'A2:D100';
    const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`;
    useEffect(() => {
        fetch(FULL_URL)
            .then((res) => res.text())
            .then((text) => {
                const json = JSON.parse(text.substring(47).slice(0, -2));
                console.log(json.table.rows);
                let data = json.table.rows.map((row) => {
                    return {
                        date: row.c[0]?.f,
                        name: row.c[1]?.v,
                        email: row.c[2]?.v,
                        content: row.c[3]?.v,
                    };
                });
                data = data.reverse();
                setFeedbacks(data);
            });
    }, []);

    // handle submit
    const handleSend = () => {
        if (!fullname || !email || !message) {
            setError(true);
            setSuccess(false);
            return;
        }
        console.log({ fullname, email, message });
        const origial_url =
            'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeu8Zj-cGcxY1qkV-11zDuH4Oxe1bz8-WlWhChITZ-TpJSlhQ/formResponse';
        const url = `${origial_url}?usp=pp_url&entry.558597903=${fullname}&entry.2115553539=${email}&entry.1601927691=${message}`;
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            console.log(response);
            setSuccess(true);
            setError(false);
            const feedback = {
                date: 'now',
                name: fullname,
                email: email,
                content: message,
            };
            setFeedbacks((pre) => [feedback, ...pre]);
        });
    };
    return (
        <Container id="contact" ref={ref}>
            <h2 className="heading">
                Contact <span>Me</span>
            </h2>
            <form action="#">
                <div className="input-box">
                    <div className="input-field">
                        <input
                            name="fullname"
                            type="text"
                            placeholder="Full Name"
                            value={fullname}
                            onChange={(e) => {
                                setFullName(e.target.value);
                                setError(false);
                            }}
                        />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError(false);
                            }}
                        />
                        <span className="focus"></span>
                    </div>
                </div>

                <div className="textarea-field">
                    <textarea
                        name="message"
                        id=""
                        cols={30}
                        rows={10}
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                            setError(false);
                        }}
                    ></textarea>
                    <span className="focus"></span>
                </div>
                <div className="btn-box">
                    {error && (
                        <p className="message error">
                            Oops! 😞 Please complete your information and message before submitting.
                        </p>
                    )}
                    {success && (
                        <p className="message success">Great job! 🤩 Your submission has been received. Thank you! </p>
                    )}

                    <button type="button" onClick={handleSend}>
                        Submit
                    </button>
                </div>
                <div className="some-feedbacks">
                    <h1>Latest feedbacks</h1>
                    <div className="feedbacks-list">
                        {showAll
                            ? feedbacks.map((feedback, index) => (
                                  <FeedBackItem
                                      key={index}
                                      name={feedback.name}
                                      email={feedback.email}
                                      content={feedback.content}
                                      date={feedback.date}
                                  />
                              ))
                            : feedbacks
                                  .slice(0, 3)
                                  .map((feedback, index) => (
                                      <FeedBackItem
                                          key={index}
                                          name={feedback.name}
                                          email={feedback.email}
                                          content={feedback.content}
                                          date={feedback.date}
                                      />
                                  ))}
                        {}
                    </div>
                    <div className="footer">
                        <button
                            type="button"
                            className="show-all-btn"
                            onClick={() => {
                                setShowAll(!showAll);
                            }}
                        >
                            {showAll ? 'Collapse' : 'Show all'}
                        </button>
                    </div>
                </div>
            </form>
        </Container>
    );
});
const Container = styled.section`
    min-height: 100vh;
    padding: 32px 9%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--second-bg-color);
    .heading {
        font-size: 3.8rem;
        margin-bottom: 3rem;
        text-align: center;
    }
    span {
        color: var(--main-color);
    }

    form {
        width: 70%;
        margin: 0 auto;
    }
    .input-box {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .input-box .input-field {
        position: relative;
        width: 49%;
        margin: 0.8rem 0;
    }
    .textarea-field textarea,
    .input-field input {
        width: 100%;
        height: 100%;
        padding: 1.5rem;
        font-size: 1.6rem;
        border: 0.2rem solid var(--main-color);
        color: var(--text-color);
        border-radius: 0.6rem;
        background: transparent;
    }
    .textarea-field textarea::placeholder,
    .input-field input::placeholder {
        color: var(--text-color);
    }
    .textarea-field {
        position: relative;
        margin: 0.8rem 0 2.7rem;
        display: flex;
        textarea {
            resize: none;
        }
    }
    .btn-box {
        text-align: center;
        button {
            border: none;
            outline: none;
            width: 14rem;
            height: 4.2rem;
            border-radius: 0.8rem;
            color: var(--second-bg-color);
            font-size: 1.8rem;
            font-weight: 600;
            background-color: var(--main-color);
            border: 0.2rem solid var(--main-color);
            cursor: pointer;
            transition: 0.6s;
            &:hover {
                background-color: var(--second-bg-color);
                border: 0.2rem solid var(--main-color);
                color: var(--main-color);
            }
        }
        .message {
            font-size: 15px;
            margin-bottom: 12px;
            &.success {
                color: green;
            }
            &.error {
                color: red;
            }
        }
    }
    .some-feedbacks {
        padding-top: 60px;
        h1 {
            font-size: 22px;
            margin-bottom: 16px;
            text-align: center;
        }
        .feedbacks-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding-bottom: 32px;
        }

        .footer {
            display: flex;
            justify-content: center;
            margin-bottom: 24px;
            .show-all-btn {
                font-size: 16px;
                background-color: transparent;
                color: var(--main-color);
                border: none;
                outline: none;
                cursor: pointer;
            }
        }
    }

    @media (max-width: 991px) {
        form {
            width: 90%;
        }
    }
    @media (max-width: 520px) {
        form {
            width: 100%;
        }
    }
    @media (max-width: 462px) {
        form {
            .input-box .input-field {
                width: 100%;
            }
        }
    }
`;
export default Contact;
