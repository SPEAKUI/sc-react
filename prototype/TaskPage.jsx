import React, {Component} from 'react';
import { ScButton, ScText, ScGlobalHeader, ScMainContainer, ScApplicationHeader, ScGlobalLogo, ScActionBar, ScNavigationContainer, ScAccountInformation } from '../src';

let backElements = (<ScText text="Composition in action bar!"></ScText>);
let actionElements = (<ScText text="Some actions"></ScText>);        
        
class TaskPage extends Component {
    render(){
        return (
          <div>
            <ScGlobalHeader>
                <ScGlobalLogo></ScGlobalLogo>
                <ScAccountInformation username="Administrator"></ScAccountInformation>
            </ScGlobalHeader>
            <ScNavigationContainer>
                    <ScButton text="Hello World from left!"></ScButton>
            </ScNavigationContainer>
            <ScMainContainer>
                <ScApplicationHeader title="Task Page using REACT"></ScApplicationHeader>
                <ScText text="Hello, world!"></ScText>
                <ScButton text="Hello World from right!"></ScButton>    
            </ScMainContainer>
        </div>
        );
    }
}

export default TaskPage;