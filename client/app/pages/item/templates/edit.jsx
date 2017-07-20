import React from 'react'
import { PropTypes } from 'prop-types'

import { consolidateState } from '../../../utilities/state'
import { fetchItem } from '../../../utilities/item'

export default class ItemEdit extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      item: {},
      error: '',
      isError: false,
      isLoading: false,
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.attemptFetchItem();
  }

  attemptFetchItem() {
    this.setState(
      { isLoaded: false, isLoading: true, },
      () => {
        fetchItem(this.state.id)
          .then((data) => { this.setState({ item: data, isLoaded: true, isLoading: false, }) })
          .catch((error) => { this.setState({ error: error, isError: true, isLoading: false, }) });
      }
    )
  }

  render() {
    let viewState = consolidateState(this.state.isError,this.state.isLoaded,this.state.isLoading);
    return (
      <section>
        {JSON.stringify(this.state.item)}
        {viewState}
      </section>
    );
  }
}
