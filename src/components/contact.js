import React from "react";
import "./styles.scss";
import { IconContext } from "react-icons";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  render() {
    const { status } = this.state;
    return (
      <div className="contact-container">
        <div className="bg-left">
          <img src={"./images/bg-2.png"} alt="flower" />
        </div>
        <div className="row text-center">
          <div className="col-md-12">
            <div className="lavender-bunch-img"></div>
            <p className="heading-1 heading-text inline-block">Contact me</p>
          </div>
          <div className="col-md-7 mx-auto">
            <p>
              You liked my profile... I’ll be happy to hear from you. Or you
              didn’t like the profile... <br />
              Don’t hesitate to let me know what went wrong. I’ll be happy to
              receive any kind of feedback.
            </p>
            <div className="blue-patch">
              <img src={"./images/blue-bg.png"} alt="bg" />
            </div>
          </div>
        </div>
        <form
          className="form-container row"
          onSubmit={this.submitForm}
          action="https://formspree.io/xbjzzlvk"
          method="POST"
        >
          <div className="col-md-5 mx-auto">
            <div className="card-body p-3">
              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <IconContext.Provider
                        value={{ className: "contact-icon" }}
                      >
                        <FaUser />
                      </IconContext.Provider>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <IconContext.Provider
                        value={{ className: "contact-icon" }}
                      >
                        <FaEnvelope />
                      </IconContext.Provider>
                    </div>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="johndoe@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <IconContext.Provider
                        value={{ className: "contact-icon" }}
                      >
                        <FaComment />
                      </IconContext.Provider>
                    </div>
                  </div>
                  <textarea
                    className="form-control"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
              </div>

              <div className="text-center">
                {status === "SUCCESS" ? (
                  <p>Thanks!</p>
                ) : (
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-info btn-block rounded-0 py-2"
                  />
                )}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
              </div>
            </div>
          </div>
        </form>
        <div className="thank-you-img text-center">
          <img src={"./images/thankyou-circle.png"} alt="thankyou" />
          <p className="thank-you-text">Thank You</p>
        </div>
        <div className="bg-right">
          <img src={"./images/bg-2.png"} alt="flower" />
        </div>
      </div>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
