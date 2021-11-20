import { ADD_EVENT } from "../types/eventTypes";

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
