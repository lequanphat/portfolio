import styled from 'styled-components';
import Button from '../components/Button';

function Contact() {
    return (
        <Container id="contact">
            <h2 className="heading">
                Contact <span>Me</span>
            </h2>
            <form action="#">
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder="Full Name" />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="Email Address" />
                        <span className="focus"></span>
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder="Mobile Number" />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="Email Subject" />
                        <span className="focus"></span>
                    </div>
                </div>
                <div className="textarea-field">
                    <textarea name="" id="" cols={30} rows={10} placeholder="Your Message" required></textarea>
                    <span className="focus"></span>
                </div>
                <div className='btn-box'><Button>Submit</Button></div>
            </form>
        </Container>
    );
}
const Container = styled.section`
    height: 100vh;
    padding: 0 9%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--bg-color);
    .heading {
        font-size: 3.8rem;
        margin-bottom: 3rem;
        text-align: center;
    }
    span {
        color: var(--main-color);
    }

    form {
        width: 50%;
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
    .btn-box{
        text-align: center;
    }
    @media (max-width: 991px) {
        form{
            width: 90%;
        }
    }
    @media (max-width: 520px) {
        form{
            width: 100%;
        }
    }
    @media (max-width: 462px) {
        form{
            .input-box .input-field{
                width: 100%;
            }
        }

    }
`;
export default Contact;
