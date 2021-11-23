const initState = {
  listHospital: [],
  event: [],
  user: null,
  hospital: null,
  confirmedList: [],
  bloodTypes: [],
  hospitalMyDonor: []
};

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('redux'));
  return stateFromLS ? stateFromLS : initState;
};

export default getInitState;
