import React from 'react'
import { PropTypes } from 'prop-types'

export default class EventsNav extends React.Component {

  constructor(props) {
    super(props);
  }


  onClick = (e,type) => {
    e.preventDefault();
    this.props.filterEvents(type);
  }

  render() {

    return (
      <nav>
        <ul>
          <a href="#" onClick={(e) => this.onClick(e,'all')}>All events</a>
          <a href="#" onClick={(e) => this.onClick(e,'upcoming')}>Upcoming events</a>
          <a href="#" onClick={(e) => this.onClick(e,'local')}>Local events</a>
        </ul>
      </nav>
    );
  }
}
