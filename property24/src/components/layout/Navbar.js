import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import logo from './logo-img/logo.svg';


const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
      <Link to="/Home" className="brand-logo"><img src={logo} style={{position: 'fixed', left: 30}} alt="Property24"></img></Link>

        <ul className="right">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Properties">Properties</Link></li>
                    <li><Link to="/Developement">Developement</Link></li>
                    <li><Link to="/Commercial">Commercial</Link></li>
                    <li><Link to="/Advice">Advice</Link></li>
                    <li><Link to="/Listprivately">Listprivately</Link></li>
                    <li><Link to="/bell">bell</Link></li>

                </ul>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
