import axios from "axios"
import { useState } from "react"
import Modal from "./Model";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from 'uuid';
import {Link} from "react-router-dom"

function Navbar() {
  const notify = () => toast("Wow so easy !");



  const handleSubmit = async e => {
    // Prevent the default submit and page reload
    e.preventDefault()

    // Handle validations

    let data={
      name,
      participant,
      startDate,
      endDate,
      description
    }
   

    console.log(data);
    await axios
      .post("http://localhost:5000/api/workshope/post",  data)
      .then(response => {
        console.log(response)
        // Handle response
      }).catch((err) =>{
        console.log("errrrrrr"+err);
      })
  }

  const [name, setName] = useState()
  const [participant, setPartcipient] = useState()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [description, setDescription] = useState()
  const refresh = () => window.location.reload(true)

  return (
 

    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="./logi.png"
              style={{ width: "50px" }}
              st
              alt=""
              srcset=""
            />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active fs-4 fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Survey App
                </a>
              </li>
            </ul>

            <div className="buttons d-flex  gap-2 ">
              <span class="navbar-text ">
                <button
                  className="btn btn-info text-white "
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ backgroundColor: "#4382EC", border: "none" }}
                >
                  Create Workshop
                </button>
              </span>
              <span class="navbar-text">
                <div class="dropdown dropstart">
                  <Link
                   className="btn btn-secondary text-white dropdown-toggle"
                   to="/invite"
                   aria-expanded="false"
                   style={{ backgroundColor: "#F19237", border: "none" }}
                  >
                  

                   
      
                    Invite People
                    </Link>

                </div>
              </span>
            </div>
          </div>
        </div>
      </nav>





      {/* create work shop modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Create Workshop
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="" method="post" onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="name"
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="particepnts" class="form-label">
                    Number Of Participents
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="partcipient"
                    placeholder="partcipient"
                    onChange={e => setPartcipient(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="start_Date" class="form-label">
                    Start Date
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="start_date"
                    placeholder="date"
                    onChange={e => setStartDate(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="end_Date" class="form-label">
                    End Date
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="end_date"
                    placeholder="date"
                    onChange={e => setEndDate(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                  Description
                  </label>
                  <textarea
                    class="form-control"
                    id="desc"
                    rows="3"
                    onChange={e => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary" onClick={refresh}>
                Save changes
              </button>
            </div>
              </form>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
