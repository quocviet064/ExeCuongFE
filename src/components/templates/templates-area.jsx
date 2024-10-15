import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Pagination from "@/ui/Pagination";
import PriceFilter from './template-filter/price-filter';
import AreaFilter from './template-filter/area-filter';
import LocationTypeFilter from './template-filter/location-type-filter';
import VibeFilter from './template-filter/vibe-filter';
import TemplateListItem from './templates-list-item';
import TemplatesTopLeft from './templates-top-left';
import TemplatesTopRight from './templates-top-right';
import ResetButton from './template-filter/reset-button';
import { useGetAllTemplatesQuery } from '@/redux/features/template/templateApi';
import TemplateItem from "./template-item";

const TemplatesArea = () => {
  const { data: all_templates, isLoading, isError } = useGetAllTemplatesQuery();
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [pageStart, setPageStart] = useState(0);
  const [countOfPage, setCountOfPage] = useState(12);
  const [currPage, setCurrPage] = useState(1);

  const { priceRange, areaRange, locationType, vibe } = useSelector((state) => state.filter);

  const templates = all_templates?.data || [];

  useEffect(() => {
    if (templates.length > 0) {
      const filtered = templates.filter(template => {
        const priceMatch = template.price >= priceRange.min && template.price <= priceRange.max;
        const areaMatch = template.area >= areaRange.min && template.area <= areaRange.max;
        const locationTypeMatch = !locationType || template.locationType === locationType;
        const vibeMatch = !vibe || template.vibe === vibe;
        return priceMatch && areaMatch && locationTypeMatch && vibeMatch;
      });
      setFilteredTemplates(filtered);
      setCurrPage(1);
    }
  }, [templates, priceRange, areaRange, locationType, vibe]);

  const paginatedData = (items, startPage, pageCount) => {
    setPageStart(startPage);
    setCountOfPage(pageCount);
  };

  // max price and area
  const maxPrice = templates.reduce((max, template) => Math.max(max, template.price), 0);
  const maxArea = templates.reduce((max, template) => Math.max(max, template.area), 0);

  const selectHandleFilter = (sort) => {
    // Implement sorting logic here
  };

  if (isLoading) return <div>Đang tải...</div>;
  if (isError) return <div>Có lỗi xảy ra khi tải dữ liệu</div>;

  return (
    <section className="tp-shop-area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="tp-shop-sidebar mr-10">
              <PriceFilter maxPrice={maxPrice} setCurrPage={setCurrPage} />
              <AreaFilter maxArea={maxArea} setCurrPage={setCurrPage} />
              <LocationTypeFilter setCurrPage={setCurrPage} />
              <VibeFilter setCurrPage={setCurrPage} />
              <ResetButton setCurrPage={setCurrPage} />
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="tp-shop-main-wrapper">
              <div className="tp-shop-top mb-45">
                <div className="row">
                  <div className="col-xl-6">
                    <TemplatesTopLeft
                      showing={filteredTemplates.slice(pageStart, pageStart + countOfPage).length}
                      total={filteredTemplates.length}
                    />
                  </div>
                  <div className="col-xl-6">
                    <TemplatesTopRight selectHandleFilter={selectHandleFilter} />
                  </div>
                </div>
              </div>
              {filteredTemplates.length === 0 && <h2>Không tìm thấy mẫu thiết kế nào</h2>}
              {filteredTemplates.length > 0 && (
                <div className="tp-shop-items-wrapper tp-shop-item-primary">
                  <div className="tab-content" id="productTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="grid-tab-pane"
                      role="tabpanel"
                      aria-labelledby="grid-tab"
                      tabIndex="0"
                    >
                      <div className="row">
                        {filteredTemplates
                          .slice(pageStart, pageStart + countOfPage)
                          .map((template) => (
                            <div
                              key={template._id}
                              className="col-xl-4 col-md-6 col-sm-6"
                            >
                              <TemplateItem template={template} />
                            </div>
                          ))}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="list-tab-pane"
                      role="tabpanel"
                      aria-labelledby="list-tab"
                      tabIndex="0"
                    >
                      <div className="tp-shop-list-wrapper tp-shop-item-primary mb-70">
                        <div className="row">
                          <div className="col-xl-12">
                            {filteredTemplates
                              .slice(pageStart, pageStart + countOfPage)
                              .map((template) => (
                                <TemplateListItem key={template._id} template={template} />
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {filteredTemplates.length > 0 && (
                <div className="tp-shop-pagination mt-20">
                  <div className="tp-pagination">
                    <Pagination
                      items={filteredTemplates}
                      countOfPage={12}
                      paginatedData={paginatedData}
                      currPage={currPage}
                      setCurrPage={setCurrPage}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplatesArea;