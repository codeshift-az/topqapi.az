import { Link } from "react-router-dom";

// Constants
import { contactDetails } from "@/constants";

const Map = () => {
  return (
    <section className="flat-spacing-9">
      <div className="container">
        <div className="tf-grid-layout gap-0 lg-col-2">
          <div className="w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317859.6089702069!2d-0.075949!3d51.508112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349331f38dd%3A0xa8bf49dde1d56467!2sTower%20of%20London!5e0!3m2!1sen!2sus!4v1719221598456!5m2!1sen!2sus"
              width="100%"
              height="894"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="tf-content-left has-mt">
            <div className="sticky-top">
              <h5 className="mb_20">Visit Our Store</h5>
              <div className="mb_20">
                <p className="mb_15">
                  <strong>Address</strong>
                </p>
                <p>{contactDetails.address}</p>
              </div>

              <div className="mb_20">
                <p className="mb_15">
                  <strong>Phone</strong>
                </p>
                <p>{contactDetails.phone}</p>
              </div>

              <div className="mb_20">
                <p className="mb_15">
                  <strong>Email</strong>
                </p>
                <p>{contactDetails.email}</p>
              </div>

              <div className="mb_36">
                <p className="mb_15">
                  <strong>Open Time</strong>
                </p>
                <p className="mb_15">Our store has re-opened for shopping,</p>
                <p>exchange Every day 11am to 7pm</p>
              </div>

              <div>
                <ul className="tf-social-icon d-flex gap-20 style-default">
                  <li>
                    <Link
                      target="blank"
                      to={contactDetails.facebook}
                      className="box-icon link round social-facebook border-line-black">
                      <i className="icon fs-14 icon-fb"></i>
                    </Link>
                  </li>

                  <li>
                    <Link
                      target="blank"
                      to={contactDetails.x}
                      className="box-icon link round social-twiter border-line-black">
                      <i className="icon fs-12 icon-Icon-x"></i>
                    </Link>
                  </li>

                  <li>
                    <Link
                      target="blank"
                      to={contactDetails.instagram}
                      className="box-icon link round social-instagram border-line-black">
                      <i className="icon fs-14 icon-instagram"></i>
                    </Link>
                  </li>

                  <li>
                    <Link
                      target="blank"
                      to={contactDetails.tiktok}
                      className="box-icon link round social-tiktok border-line-black">
                      <i className="icon fs-14 icon-tiktok"></i>
                    </Link>
                  </li>

                  <li>
                    <Link
                      target="blank"
                      to={contactDetails.pinterest}
                      className="box-icon link round social-pinterest border-line-black">
                      <i className="icon fs-14 icon-pinterest-1"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Map;
