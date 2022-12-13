import { CONSTANTS } from "./../constants/index";

const { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, FILTER_LIST } = CONSTANTS;

const initialState = {
  list: [
    { id: "73lwXQUCHoa7iiJNbx1FG", title: "iphone 12", price: "23323" },
    { id: "aLvz5jl9bUfvhUlHjBVsr", title: "samsung", price: "3323" },
    { id: "trTgeFWZbSrv8dNRH8eK5", title: "nokia", price: "33323" },
  ],
  listFilters: [],
};

export const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, list: [...state.list, action.payload] };
    case REMOVE_ITEM:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    case EDIT_ITEM:
      return {
        ...state,
        list: [
          ...state.list.map((item) => {
            if (item.id === action.payload.id) {
              return action.payload;
            }
            return item;
          }),
        ],
      };
    case FILTER_LIST:
      return {
        ...state,
        listFilters: [
          ...state.list.filter(({ title }) => title.includes(action.payload)),
        ],
      };
    default:
      return state;
  }
};
