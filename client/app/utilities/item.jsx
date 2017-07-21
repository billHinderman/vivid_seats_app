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

export const createItem = (_data) => {
  let createItem = new Promise((resolve, reject) => {
    $.ajax({
      type: `POST`,
      url: `/api/items`,
      context: this,
      dataType:'json',
      data: _data,
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return createItem;
}

export const updateItem = (id,data) => {
  let updateItem = new Promise((resolve, reject) => {
    $.ajax({
      type: `PATCH`,
      url: `/api/items/${id}`,
      context: this,
      dataType:'json',
      data: data,
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return updateItem;
}

export const duplicateItem = (id) => {
  let duplicateItem = new Promise((resolve, reject) => {
    $.ajax({
      type: `POST`,
      url: `/api/items/${id}/duplicate`,
      context: this,
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return duplicateItem;
}

export const deleteItem = (id) => {
  let deleteItem = new Promise((resolve, reject) => {
    $.ajax({
      type: `DELETE`,
      url: `/api/items/${id}`,
      context: this,
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return deleteItem;
}
