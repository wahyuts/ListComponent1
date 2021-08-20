import React from 'react'
// import Mapp from '../components/Mapp'
// import MappViaFetchAPI from '../components/MappViaFetchAPI';
// import MappViaAxiosAPI from '../components/MappViaFetchAPI';
import MappViaSwrAPI from '../components/MappViaFetchAPI';

import '../css/components/ContactMap.css'


const SuperMap = () => {
    return ( 
        <div>
            <div>
                <h1 className="titleContactMap">Contact Map</h1>
            </div>
            {/* <MappViaFetchAPI/> */}
            {/* <MappViaAxiosAPI/> */}
            <MappViaSwrAPI/>
            {/* <Mapp/> */}
        </div>
     );
}
 
export default SuperMap;