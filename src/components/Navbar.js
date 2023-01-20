import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar bg-body-secondary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 d-inline-flex p-1 fs-3">
          {" "}
          <div class="bg-primary rounded p-2 m-2">
            <img
              src={require("../logo-white.png")}
              alt="Logo"
              width="34"
              height="34"
              class="d-inline-block align-text-top"
            />
          </div>{" "}
          <p class="d-inline-flex align-items-center">
            The <em>"Quote"</em> Machine
          </p>
        </span>
      </div>
    </nav>
  );
}
