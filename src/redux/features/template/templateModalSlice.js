import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  templateItem: null,
  isModalOpen: false,
};

export const templateModalSlice = createSlice({
  name: "templateModal",
  initialState,
  reducers: {
    handleTemplateModal: (state, { payload }) => {
      state.templateItem = payload;
      state.isModalOpen = true;
    },
    handleModalClose: (state) => {
      state.isModalOpen = false;
      state.templateItem = null;
    }
  },
});

export const { handleTemplateModal, handleModalClose } = templateModalSlice.actions;
export default templateModalSlice.reducer;
