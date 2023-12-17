import React from 'react';

const LawContainer = (props) => {
    return (
        <>
            <p><span>{props.code}</span>
            {props.text}
            </p>
        </>
    );
}
export default LawContainer;
