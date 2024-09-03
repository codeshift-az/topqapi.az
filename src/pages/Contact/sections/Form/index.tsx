import React, { useState } from "react";

const ContactForm = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [validationMessages, setValidateMessages] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValidateMessages({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    });

    console.log(data);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="bg_grey-7 flat-spacing-9">
      <div className="container">
        <div className="flat-title">
          <span className="title">Get in Touch</span>
          <p className="sub-title text_black-2">
            If you’ve got great products your making or looking to work with us
            then drop us a line.
          </p>
        </div>

        <div>
          <form
            className="mw-705 mx-auto text-center form-contact"
            onSubmit={handleSubmit}>
            <div className="d-flex gap-15 mb_15">
              <fieldset className="w-100">
                <input
                  required
                  type="text"
                  name="first_name"
                  value={data.first_name}
                  placeholder="First Name *"
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.first_name ? "is-invalid" : ""
                  }`}
                />

                <label className="invalid-feedback">
                  {validationMessages.first_name}
                </label>
              </fieldset>

              <fieldset className="w-100">
                <input
                  required
                  type="email"
                  name="last_name"
                  value={data.last_name}
                  placeholder="Last Name *"
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.last_name ? "is-invalid" : ""
                  }`}
                />

                <label className="invalid-feedback">
                  {validationMessages.last_name}
                </label>
              </fieldset>
            </div>

            <div className="d-flex gap-15 mb_15">
              <fieldset className="w-100">
                <input
                  required
                  type="text"
                  name="email"
                  value={data.email}
                  placeholder="Email *"
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.email ? "is-invalid" : ""
                  }`}
                />

                <label className="invalid-feedback">
                  {validationMessages.email}
                </label>
              </fieldset>

              <fieldset className="w-100">
                <input
                  required
                  type="text"
                  name="phone"
                  value={data.phone}
                  placeholder="Phone *"
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.phone ? "is-invalid" : ""
                  }`}
                />

                <label className="invalid-feedback">
                  {validationMessages.phone}
                </label>
              </fieldset>
            </div>

            <div className="mb_15">
              <textarea
                required
                cols={30}
                rows={10}
                name="message"
                value={data.message}
                onChange={handleChange}
                placeholder="Message"></textarea>
            </div>

            <div className="send-wrap">
              <button
                type="submit"
                className="tf-btn radius-3 btn-fill animate-hover-btn justify-content-center">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
