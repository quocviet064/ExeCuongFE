import React from 'react';
import ContentLoader from 'react-content-loader';

const TemplateDetailsLoader = ({ loading }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <ContentLoader
            speed={2}
            width={550}
            height={550}
            viewBox="0 0 550 550"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="3" y="3" rx="3" ry="3" width="550" height="550" />
          </ContentLoader>
        </div>
        <div className="col-xl-6 col-lg-6">
          <ContentLoader
            speed={2}
            width={400}
            height={150}
            viewBox="0 0 400 150"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="10" rx="3" ry="3" width="300" height="20" />
            <rect x="0" y="50" rx="3" ry="3" width="250" height="20" />
            <rect x="0" y="90" rx="3" ry="3" width="350" height="20" />
            <rect x="0" y="130" rx="3" ry="3" width="200" height="20" />
          </ContentLoader>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetailsLoader;
