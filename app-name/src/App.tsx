
import './App.css';
import Aside from './components/Aside';
import Header from './components/Header';
import Section from './components/Section';
import Project from './components/Project';


import Welcome from './components/layou_t/Welcome';
import Social from './components/layou_t/Social';
import Skills from './components/layou_t/Skills';
import { Fragment } from 'react';


export default function App() {
    return (
        <div className="App">
            <div className="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>



            <Aside>
                <Header>
                    <Section>
                        <Fragment>
                            
                            {/* <Welcome /> */}
                            <Social />
                            {/* <Skills /> */}

                        </Fragment>


                    </Section>
                </Header>
            </Aside>

            <Project />
        </div>
    );
}
