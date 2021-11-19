const initState = {
  listHospital: [],
  events: [],
  donor: null,
  hospital: null,
};

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem("redux"));
  return stateFromLS ? stateFromLS : initState;
};

export default getInitState;
