import React from 'react';

const Field = (props) => {
  return (
    <button className={`Field ${props.winning}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Field;
