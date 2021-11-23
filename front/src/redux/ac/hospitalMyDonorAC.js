import { ALL_HOSPITAL_MY_DONOR } from "../types/hospitalMyDonorTypes";



export const allhospitalMyDonor = (array) => ({
  type: ALL_HOSPITAL_MY_DONOR,
  payload: array
})

export const allhospitalMyDonorFromServer = () => async (dispatch) => {
  const response = await fetch('hospiatl/donors');
  const dataFromServer = await response.json();
  dispatch(allhospitalMyDonor(dataFromServer));
}
