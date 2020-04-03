import React from 'react';
import './index.scss';
import Column from'./Column';

class Design extends React.Component{
    state={counter: 0, board: Array(7).fill().map(()=>Array(6).fill(0))
}
    constructor(){
        super();
        this.selectColumn = this.selectColumn.bind(this);
        this.getPos = this.getPos.bind(this);
        this.checkWinner = this.checkWinner.bind(this);
    }

    declareWinner(x){
        alert(x + "is the winner");
        return window.location.reload();

    }

    componentDidUpdate(){
        this.checkWinner();
    }

    checkWinner() {
        let arr = this.state.board;
        let lines = arr.length; 
        let cols = arr[0].length;
        let maxLength = Math.max(cols, lines);

        let temp;
        for (let k = 0; k <= 2 * (maxLength - 1); ++k) {
            temp = [];
            for (let i = lines - 1; i >= 0; --i) {
                let j = k - i;

                if (j >= 0 && j < cols) {
                    temp.push(arr[i][j]);
                }
                
                if(this.getPos(temp) !== -1) {
                    return this.declareWinner(this.getPos(temp));
                }
            }
        }

        for(let k = 0; k <= 2 * (maxLength - 1); ++k) {
            temp = [];
            for (var i = lines - 1; i >= 0; --i) {
                var j = k - (lines - i);
                if (j >= 0 && j < cols) {
                    temp.push(arr[i][j]);
                }
                if(this.getPos(temp) !== -1) {
                    return this.declareWinner(this.getPos(temp));
                }
            }
        }

        for(let i = 0; i < lines; i++) {
            if(this.getPos(arr[i]) !== -1) {
                return this.declareWinner(this.getPos(arr[i]));
            }
        }

        for(let k = 0; k<cols; k++){
            let column = [];
            for(let i = 0; i<arr.length; i++){
                column.push(arr[i][k]);
            }
            if(this.getPos(column) !== -1) {
                return this.declareWinner(this.getPos(column));
            }
        }  
          return -1;
    }

    getPos(arr){
        for (let i = 0; i < arr.length; i++){
            if(arr[i]=== 1 && arr[i+1] ===1 && arr[i+2]=== 1 && arr[i+3]===1){
              return "pink"  
            }
            if(arr[i]=== 2 && arr[i+1] ===2 && arr[i+2]=== 2 && arr[i+3]===2){
              return "yellow";
            }
        }
        return -1;

    }

    selectColumn(contador, i){  
        
        if(contador === 0){
            return;          
        }
        const temp = [...this.state.board];
        
        if(this.state.counter%2 === 0){
            temp[i][contador-1] = 1
        }else{
            temp[i][contador-1] = 2
        }  
        this.setState({
            board: temp,
            counter: Math.max(this.state.counter+1)
        });
    }

    render(){   
             
        let array = [];
        for(let i = 0; i<=6; i++){  
            array.push(< Column column={this.state.board[i]} selectColumn={this.selectColumn} index={i}/>)    
        }
       
        return(
             <div className="container board"> 
             {array} 
            </div>
        );     
}
}

export default Design;