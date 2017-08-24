import React from 'react'
import { PropTypes } from 'prop-types'

export default class EventListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  removeEvent = (e,id) => {
    e.preventDefault();
    this.props.removeEvent(id);
  }

  editEvent = (e,id) => {
    e.preventDefault();
    this.props.editEvent(id);
  }

  render() {

    return (
      <tr>
        <td>{this.props.event.name}</td>
        <td>{this.props.event.date}</td>
        <td>{this.props.event.venue.name}</td>
        <td>{this.props.event.venue.city}</td>
        <td>{this.props.event.venue.state}</td>
        <td>
          <figure className="event-list-item-actions">
            <a href="#" onClick={(e) => this.removeEvent(e,this.props.event.id)}>Remove</a>
            <a href="#" onClick={(e) => this.editEvent(e,this.props.event.id)}>Edit</a>
          </figure>
        </td>
      </tr>
    );
  }
}
