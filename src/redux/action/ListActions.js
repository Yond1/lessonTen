import { CONSTANTS } from "../constants";

const { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, FILTER_LIST } = CONSTANTS;

export const ListActions = {
  addAction: (payload) => ({
    type: ADD_ITEM,
    payload,
  }),
  removeAction: (payload) => ({
    type: REMOVE_ITEM,
    payload,
  }),
  editAction: (payload) => ({
    type: EDIT_ITEM,
    payload,
  }),
  filterList: (payload) => ({
    type: FILTER_LIST,
    payload,
  }),
};
