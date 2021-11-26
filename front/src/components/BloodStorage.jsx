const BloodStorage = (props) => {
  const { bgcolor, completedPercentage, liters, bloodTypeId } = props;

  const containerStyles = {
    marginBottom: 20,
    marginTop: 20,
    height: 40,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    display: 'flex',
    width: `${completedPercentage}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 8,
    color: "white",
    fontWeight: "bold",
  };
  console.log(bloodTypeId)
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completedPercentage}%`}</span>
        <span style={labelStyles}>{`${liters}/5L`}</span>
        <p>
          {bloodTypeId === 1
            ? "O(I) Rh+"
            : bloodTypeId === 2
              ? "O(I) Rh-"
              : bloodTypeId === 3
                ? "A(II) Rh+"
                : bloodTypeId === 4
                  ? "A(II) Rh-"
                  : bloodTypeId === 5
                    ? "B(III) Rh+"
                    : bloodTypeId === 6
                      ? "B(III) Rh-"
                      : bloodTypeId === 7
                        ? "AB(IV) Rh+"
                        : bloodTypeId === 8
                          ? "AB(IV) Rh-"
                          : "Тип крови не найдено"}
        </p>
      </div>
    </div>
  );
};

export default BloodStorage;
