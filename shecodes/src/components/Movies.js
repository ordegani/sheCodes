import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions'


export default class Movies extends Component {
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