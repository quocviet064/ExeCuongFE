import React from 'react';
// internal
import SEO from '@/components/seo';
import HeaderTwo from '@/layout/headers/header-2';
import Footer from '@/layout/footers/footer';
import Wrapper from '@/layout/wrapper';
import ErrorMsg from '@/components/common/error-msg';
import { useGetTemplateByIdQuery } from '@/redux/features/template/templateApi';
import TemplateDetailsBreadcrumb from '@/components/breadcrumb/template-details-breadcrumb';
import TemplateDetailsArea from '@/components/template-detail/template-details-area';
import TemplateDetailsLoader from '@/components/loader/template-details-loader';

const TemplateDetailsPage = ({ query }) => {
  const { data: template, isLoading, isError } = useGetTemplateByIdQuery(query.id);
  // decide what to render
  let content = null;
  if (isLoading) {
    content = <TemplateDetailsLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && template) {
    content = (
      <>
        <TemplateDetailsBreadcrumb name={template.name} locationType={template.locationType} />
        <TemplateDetailsArea templateItem={template} />
      </>
    );
  }
  return (
    <Wrapper>
      <SEO pageTitle="Template Details" />
      <HeaderTwo style_2={true} />
      {content}
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default TemplateDetailsPage;

export const getServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: {
      query,
    },
  };
};
