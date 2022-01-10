import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from "history";
import { Router } from 'react-router-dom';
import CountryInfo from '../components/pages/CountryInfo';

test('renders country info', () => {

    const history = createMemoryHistory();
    history.push("/country/name");

    render(
        <Router history={history}>
            <CountryInfo />
        </Router>
    );
    const countryElement = screen.getByTestId("country");
    expect(countryElement).toBeInTheDocument();
});
