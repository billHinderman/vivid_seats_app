import React from 'react'
import { PropTypes } from 'prop-types'

import { consolidateState } from '../../../utilities/state'
import { deleteItem, duplicateItem, fetchItems } from '../../../utilities/item'

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

  handleDelete = (e,id) => {
    e.preventDefault();
    deleteItem(id)
      .then((data) => { this.attemptFetchItems() })
      .catch((error) => { this.attemptFetchItems() });
  }

  handleDuplicate = (e,id) => {
    e.preventDefault();
    duplicateItem(id)
      .then((data) => { this.attemptFetchItems() })
      .catch((error) => { this.attemptFetchItems() });
  }

  render() {
    let { isError, isLoaded, isLoading} = this.state
    let viewState = consolidateState(isError,isLoaded,isLoading);
    return (
      <section className="main-content">
        <ul>
        {this.state.items.map((item) =>
          <li>
            <div><a href={`/items/${item.id}`}>{item.title}</a></div>
            <div><a href={`/items/${item.id}/edit`}>Edit</a> todo</div>
            <div><a href="#" onClick={(e) => this.handleDelete(e,item.id)}>Delete</a></div>
            <div><a href="#" onClick={(e) => this.handleDuplicate(e,item.id)}>Duplicate</a></div>
            <pre>{JSON.stringify(item,null,2)}</pre>
          </li>
        )}
        </ul>
        <a href={`/items/new`}>New</a>
      </section>
    );
  }
}
