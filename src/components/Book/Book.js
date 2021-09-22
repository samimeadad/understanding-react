import React from 'react';

const Book = ( props ) => {
    return (
        <div>
            <h2>{ props.name }</h2>
            <h3>{ props.author }</h3>
        </div>
    );
};

export default Book;