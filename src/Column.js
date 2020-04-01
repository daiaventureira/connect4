import React from 'react';
import './index.scss';

class Column extends React.Component{

    state={contador: 6}
    constructor(){
        super();
        this.selectLastElement = this.selectLastElement.bind(this);

    }

    selectLastElement(){
        this.props.selectColumn(this.state.contador, this.props.index);
        this.setState({
            contador: Math.max(0, this.state.contador-1)
            })
    }
    
    render(){
    
        const column = this.props.column;
        const array = [];
       
        for(var i = 0; i<column.length; i++){
            
            if(column[i] === 1 ){
                array.push(<div className="container player pink"></div>)
            }else if(column[i] === 2){
                array.push(<div className="container player yellow"></div>)
            }else{
                array.push(<div className="container player"></div>)
            }
        }
    
        return( 
           <div onClick={this.selectLastElement} className="column" >
                {array}
            </div>
        );
    }
}

export default Column;