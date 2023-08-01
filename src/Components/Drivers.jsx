import React, { useEffect, useState } from "react";

const Drivers = () => {
    const [drivers, setdrivers] = useState([])
  useEffect(() => {
    fetch("http://ergast.com/api/f1/drivers.json")
      .then((r) => r.json())
      .then((data) => setdrivers(data.MRData.DriverTable.Drivers));
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 mt-40 bg-black bg-repeat w-full">
      {drivers.map((driver) => (
        <div
          className="card grid-item"
          style={{ width: "18rem" }}
          key={driver.driverId}
        >
          <img
            src='https://e6.365dm.de/23/04/768x432/skysport_de-hamilton-mercedes_6126624.jpg?20230419183830'
            className="card-img-top"
            alt="Galactic Warrior"
            style={{width:"200px"}}
          />
          <div className="card-body">
            <h5 className="card-title"><span className="text-rose-600">{driver.givenName}</span></h5>
            <p className="card-text">Armor: {driver.familyName}</p>
            <p className="card-text">Damage: {driver.dateOfBirth}</p>
            <p className="cardtext">Health: {driver.nationality}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Drivers;
