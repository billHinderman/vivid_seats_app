import React from 'react'
import { PropTypes } from 'prop-types'

import consolidateState from '../../../utilities/state'

export default class ItemCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      content: '',
    };
  }

  render() {
    return (
      <section>
        create
      </section>
    );
  }
}
