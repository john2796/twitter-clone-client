import React from 'react';


const Tweet = ({ item: { name, tweet, key }, deleteItem }) => (
  <li>
    <h1>{name}</h1>
    <p>{tweet}</p>
    <button
      onClick={() => deleteItem(key)}
    >Delete me</button>
  </li>
)

export default Tweet;