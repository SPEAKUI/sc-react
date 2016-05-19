import React, {Component} from 'react';
import { ScButton, ScText, ScProgresssIndicator, ScGlobalHeader, ScMainContainer, ScApplicationHeader, ScGlobalLogo, ScActionBar, ScNavigationContainer, ScAccountInformation } from '../src';

let backElements = (<ScText text="Composition in action bar!"></ScText>);
let actionElements = (<ScText text="Some actions"></ScText>);        
        
class ListPage extends Component {
    
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
                <ScApplicationHeader title="ListPage using REACT"></ScApplicationHeader>
                <ScActionBar backElements={backElements} actionElements={actionElements}></ScActionBar>
                <ScText text="Hello, world!"></ScText>
                <ScProgresssIndicator show={true}></ScProgresssIndicator>
                <ScProgresssIndicator></ScProgresssIndicator>
                <ScProgresssIndicator size="small" show={true}></ScProgresssIndicator>
                <ScButton text="Hello World from right!"></ScButton>    
            </ScMainContainer>
        </div>
        );
    }
}

export default ListPage;