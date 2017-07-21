import React from 'react'
import { PropTypes } from 'prop-types'

import { consolidateState } from '../../../utilities/state'
import { createItem } from '../../../utilities/item'

export default class ItemCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      content: '',
      error: '',
      isError: false,
      isLoading: false,
      isLoaded: true,
    };
  }

  onChange = (e) => {
    e.preventDefault();
    let stateChange = {};
    stateChange[e.target.name] = e.target.value;
    this.setState(stateChange);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.attemptSaveItem();

  }

  attemptSaveItem() {
    const _data = {
      title: this.state.title,
      description: this.state.description
    }
    this.setState(
      { isLoaded: false, isLoading: true, },
      () => {
        createItem(_data)
          .then((data) => { window.location = `/items/${data.id}` })
          .catch((error) => { this.setState({ error: error, isError: true, isLoading: false, }) });
      }
    )
  }

  render() {
    return (
      <section className="main-content">
        <form>
          <label htmlFor={`title`}>Title</label>
          <input
            name={`title`}
            onChange={this.onChange}
            type={`text`}
            value={this.state.title}
          />
          <label htmlFor={`description`}>Description</label>
          <textarea
            name={`description`}
            onChange={this.onChange}
            value={this.state.description}
          />
          <button onClick={(e) => this.onSubmit(e)}>Create</button>
        </form>
      </section>
    );
  }
}
