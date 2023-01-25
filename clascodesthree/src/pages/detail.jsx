import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Helmet } from 'react-helmet'

const DetailPage = () => {
   
    const [detealData,setDetealData]=useState([])
    const {_id}=useParams()
    const getDataDetail=async()=>{
        const datas= await axios.get(`http://localhost:8080/coursesrow/${_id}`)
        setDetealData( datas.data)
    }
    useEffect(() => {
       getDataDetail()
      
      }, []);
    return (
        <div className='deatilpage'>
                <Helmet>
                <meta charSet="utf-8" />
                <title>Detail Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
         <div style={{ padding: "60px" }}>
                  <div>
                    <img
                      src={detealData?.imgurl}
                      alt=""
                      style={{ width: "250px", height: "250px" }}
                    />
                  </div>
                  <div style={{ backgroundColor: "#F8F9FB" }}>
                    <h2 className="dataheader">{detealData?.description}</h2>
                    <p style={{ color: "#A5ADC3" }}>{detealData?.title}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      columnGap: "5px",
                      backgroundColor: "#EAEBEC",
                    }}
                  >
                    <img src={detealData?.imgurlavatar} alt="" className="avatar" />
                    <h4>
                      {detealData?.name}{" "}
                      <span style={{ color: "#C8B4A5" }}>author</span>
                    </h4>
                    <span
                      style={{ backgroundColor: "#FFB606", color: "white" }}
                    >
                      {detealData?.price}$
                    </span>
                  </div>
                </div>
        </div>
    )
}

export default DetailPage