import React from 'react';


const Tweet = ({ item: { name, tweet, key }, deleteItem, timeStamp, randomImages, checkHandler, done }) => (
  <li>
    <h1
      onClick={checkHandler}
      style={done ? { textDecoration: 'line-through' } : { textDecoration: "none" }}
    >{name}</h1>
    <p>{tweet}</p>
    <p>Timestamp : {timeStamp}</p>
    <p>random images here: {randomImages}</p>
    <button
      onClick={() => deleteItem(key)}
    >Delete me</button>
  </li>
)

export default Tweet;