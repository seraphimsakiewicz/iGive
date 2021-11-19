const initState = {
  listHospital: [],
  events: [],
  user: null,
  hospital: null,
};

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('redux'));
  return stateFromLS ? stateFromLS : initState;
};

export default getInitState;
