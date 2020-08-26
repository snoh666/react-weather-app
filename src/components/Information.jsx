import React from 'react';
import Skycons from 'react-skycons';

const Information = ({summary, icon}) => {
    return (
        <div className="app-info">
            <h1>{summary}</h1>
            <div className="icon">
                {icon !== undefined ? <Skycons color="white" autoplay={true} icon={icon.toUpperCase().replace('-', '_')} /> : <h2>Icon unavaible allow location get or wait for database connection..</h2>}
            </div>
        </div>
    );
};

export default Information;