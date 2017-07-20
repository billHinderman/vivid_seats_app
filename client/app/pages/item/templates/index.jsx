import React from 'react'
import { PropTypes } from 'prop-types'

import { consolidateState } from '../../../utilities/state'
import { fetchItems } from '../../../utilities/item'

export default class ItemIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: '',
      isError: false,
      isLoaded: false,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.attemptFetchItems();
  }

  attemptFetchItems() {
    this.setState(
      { isLoaded: false, isLoading: true, },
      () => {
        fetchItems()
          .then((data) => { this.setState({ items: data, isLoaded: true, isLoading: false, }) })
          .catch((error) => { this.setState({ error: error, isError: true, isLoading: false, }) });
      }
    )
  }

  render() {
    let viewState = consolidateState(this.state.isError,this.state.isLoaded,this.state.isLoading);
    return (
      <section>
        {JSON.stringify(this.state.items)}
        {viewState}
      </section>
    );
  }
}
