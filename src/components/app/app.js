import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../error-boundary";

import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from "../../services/swapi-service";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import StarshipDetails from "../sw-components/starship-details";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom

export default class App extends Component {

    state = {
        selectedItem: null,
        hasError: false,
        swapiService: new SwapiService()
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header />
                            <RandomPlanet />

                            <Routes>
                                {/* Define your routes using the element prop */}
                                <Route path="/" element={<h4>Welcome to StarDB</h4>} exact />

                                <Route path="/people/:id?" element={<PeoplePage />} exact />

                                <Route path="/planets" element={<PlanetsPage />} exact />

                                <Route path="/starships" element={<StarshipsPage />} exact />

                                <Route path="/starships/:id" element={
                                    <StarshipDetails itemId={window.location.pathname.split('/').pop()} />
                                } />
                            </Routes>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}
