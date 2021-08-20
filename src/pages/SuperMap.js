import React from 'react'
import Mapp from '../components/Mapp'
import '../css/components/ContactMap.css'


const SuperMap = () => {
    return ( 
        <div>
            <div>
                <h1 className="titleContactMap">Contact Map</h1>
            </div>
            <Mapp/>
        </div>
     );
}
 
export default SuperMap;