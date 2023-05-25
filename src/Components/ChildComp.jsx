import React from 'react';

function ChildComp(props) {
    return (
        <div>
           <p> {props.data} this is from PropComponent</p>
           
        </div>
    );
}

export default ChildComp;