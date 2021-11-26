const BloodStorage = (props) => {
  const { bgcolor, completedPercentage, liters } = props;

  const containerStyles = {
    height: 40,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completedPercentage}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completedPercentage}%`}</span>
        <span style={labelStyles}>{`${liters}/3L`}</span>
      </div>
    </div>
  );
};

export default BloodStorage;
