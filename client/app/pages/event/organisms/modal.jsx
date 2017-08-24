import React from 'react'
import { PropTypes } from 'prop-types'

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
  }


  //add
  //remove
  //update
  //list

  render() {

    return (
      <section>
        {this.props.children}
      </section>
    );
  }
}
