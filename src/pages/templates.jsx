import React from 'react';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';
import HeaderTwo from "@/layout/headers/header-2";
import Footer from "@/layout/footers/footer";
// import TemplateArea from '@/components/templates/template-area';
import { useGetAllTemplatesQuery } from '@/redux/features/template/templateApi';
import TemplatesArea from '@/components/templates/templates-area';

const TemplatesPage = () => {
  const { data: templates, isLoading, isError } = useGetAllTemplatesQuery();

  return (
    <Wrapper>
      <SEO pageTitle="Templates" />
      <HeaderTwo />
      <main>
        <TemplatesArea/>
      </main>
      <Footer />
    </Wrapper>
  );
};

export default TemplatesPage;
