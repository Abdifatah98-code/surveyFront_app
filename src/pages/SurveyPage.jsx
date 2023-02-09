import React, { useEffect, useState } from "react";
import Navbar from "../comonents/Navbar";
import OverViewEvents from "../comonents/OverViewEvents";
import { FaGripfire } from "react-icons/fa";
import axios from "axios";

function SurveyPage() {
  const [workshops, setWorkshops] = useState([]);
  const [comments, setComments] = useState();
  const [allRates, setAllRates] = useState(true);
  const [excellent, setExcellent] = useState(false);
  const [verygood, setVerygood] = useState(false);
  const [good, setGood] = useState(false);
  const [poor, setPoor] = useState(false);

  const handleRates = ()=>{
    setAllRates((prevState)=>!prevState)
    setExcellent((prevState)=>!prevState)
    setVerygood((prevState)=>!prevState)
    setGood((prevState)=>!prevState)
    setPoor((prevState)=>!prevState)

    console.log(allRates);
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/workshope")
      .then((response) => {
        setWorkshops(response.data.data);
        // console.log(response.data.data);
        // Handle response
      })
      .catch((err) => {
        console.log("errrrrrr" + err);
      });

    axios
      .get("http://localhost:5000/api/survey")
      .then((response) => {
        // setWorkshops(response.data.data);
        setComments(response.data.data);
        // Handle response
      })
      .catch((err) => {
        console.log("errrrrrr" + err);
      });
  }, []);

  return (
    <div
      className="container-fluad pb-5"
      style={{ backgroundColor: "#F3F5FF" }}
    >
      <div className="wrapper mx-5 my-0 ">
        <Navbar />
        <OverViewEvents />
        <div class="row ">
          <div class="col-4 ">
            <div className="fitlter">
              <span className="fw-semibold" style={{ color: "#685F5F" }}>
                Filter
              </span>
              <div
              onClick={handleRates}
                className="card mt-2 w-75 p-2 d-flex flex-row align-items-center gap-2"
                style={{
                  borderRadius: "11px",
                  backgroundColor: `${allRates ===true? "#F3F5FF":"#DFE7FF"}`,
                  border: "none",
                  cursor: "pointer"
                }}
              >
                <div
                  className="ExcellentDot"
                  style={{
                    borderRadius: "50px",
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#362FD9",
                  }}
                ></div>
                <span>All</span>
              </div>
              <div
               onClick={handleRates}
                className="card cursor-pointer mt-2 w-75 p-2 d-flex flex-row align-items-center gap-2"
                style={{
                  borderRadius: "11px",
                  backgroundColor: `${allRates ===true? "#F3F5FF":"#DFE7FF"}`,
                  border: "none",
                  cursor: "pointer"
                }}
              >
                <div
                  className="ExcellentDot"
                  style={{
                    borderRadius: "50px",
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#02B801",
                  }}
                ></div>
                <span>Excellent</span>
              </div>
              <div
               onClick={handleRates}
                className="card mt-2 w-75 p-2 d-flex flex-row align-items-center gap-2"
                style={{
                  borderRadius: "11px",
                  backgroundColor: "#DFE7FF",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                <div
                  className="ExcellentDot"
                  style={{
                    borderRadius: "50px",
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#67D565",
                  }}
                ></div>
                <span>Ver Good</span>
              </div>
              <div
               onClick={handleRates}
                className="card mt-2 w-75 p-2 d-flex flex-row align-items-center gap-2"
                style={{
                  borderRadius: "11px",
                  backgroundColor: "#DFE7FF",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                <div
                  className="ExcellentDot"
                  style={{
                    borderRadius: "50px",
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#FECE00",
                  }}
                ></div>
                <span>Good</span>
              </div>
              <div
               onClick={handleRates}
                className="card mt-2 w-75 p-2 d-flex flex-row align-items-center gap-2"
                style={{
                  borderRadius: "11px",
                  backgroundColor: "#DFE7FF",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                <div
                  className="ExcellentDot"
                  style={{
                    borderRadius: "50px",
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#FC2415",
                  }}
                ></div>
                <span>Poor</span>
              </div>
            </div>
            <div class="workshop mt-5 scroll_work_shop">
              <span className="fw-semibold" style={{ color: "#685F5F" }}>
                Workshop Events
              </span>
              {workshops.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="card mt-2 p-2 d-flex flex-row align-items-center gap-2"
                    style={{
                      borderRadius: "11px",
                      backgroundColor: "#DFE7FF",
                      border: "none",
                      width: "85%",
                    }}
                  >
                    <div
                      className="ExcellentDot"
                      
                      style={{
                        borderRadius: "50px",
                        width: "10px",
                        height: "10px",
                        backgroundColor:` ${index ===0? "#4382EC":"#C1C1C1"}`,
                      }}
                    ></div>
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div class="col-8 mt-4">
            {comments?.map((item,index) => {
              return (
                <div key={index} className="card p-4 mt-3">
                  <div className="title d-flex align-items-center gap-2">
                    <FaGripfire />
                    <h4>{item.name}</h4>
                  </div>
                  <div className="desc">
                    <p>
                      {item.comment}.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveyPage;
