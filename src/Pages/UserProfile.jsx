import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../Styles/UserProfile.css";

function UserProfile() {

  return (
    <Fragment>
    <main className="user-profile-page">

    <header className="header"><nav><Navbar /></nav></header>

    <aside className="sidebar">

    </aside>
    
    <section className="content">
    <h1 className="page-heading">User Profile</h1>

    </section>
    <Footer />
    </main> 
    </Fragment>
  );
}

export default UserProfile;