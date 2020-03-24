//SurveyField contains logic to render a single
//label and text input

import React from 'react';
// reduxForm pass a bunch of props automaticlly
export default ({ input, label, meta: { error, touched } }) => {
    //console.log(meta);
    // touched is so that its shows only after it is clicked
    //{touched && error } performs sames as its is in C
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }}/>
            <div className="red-text" style={{ marginBottom: '20px'}}>
                {touched && error} 
            </div>
        </div>
    )
};