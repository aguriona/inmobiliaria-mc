import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Inmobiliaria } from './Inmobiliaria';
import { HomePage } from './components/home/HomePage';
import { ProjectsPage } from './components/projects/ProjectsPage';
import { ContactPage } from './components/contact/ContactPage';

import './index.css';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <Routes>
                <Route path='/' element={ <Inmobiliaria /> }>
                    <Route 
                        index
                        element={ <HomePage /> }
                    />
                    <Route
                        path='projects'
                        element={ <ProjectsPage /> }
                    />
                    <Route
                        path='contact'
                        element={ <ContactPage /> }
                    />
                </Route>
            </Routes>
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById('root')
);
