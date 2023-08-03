import React from 'react'

const Alert = (props) => {
  const capitalize = (word) => {
    if (word === 'danger') {
      word = 'error';
    }
    let str = word.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
}

return (
<div style={{height: '55px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role='alert'>
    <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
    </div>}
</div>
)
}

export default Alert