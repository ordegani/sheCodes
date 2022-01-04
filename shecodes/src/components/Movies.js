import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions'


export default class Movies extends Component {
    ComponentDidMount(){
        this.props.fetchData();
    }
    render() {
        return (
            <div>
               MOVIES 
            </div>
        )
    }
}

export default connect (
    null ,
    {fetchData}
)(Movies);