import { apiSlice } from "@/redux/api/apiSlice";

export const templateApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // get all templates
    getAllTemplates: builder.query({
      query: () => `http://localhost:7000/api/template/all`,
      providesTags: ["Templates"],
      keepUnusedDataFor: 600,
    }),
    // get single template
    getTemplateById: builder.query({
      query: (id) => `http://localhost:7000/api/template/single-template/${id}`,
      providesTags: (result, error, id) => [{ type: "Template", id }],
      keepUnusedDataFor: 600,
    }),
  }),
});

export const { useGetAllTemplatesQuery, useGetTemplateByIdQuery } = templateApi;
