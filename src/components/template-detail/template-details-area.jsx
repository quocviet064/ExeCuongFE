import React from "react";
import { useDispatch } from "react-redux";
import TemplateDetailsWrapper from "./template-details-wrapper";

const TemplateDetailsArea = ({ templateItem }) => {
  const dispatch = useDispatch();

  return (
    <section className="tp-template-details-area">
      <div className="tp-template-details-top pb-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              {/* template-details-wrapper start */}
              <TemplateDetailsWrapper templateItem={templateItem} />
              {/* template-details-wrapper end */}
            </div>
          </div>
        </div>
      </div>

      {/* related templates start
      <section className="tp-related-template pt-95 pb-50">
        <div className="container">
          <div className="row">
            <div className="tp-section-title-wrapper-6 text-center mb-40">
              <span className="tp-section-title-pre-6">Next day Templates</span>
              <h3 className="tp-section-title-6">Related Templates</h3>
            </div>
          </div>
          <div className="row">
            <RelatedTemplates id={templateItem._id} />
          </div>
        </div>
      </section> */}
      {/* related templates end */}
    </section>
  );
};

export default TemplateDetailsArea;
