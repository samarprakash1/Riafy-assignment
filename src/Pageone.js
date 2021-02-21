import React, { useState } from 'react'
import Storedata from './Storedata'
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {Link} from 'react-router-dom'
import './Pageone.css'

const Pageone = () => {
    const [countone, setCountone]=useState(0)
    const [counttwo, setCounttwo]=useState(0)
    const [viw, setViw]=useState(0)
  const   likeBro=()=>{
        setCountone(countone+1)
    }
    const   dislikeBro=()=>{
        setCounttwo(counttwo+1)
    }
    const views=()=>{
        setViw(viw+1)
    }
    return (

        <div className="pageone__container">


            {
                Storedata.map((val) => {
                    return (
                        <div className="pageone__left">
                            <div>
                               
                               <Link to="/videoplayer"><img onClick={views} src={val.imgSrc} /></Link>
                            </div>

                            <div className="pageonematadata">
                                <div className="titleandaw">
                                    <Avatar className="clogo" src={val.imgSrcTwo} />
                                    <h3>{val.title}</h3>
                                </div>

                                <div className="pageonemetadata__Right">
                                    <div className="title">
                                     
                                        <p>{val.cname}</p>
                                    </div>
                                    <div className="t-dot">
                                  <p>views<span>{viw}</span></p>
                                        <ThumbUpIcon onClick={likeBro} className="tdot-icon"> </ThumbUpIcon>
                                        <p>{countone}</p>
                                        <ThumbDownIcon onClick={dislikeBro} className="tdot-icon"></ThumbDownIcon>
                                        <p>{counttwo}</p>
                                        <MoreVertIcon className="tdot-icon"/>


                                    </div>



                                </div>
                            </div>

                        </div>
                    )
                })
            }




        </div>

    )
}

export default Pageone
