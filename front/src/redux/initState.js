const initState = {
  listHospital: [],
  events: [],
  event: null,
  user: null,
  hospital: null,
  confirmed: [],
};

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem("redux"));
  return stateFromLS ? stateFromLS : initState;
};

export default getInitState;
