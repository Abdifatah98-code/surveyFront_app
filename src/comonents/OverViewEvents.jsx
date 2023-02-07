import React from "react";

function OverViewEvents() {
  return (
    <div>
      <div class="container text-center " style={{height:"35vh"}}>
        <div class="row ">
          <div class="col-md-12 ft-5 fw-bolder">
            <h3>Workshop Event Place</h3>
            
          </div>
        </div>

        <div class="row mt-3" style={{ color: "#524BFF" }}>
          <div class="col-6 col-md-4 ft-2 fw-bolder">
            <span>WorkShop Events</span>
            <h2>373</h2>
            
            
          </div>
          
          <div class="col-6 col-md-4 ft-2 fw-bolder">
            <span>Rated People</span>
            <h2>373</h2>

            {/* <div class="d-flex" style={{ height: "50px" }}>
              <div class="vr"></div>
            </div> */}
          </div>
          <div class="col-6 col-md-4 ft-2 fw-bolder">Rating rank chart
            <span>Rated People</span>
            <h2 className="text" style={{color:"#6A6B6C"}}>373</h2>

            {/* <div class="d-flex" style={{ height: "50px" }}>
              <div class="vr"></div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default OverViewEvents;
