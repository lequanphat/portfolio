import { useRef } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Home from './pages/Home';
import Skills from './pages/Skills';

function App() {
    const homeRef = useRef();
    const aboutRef = useRef();
    const educationRef = useRef();
    const skillsRef = useRef();
    const contactRef = useRef();
    return (
        <>
            <Header educationRef={educationRef} homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} contactRef={contactRef} />
            <Home ref={homeRef}/>
            <About ref={aboutRef}/>
            <Education  ref={educationRef}/>
            <Skills ref={skillsRef}/>
            <Contact ref={contactRef}/>
            <Footer />
        </>
    );
}

export default App;
