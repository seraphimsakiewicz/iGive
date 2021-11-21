import { ADD_EVENT, ALL_HOSPITAL_EVENTS, ALL_USER_EVENTS } from "../types/eventTypes";

export const addNewEvent = (bloodTypeId, bloodQuantity, eventDate, priority) => ({
  type: ADD_EVENT,
  payload: {
    bloodTypeId,
    bloodQuantity,
    eventDate,
    priority,
  },
});

export const addNewEventFromServer = (bloodTypeId, bloodQuantity, eventDate, priority) => async (dispatch) => {
  console.log(bloodTypeId, bloodQuantity, eventDate, priority);
  const response = await fetch('/hospital/events/new', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      bloodTypeId,
      bloodQuantity,
      eventDate,
      priority
    })
  })
  const data = await response.json()
  if (response.ok) {
    dispatch(addNewEvent(data))
  }
}


export const allEventHospital = (array) => ({
  type: ALL_HOSPITAL_EVENTS,
  payload: array
})

export const allEventFronServer = () => async (dispatch) => {
  const response = await fetch('/hospital/events');
  const allEvents = await response.json();
  dispatch(allEventHospital(allEvents));
}


export const allEventUser = (array) => ({
  type: ALL_USER_EVENTS,
  payload: array
})

export const allEventUserFromServer = () => async (dispatch) => {
  const response = await fetch('/user/events');
  const allEvents = await response.json();
  dispatch(allEventUser(allEvents));
}

