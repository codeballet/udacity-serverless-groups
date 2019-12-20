import React from 'react'
import { Card, Button, Divider } from 'semantic-ui-react'
import { getGroups } from '../api/groups-api'


export class GroupsList extends React.Component {
    state = { groups: [] }

    async componentDidMount() {
        try {
            const groups = await getGroups()
            console.log('Groups in GroupsList: ', groups)
            this.setState({ groups })
        } catch (e) {
            alert(`Failed to fetch groups: ${e.message}`)
        }
    }

    render() {
        return(
            <div>
                <h1>Groups</h1>
                <p>{this.state.groups.length}</p>
            </div>
        )
    }
}