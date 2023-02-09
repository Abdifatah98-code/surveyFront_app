import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ReviewingPage() {
  const notify = () => toast("Saved Succesfully!");
  let navigate = useNavigate();
 
  const handleSubmit = async e => {
    // Prevent the default submit and page reload
    e.preventDefault()
    toast("Saved Succesfully !");
    // Handle validations

    let data={
      name,
      rate,
      comment,
      phone
    }

    console.log(data);

    await axios
      .post("http://localhost:5000/api/survey/post",  data)
      .then(response => {
        setTimeout(() => {
          navigate('/');
      }, 2000)
        // Handle response
      }).catch((err) =>{
        console.log("errrrrrr"+err);
      })
  }

  const [rate, setRate] = useState()
  const [name, setName] = useState()
  const [comment, setComment] = useState()
  const [phone, setPhone] = useState()




  return (
    <section class="vh-125" style={{ backgroundColor: "#F3F5FF" }}>
      
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-md-9 col-lg-7 col-xl-5">
            <div
              class="card"
              style={{ borderRadius: " 15px", backgroundColor: "#F3F5FF" }}
            >
            
              <div class="card-body p-4 text-black">
                <div className="header">
                  <div className="title d-flex justify-content-center">
                    <img
                      src="./logi.png"
                      style={{ width: "50px" }}
                      st
                      alt=""
                      srcset=""
                    />
                    <span className="fs-3 fw-bold">Survey App</span>
                  </div>
                  <div className="head_form d-flex flex-column align-content-center">
                    <span className=" mx-auto mt-4 fw-bold">Review Form</span>
                    <p>
                      Give us Quick Review How the workshop and everything is
                      being to to Simply By filling Form Below
                    </p>
                  </div>
                </div>
                <form action="" onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="Name" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Name"
                      placeholder="Name"
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="Name" class="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Phone"
                      placeholder="Phone"
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                  <h6 className="mt-3">Rate </h6>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="1"
                      onChange={e => setRate(e.target.value)}
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Excellent
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="2"
                      onChange={e => setRate(e.target.value)}
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      Very Good
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="3"
                      onChange={e => setRate(e.target.value)}
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      Good
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="4"
                      onChange={e => setRate(e.target.value)}
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      poor
                    </label>
                  </div>
                  <div class="mb-3 mt-3">
                    <label for="Description" class="form-label">
                      Description
                    </label>
                    <textarea
                      class="form-control"
                      id="Description"
                      placeholder="Description"
                      rows="3"
                      onChange={e => setComment(e.target.value)}

                    ></textarea>
                  </div>
                  <div class="mb-3 mt-3">
                    {/* <a href="#" onClick={notify}> */}
                    <button
                      class="btn btn-primary mx-auto"
                      id="btnsubmit"
                      type="submit"
                      
                    >Sava Info</button>
                    {/* </a> */}
                 
                    <ToastContainer />
                    
                  </div>
                </form>

                <p className="w-75 mx-auto mt-5">
                  Its pleasure to mentor your we hope to see again and again, last but not list thank you for time and effort, see you again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewingPage;
