import React, {useEffect} from 'react'

const Drivers = () => {
    useEffect(() => {
        fetch("http://ergast.com/api/f1/drivers.json")
          .then((r) => r.json())
          .then((data) => console.log(data.MRData));
      }, []);
  return (
    <div>Drivers</div>
  )
}

export default Drivers