import * as React from 'react';
import './page-not-found.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'

function PageNotFound() {
    return (
            <header className="PageNotFound-header">
                <p>Page Not Found <FontAwesomeIcon icon={faSadTear} /></p>
            </header>
    );
}

export default PageNotFound;
