export const fetchItems = () => {
  let fetchItems = new Promise((resolve, reject) => {
    $.ajax({
      type: `GET`,
      url: `/api/items`,
      context: this,
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return fetchItems;
}

export const fetchItem = (id) => {
  let fetchItem = new Promise((resolve, reject) => {
    $.ajax({
      type: `GET`,
      url: `/api/items/${id}`,
      context: this,
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return fetchItem;
}
