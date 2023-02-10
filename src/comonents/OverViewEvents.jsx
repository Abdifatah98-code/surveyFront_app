import React, { useState,useEffect } from "react";
import { FaRocket,FaUsers,FaChartPie } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

function OverViewEvents() {
  const [workshop_count,setWorkshop_count] = useState();
  const [ratingChart,setRatingChart] = useState();
   const [members,setMembers] = useState();
  

 

    
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/survey/filter_count")
        .then((response) => {
   
          setRatingChart(response.data)
        
          // console.log(response.data);
          console.log(ratingChart[0]?.count);
          console.log(ratingChart[1]?.count);
          console.log(ratingChart[2]?.count);
          console.log(ratingChart[3]?.count);
          
          // Handle response
        })
        .catch((err) => {
          console.log("errrrrrr" + err.response.data);
        });

        axios
        .get("http://localhost:5000/api/survey/members")
        .then((response) => {
          // setChartRate(response.data);
          // console.log(response.data);
          // Handle response
        })
        .catch((err) => {
          console.log("errrrrrr" + err.response.data);
        });
        
        axios
        .get("http://localhost:5000/api/workshope/workshope_count")
        .then((response) => {
          setWorkshop_count(response.data.workshops);
          console.log('response.data.workshops');
          console.log(response.data.workshops);
          // Handle response
        })
        .catch((err) => {
          console.log("errrrrrr" + err.response.data);
        });
        axios
        .get("http://localhost:5000/api/survey/members")
        .then((response) => {
          setMembers(response.data.data);
          // console.log(response.data.data);
          // Handle response
        })
        .catch((err) => {
          console.log("errrrrrr" + err.response.data);
        });
    
    }, []);

    const data = {
      labels: ['Excellent', 'Very Good', 'Good', 'pooor'],
      datasets: [
        {
          label: '# of Rates',
          // data: [chartRate[1]?.count, chartRate[1]?.count, chartRate[2]?.count, chartRate[3]?.count],
          data: [4,6, 6, 8],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
           
          ],
          borderWidth: 1,
        },
      ],
    };
  
    const options= {
      plugins: {
        legend: {
          position: 'right',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle'
          }
        }
      }
      }
  return (
    <div>
      <div class="container text-center " style={{ height: "30vh" }}>
        <div class="row  ">
          <div class="col-md-12 ft-5 fw-bolder">
            <h3>Workshop Event Place</h3>
          </div>
        </div>

        <div class="row mt-0 " style={{ color: "#524BFF" }}>
          <div class="col-md-6 col-lg-4 mb-2 col-sm-12 fs-5 fw-bolder" style={{ height: "20vh" }}>
            <span><FaRocket/> WorkShop Events</span>
            <h2 style={{ color: "#6A6B6C" }}>{
              workshop_count
            }</h2>
          </div>

          <div class="col-6 col-md-4 fs-5 fw-bolder" style={{ height: "20vh" }}>
            <span><FaUsers/> Rated People</span>
            <h2 style={{ color: "#6A6B6C" }}>{members}</h2>

        
          </div>
          <div class="col-6 col-md-4 fs-5 fw-bolder" style={{ height: "25vh" }}>
           <span><FaChartPie/> Rating rank chart</span>
            <div className="chartdisplay " style={{marginLeft:"30%",width:"250px",height:"25vh"}}>
            <Pie data={data} options={options}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverViewEvents;
