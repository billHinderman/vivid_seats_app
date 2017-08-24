import React from 'react'
import { PropTypes } from 'prop-types'

export default class EventAdd extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      eventName: '',
      eventDate: '',
      eventTime: '',
      venueName: '',
      venueCity: '',
      venueState: '',
    }
  }

  onChange = (e) => {
    e.preventDefault();
    let stateChange = {};
    stateChange[e.target.name] = e.target.value;
    this.setState(stateChange);
  }

  onSubmit = (e) => {

    e.preventDefault()
    let data = {
        id: 5,
        name: this.state.eventName,
        date: this.state.eventDate + this.state.eventTime,
        venue: {
          id: 5,
          name: this.state.venueName,
          city: this.state.venueCity,
          state: this.state.venueState,
        }
      }
    this.props.addEvent(data);
  }

  render() {
    return (
      <section>
        <form name="addEventForm">
            <p> Event Information</p>
            <input placeholder="Event Name" value={this.state.eventName} name={`eventName`} onChange={(e) => this.onChange(e)} />
            <input placeholder="Date" id="add-event-date" value={this.state.eventDate} name={`eventDate`} onChange={(e) => this.onChange(e)} />
            <input placeholder="Time" id="add-event-time" value={this.state.eventTime} name={`eventTime`} onChange={(e) => this.onChange(e)} />
            <p> Venue Information</p>
            <input placeholder="Venue Name" value={this.state.venueName} name={`venueName`} onChange={(e) => this.onChange(e)} />
            <input placeholder="Venue City" value={this.state.venueCity} name={`venueCity`} onChange={(e) => this.onChange(e)} />
            <select name="state" size="1" value={this.state.venueState} name={`venueState`} onChange={(e) => this.onChange(e)}>
                  <option value="AK">AK</option>
                  <option value="AL">AL</option>
                  <option value="AR">AR</option>
                  <option value="AZ">AZ</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DC">DC</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="IA">IA</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="MA">MA</option>
                  <option value="MD">MD</option>
                  <option value="ME">ME</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MO">MO</option>
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="NC">NC</option>
                  <option value="ND">ND</option>
                  <option value="NE">NE</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NV">NV</option>
                  <option value="NY">NY</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VA">VA</option>
                  <option value="VT">VT</option>
                  <option value="WA">WA</option>
                  <option value="WI">WI</option>
                  <option value="WV">WV</option>
                  <option value="WY">WY</option>
            </select>
            <div className="modal-footer">
                <button type="button" data-dismiss="modal">Close</button>
                <button type="submit" onClick={(e) => this.onSubmit(e)}>Add Event</button>
            </div>
        </form>
      </section>
    );
  }
}
