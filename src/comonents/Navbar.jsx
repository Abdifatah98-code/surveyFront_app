import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./logi.png" style={{ width: "50px" }} st alt="" srcset="" />
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
              <a class="nav-link active fs-4 fw-bold" aria-current="page" href="#">
                Survey App
              </a>
            </li>
          </ul>
          <div className="buttons d-flex  gap-2 ">
            <span class="navbar-text ">
              <button
                className="btn btn-info text-white"
                style={{ backgroundColor: "#4382EC", border: "none" }}
              >
                Create Workshop
              </button>
            </span>
            <span class="navbar-text">
              <button
                className="btn btn-info text-white px-5"
                style={{ backgroundColor: "#F19237", border: "none" }}
              >
                Invite
              </button>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
