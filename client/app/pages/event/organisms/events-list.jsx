import React from 'react'
import { PropTypes } from 'prop-types'

import EventListItem from '../molecules/event-list-item'

export default class EventsList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <section>
        {this.props.events && this.props.events.length > 0 ?
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Venue</th>
                <th>City</th>
                <th>State</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.events.map((event) =>
                <EventListItem
                  key={event.key}
                  event={event}
                  editEvent={this.props.editEvent}
                  removeEvent={this.props.removeEvent}
                  />
              )}
            </tbody>
          </table> :
          null
        }
      </section>
    );
  }
}
