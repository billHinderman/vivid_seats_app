import React from 'react'
import { PropTypes } from 'prop-types'
import VividSeats from '../../../utilities/event-service'

import EventsNav from '../organisms/events-nav'
import EventsList from '../organisms/events-list'
import EventAdd from '../organisms/event-add'

import Modal from '../organisms/modal'

export default class EventIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      filteredEvents: [],
      error: '',
      isError: false,
      isLoaded: false,
      isLoading: false,
      modalVisible: false,
    };
  }

  componentDidMount() {
    VividSeats.eventService.all(this.updateEvents,this.onError)
  }

  filterEvents = (type) => {
    if(type === 'local') {
      VividSeats.eventService.all(this.updateEvents,this.onError)
    } else if (type === 'upcoming') {
      VividSeats.eventService.all(this.updateEvents,this.onError)
    } else {
      VividSeats.eventService.all(this.updateEvents,this.onError)
    }
  }

  updateEvents = (data) => {
    console.log(data);
    this.setState({events:data, filteredEvents: data})
  }

  onError = (data) => {
    console.log(data);
  }

  addEvent = (data) => {
    console.log(data);
    VividSeats.eventService.add(data,this.filterEvents,this.onError)
  }

  updateEvent = (id,data) => {
    const event = findEvent(id);
  }

  removeEvent = (id) => {
    const event = findEvent(id);
  }

  findEvent = (id) => {
    for (let i = 0; i< this.state.events.length; i++) {
      if(this.state.events[i].id === id) {
        console.log(this.state.events[i])
        return this.state.events[i];
      }
    }
    return null;
  }

  renderModalContents() {
    if(this.state.modalContents === 'add') {
      return (
        <EventAdd
          addEvent={this.addEvent}
        />
      )
    } else if(this.state.modalContents === 'edit') {

    }
  }

  toggleModal = (e,status) => {
    e.preventDefault()
    this.setState(
      {
        modalVisible: true,
        modalContents: status
      }
    )
  }

  render() {
    const eventService = VividSeats.eventService;
    return (
      <section className="main-content">
        <EventsNav
          filterEvents={this.filterEvents}
          />
        <EventsList
          events={this.state.events}
          editEvent={this.editEvent}
          removeEvent={this.removeEvent}
          />
        <a href="#" onClick={(e) => this.toggleModal(e,'add')}>Add event</a>
        {this.state.modalVisible ?
          <EventAdd
            addEvent={this.addEvent}
          /> :
          null
        }
      </section>
    );
  }
}
