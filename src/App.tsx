// import { useEffect, useState } from 'react';
import logo from './larkenCamp.svg';
// import axios from 'axios';

// export type Parks = {
//   CampsiteID: 'string';
//   FacilityID: 'string';
//   CampsiteName: 'string';
//   CampsiteType: 'string';
//   TypeOfUse: 'string';
//   Loop: 'string';
//   CampsiteAccessible: true;
//   CampsiteLongitude: -118.0186111;
//   CampsiteLatitude: 44.6969444;
// };
function App() {
  // const [parks, setParks] = useState<Parks[] | null>();
  // axios.defaults.baseURL =
  //   'https://ridb.recreation.gov/api/v1/campsites?limit=50&offset=0';
  // axios.defaults.headers['apikey'] = '95150cf7-f71e-473a-8f4f-ff73f0d4766c';
  // axios.defaults.headers.post['Content-Type'] =
  //   'application/x-www-form-urlencoded';

  // useEffect(() => {
  //   const url =
  //     'https://ridb.recreation.gov/api/v1/campsites?limit=50&offset=0';
  //   axios.get(url).then((response) => {
  //     setParks(response.data);
  //   });
  // });

  return (
    <div className="container">
      <header className="App-header">
        <img src={logo} className="larkenCamp-logo" alt="logo" />
      </header>
      <div className="data">
        {/* {parks
          ? parks.map((park) => {
              return <p>{park.CampsiteName + park.TypeOfUse}</p>;
            })
          : null} */}
      </div>
    </div>
  );
}

export default App;
