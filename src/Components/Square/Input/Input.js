import React from 'react';
import Button from '../../UI/Button/Button';
import './Input.css';


const input = (props) => {
      return (
            <div className = "Input">

        <div  className ="Input-box">
      <h1>{props.value}</h1>
                  </div>  

      <Button onClick ={props.clicked}>
            {props.btnType}</Button>
            </div>
      )
}

export default input;