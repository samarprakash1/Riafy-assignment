import React from 'react'
import Vplayer from 'react-player'
import Sdata from './Storedata'
import './Videoplayer.css'

const Videoplayer = () => {
    return (
        <div className="videoPlayer">
        {
            Sdata.map((val)=>{
                return (
                    <>
                    <Vplayer
                    className="vpl"
        controls
        height="250px"
        width="300px"
        url={val.vidlink}
         />
         <h3>{val.title}</h3>
         </>

                )
            })
        }
     
            
        </div>
    )
}

export default Videoplayer
