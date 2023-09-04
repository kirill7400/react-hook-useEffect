import ListGroup from 'react-bootstrap/ListGroup';
import {useEffect, useState} from "react";
import * as React from "react";

function List ({ info }) {
  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(() => data)
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="List">
      <ListGroup defaultActiveKey="#link1">
        { list.map((item) => {
          return (
            <ListGroup.Item key={item.id} action onClick={ () => info(item) }>
              { item.name }
            </ListGroup.Item>
          )
        }) }
      </ListGroup>
    </div>
  )
}

export default List