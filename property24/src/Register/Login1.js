import React from "react"

function logincomponent(){
    return(
        <div className="container">
        <br></br>
            <form>
                <h3 className="center blue-text">Sign In</h3>

                <div className="form-group">
                    <label><h6 className="black-text"><b>Email address</b></h6></label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label><h6 className="black-text"><b>Password</b></h6></label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="!#">password?</a>
                </p>
            </form>
        </div>
    );
}

export default logincomponent