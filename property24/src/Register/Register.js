import React from "react"

function Register() {
    return (
        <div className="container">
            <br></br>
            <form>
                <h3 className="center blue-text">Sign Up</h3>

                <div className="form-group b">
                    <label><h6 className="black-text"><b>Full Name</b></h6></label>
                    <input type="text" className="form-control" placeholder="Perfect Thabiso" />
                </div>

                <div className="form-group">
                    <label><h6 className="black-text"><b>Last Name</b></h6></label>
                    <input type="text" className="form-control" placeholder="Nhlapo" />
                </div>

                <div className="form-group">
                    <label><h6 className="black-text"><b>Email Address</b></h6></label>
                    <input type="email" className="form-control" placeholder="maphoskho@gmail.com" />
                </div>

                <div className="form-group">
                    <label><h6 className="black-text"><b>Password</b></h6></label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="!#">sign in?</a>
                </p>
            </form>
        </div>
    );
}

export default Register