import React from 'react';
import Link from 'next/link';

const TemplateDetailsBreadcrumb = ({ name, locationType }) => {
  return (
    <section className="breadcrumb__area pt-100 pb-15">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <div className="breadcrumb__list">
                <span><Link href="/">Home</Link></span>
                <span><Link href="/templates">Templates</Link></span>
                <span>{locationType}</span>
                <span>{name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateDetailsBreadcrumb;
