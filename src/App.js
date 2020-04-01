import React from 'react';
import './index.scss';
import Design from './Design';


class App extends React.Component{
    render(){ 
        return(
            <div>
                <div className="tittleGame"><h1>Connect 4</h1></div>
                <Design />
            </div>
        );
    }
};

export default App;