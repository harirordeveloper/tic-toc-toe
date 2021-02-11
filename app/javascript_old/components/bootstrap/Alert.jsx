import React from 'react';

const AlertVarients = {
    notice: 'alert alert-primary',
    success: 'alert alert-success',
    error: 'alert alert-danger'
};

var Alert = (props) => (
    <div className={AlertVarients[props.type]} role="alert">
        {props.msg}
    </div>
);

export default Alert;