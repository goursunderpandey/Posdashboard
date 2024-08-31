
import React from 'react';

const Header = ({ onToggleSidebar }) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <h3>KrishnaPos</h3>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto  ">

          </ul>

          <button className="btn btn-outline-primary m-1"  > Login   </button>
          <button className="btn btn-outline-primary "    > Register   </button>

        </div>
      </div>
    </nav>
  );
};

export default Header;