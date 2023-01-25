import React, { useEffect, useState } from "react";
import "./index.scss"
import axios from "axios"
import SwiperSlider from "./swiper";
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
await axios.delete(`http://localhost:8080/coursesrow/${_id}`);
}

const handleSort=()=>{
  const sortedData=data.sort((a,b)=>a.price>b.price ? 1 : -1)
  setData([...sortedData])
}
  return (
    <div>
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
          <button onClick={()=>{handleSort()}}>Sort</button>
        </div>
        <div style={{ display: "flex" }}>
          {data?.map((el) => {
            return (
              <div>
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
                </div>
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
    </div>
  );
};

export default HomePage;
