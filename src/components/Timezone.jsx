import React from 'react';

function Timezone({timezone}) {
    return (
        <div className="timezone">
            <span className="timezone-info">Timezone:</span>
            {timezone}
        </div>
    );
}

export default Timezone;