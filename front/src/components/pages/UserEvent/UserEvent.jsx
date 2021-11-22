import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3001/user/event/${id}`)
      .then((res) => res.json())
      .then((dataFromServer) => {
        setEvent(dataFromServer)
      })
  }, []);


  return (
    <div className="eventUser">
      <div className="container">
        <div className="eventUserWrapper">
        <div className="eventUserCard">
          <p>{event.name}</p>
          <button type="button" className="btn btn-success">Проложить путь</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default UserEvent
