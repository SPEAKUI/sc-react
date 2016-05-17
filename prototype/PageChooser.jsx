import React, {Component} from 'react';
import ListPage from './ListPage.jsx'
import TaskPage from './TaskPage.jsx'
import ToolPage from './ToolPage.jsx'

class PageChooser extends Component {
    
    constructor(props) {
        super(props);
        this.state = { pageType: 'ListPage' };
    }
  
    toListPage() {
        this.setState({
            pageType: 'ListPage'
        })    
    }
    
    toTaskPage() {
        this.setState({
            pageType: 'TaskPage'
        })    
    }
    
    toToolPage() {
        this.setState({
            pageType: 'ToolPage'
        })    
    }
    
    render(){
        
        const {pageType} = this.state;
        
        let mainPage;
        
        switch(pageType) {
            case 'ToolPage':
                mainPage = (<ToolPage></ToolPage>);
                break;
            case 'TaskPage':
                mainPage = (<TaskPage></TaskPage>);
                break;
            default:
                mainPage = (<ListPage></ListPage>);
                break;
        }
        
        const buttonChooserStyle = {
            position: 'fixed',
            right: '15px',
            bottom: '15px',
            zIndex: '9999'    
        };
        
        
        var ButtonChooser = (<div style={buttonChooserStyle}>
            <button onClick={this.toListPage.bind(this)}>ListPage</button>
            <button onClick={this.toTaskPage.bind(this)}>TaskPage</button>
            <button onClick={this.toToolPage.bind(this)}>ToolPage</button>
        </div>);
        
        
        return (
          <div>
            {mainPage}
            {ButtonChooser}
          </div>
        );
    }
}

export default PageChooser;