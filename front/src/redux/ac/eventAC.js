import { ADD_EVENT_HOSPITAL } from "../types/eventTypes";

export const addNewEvent = (type, amout, date, time) => ({
  type: ADD_EVENT_HOSPITAL,
  payload: {
    type,
    amout,
    date,
    time
  }
})

// export const addNewEventFromServer = (type, amout, date, time) => async (dispatch) => {
//   const response = await fetch('http://localhost:3001/hospital', {
//     method: 'POST', headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       type,
//       amout,
//       date,
//       time
//     })
//   })
//   const data = await response.json()
//   if (response.ok) {
//     dispatch(addNewEvent(data))
//   }
// }
