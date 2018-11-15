
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config'
import TopbarContainer from '../containers/topbar_container.jsx'

class App extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
    }
    render(){
        const {route} = this.props
        return(
            <div className="wrapper">
                <TopbarContainer />
                <div className="container-content">
                    <div id="content">
                        {renderRoutes(route.routes)}
                    </div>
                </div>

            </div>
        )
    }
}
export default App