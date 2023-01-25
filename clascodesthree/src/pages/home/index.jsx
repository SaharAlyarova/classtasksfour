import React, { useEffect, useState } from "react";
import "./index.scss"
import axios from "axios"
import SwiperSlider from "./swiper";
import {Helmet} from "react-helmet"
import { Link } from "react-router-dom";
import DataAfterSection from "./dataafteronesection";
import DataAfterSectionTwo from "./dataaftertwosection";
const HomePage = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await axios.get("http://localhost:8080/coursesrow");
    setData( data.data)
  };
  useEffect(() => {
  getData()
  }, [])

const handleDelete= async(_id)=>{
await axios.delete(`http://localhost:8080/coursesrow/${_id}`).then(()=>axios.get`http://localhost:8080/coursesrow`).then((data)=>setData(data.data))
}

const handleSort=()=>{
  const sortedData=data.sort((a,b)=>a.price>b.price ? 1 : -1)
  setData([...sortedData])
}
const repeatsort = () => {
  const sortedData = data.sort((a, b) => (a.price < b.price ? 1 : -1));
  setData([...sortedData]);
};
const handleSearch=async(e)=>{
const searchdata=axios.get("http://localhost:8080/coursesrow")
setData([...(await searchdata).data.filter((el)=>el.name.toLowerCase().includes(e.target.value.toLowerCase()))])
}
  return (
    <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div>
        <SwiperSlider />
      </div>
      <div
        style={{
          border: "2 px solid black",
          justifyContent: "center",
          alignItems: "center",
          margin: "3%",
        }}
      >
        <div className="smallColorDiv" style={{ marginLeft: "30px" }}></div>

        <div>
          <h1>Popular Courses</h1>
          <input type="text" style={{color:'red', backgroundColor:'black', padding:'7px'}} placeholder="search name..." onChange={(e)=>{handleSearch(e)}}/>
          <button onClick={()=>{handleSort()}}>Sort</button>
          <button onClick={()=>{repeatsort()}}>Repead Sort</button>
        </div>
        <div style={{ display: "flex" }}>
          {data?.map((el) => {
            return (
              <div>
                <Link to={`/${el._id}`}>
                <div style={{ padding: "20px" }}>
                  <div>
                    <img
                      src={el?.imgurl}
                      alt=""
                      style={{ width: "250px", height: "250px" }}
                    />
                  </div>
                  <div style={{ backgroundColor: "#F8F9FB" }}>
                    <h2 className="dataheader">{el?.description}</h2>
                    <p style={{ color: "#A5ADC3" }}>{el?.title}</p>
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
                    <img src={el?.imgurlavatar} alt="" className="avatar" />
                    <h4>
                      {el?.name}{" "}
                      <span style={{ color: "#C8B4A5" }}>author</span>
                    </h4>
                    <span
                      style={{ backgroundColor: "#FFB606", color: "white" }}
                    >
                      {el?.price}$
                    </span>
                  </div>
                </div></Link>
                <button
                  onClick={() => {
                    handleDelete(el._id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <DataAfterSection/>
      </div>
      <div>
        <DataAfterSectionTwo/>
      </div>
    </div>
  );
};

export default HomePage;
