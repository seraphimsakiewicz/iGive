import { ADD_MY_EVENTS, DELETE_EVENT } from "../types/eventTypes";

export const deleteMyEvent = (idEvent) => ({
  type:DELETE_EVENT,
  payload: idEvent
})

// export const deleteMyEventFromServer = (idEvent) => async (dispatch) => {
//   console.log(idEvent);
//   const response = await fetch(`/user/myevents/${idEvent}`,  { method: 'DELETE' })
//   if (response.ok) {
//     dispatch(deleteMyEvent(idEvent))
//   }
// }

export const addNewEvent = (data) => ({
  type: ADD_MY_EVENTS,
  payload: data,
});

export const addNewEventFromServer =
  (bloodTypeId, bloodQuantity, eventDate, priority) => async (dispatch) => {
    const response = await fetch("/hospital/events/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bloodTypeId,
        bloodQuantity,
        eventDate,
        priority,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(addNewEvent(data));
    }
  };
