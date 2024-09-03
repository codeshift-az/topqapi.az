import React, { useState } from "react";

const FormContact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const [validationMessages, setValidateMessages] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidateMessages({
      name: "",
      email: "",
    });
    console.log(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                  type="text"
                  name="name"
                  value={data.name}
                  id="name"
                  required
                  placeholder="Name *"
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.name ? "is-invalid" : ""
                  }`}
                />
                <label className="invalid-feedback">
                  {validationMessages.email}
                </label>
              </fieldset>

              <fieldset className="w-100">
                <input
                  type="email"
                  value={data.email}
                  name="email"
                  id="email"
                  required
                  placeholder="Email *"
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.email ? "is-invalid" : ""
                  }`}
                />
                <label className="invalid-feedback">
                  {validationMessages.name}
                </label>
              </fieldset>
            </div>
            <div className="mb_15">
              <textarea
                placeholder="Message"
                name="message"
                id="message"
                required
                cols={"30" as any}
                rows={"10" as any}></textarea>
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

export default FormContact;
