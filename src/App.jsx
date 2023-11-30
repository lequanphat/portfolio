import { useRef } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Home from './pages/Home';
import MyLife from './pages/MyLife';
import Skills from './pages/Skills';
function App() {
    const homeRef = useRef();
    const aboutRef = useRef();
    const educationRef = useRef();
    const skillsRef = useRef();
    const hobbiesRef = useRef();
    const contactRef = useRef();
    return (
        <>
            <Header arrRef={[homeRef, aboutRef, educationRef, skillsRef,hobbiesRef, contactRef]} />
            <Home ref={homeRef}/>
            <About ref={aboutRef}/>
            <Education  ref={educationRef}/>
            <Skills ref={skillsRef}/>
            <MyLife ref={hobbiesRef}/>
            <Contact ref={contactRef}/>
            <Footer />
        </>
    );
}

export default App;
