import {useEffect, useState} from "react";
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

function Details({ info }) {
  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    avatar: null,
    details: {
      city: '',
      company: '',
      position: ''
    },
    id: null,
    name: null,
  })

  useEffect(() => {
    if (info && info.id){
      setLoading(true)
      fetch(url + `${info.id}.json`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setLoading(false)
          setData(data)
        })
        .catch(() => setLoading(true));
    }

  }, [info])

  return (
    <div className='Details'>
      {
        loading ?
          <Spinner className="spinner" animation="border" /> :
          data.name ?
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ data.avatar } />
              <Card.Body>
                <Card.Title>{ data.name }</Card.Title>
                <Card.Text>
                  City: { data.details.city } <br/>
                  Company: { data.details.company } <br/>
                  Position: { data.details.position }
                </Card.Text>
              </Card.Body>
            </Card> :
            <div></div>
      }
    </div>
  )
}

export default Details