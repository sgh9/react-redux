import React, { Component } from 'react';

import Input from '../Components/Square/Input/Input';
import {connect} from 'react-redux';
import './Box.css';
import Output from '../Components/Output./Output';
import Buttton from '../Components/UI/Button/Button';

import {increment} from '../Store/actions/actionTypes';
import * as actionCreater  from  '../Store/actions/index';

class Box extends Component {

      state = {

          decrement:20,
          increment:100

      }

      render() {

            return (
              
                  <div className ="box-container">
                          <Output  value={this.props.ctr} />
                       
                        <div className ="box">  
                       <Input 
                        value= "I++"
                        clicked = {this.props.onIncrement}
                        btnType="Increment"/>

                       <Input 

                      clicked = {this.props.onDecrement }
                        
                        value= "I--"
                        btnType="Decrement"/>

                       <Input 
                        value= 'add 10'
                        clicked = {this.props.onAddition}
                        btnType="Addition"/>

                       <Input 
                        clicked = {this.props.onSubstraction}
                        value= "sub 10"
                        btnType="Substraction"/>
                        </div>

                        <ul>
                       {this.props.resultLists.map((item,i) => 
                       
                       <li onClick = {() =>this.props.onDelete(item.id)} 

                       key = {item.id}> 
                       {item.value}</li>  )}    
                        
                         
                           <Buttton onClick= 
                           {()=>this.props.onResult(this.props.ctr)}  >
                                Add</Buttton>
                        </ul>

                       
                  </div>
            );
      }
}

const mapStateToProps = (state) => {

      return {
            ctr :state.ctr.add,
            resultLists :state.lists.result
      }
}


const mapDispatchToProps = (dispatch) => {

      return {
          onIncrement : () => dispatch(actionCreater.increment()),
          onDecrement : () => dispatch(actionCreater.decrement()),
          onAddition : () => dispatch(actionCreater.add()),
          onSubstraction : () => dispatch(actionCreater.substraction()),
         onResult : (res) =>  dispatch(actionCreater.result(res)) ,
         onDelete : (id) =>  dispatch(actionCreater.deleteList(id))
      } 
          
      
          
      
}

export default connect(mapStateToProps,mapDispatchToProps)(Box);