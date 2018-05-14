import React from 'react';

const PortfolioItemPAge = (props) => (
    <div>
        <h1>A thing I've done</h1>
        <p>This page is for the item with the id of { props.match.params.id }</p>
    </div>
);

export default PortfolioItemPAge;