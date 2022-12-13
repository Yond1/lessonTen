import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "./../../redux/action/index";

export const Form = () => {
  const dispatch = useDispatch();
  const { list, listFilters } = useSelector((state) => state.ListReducer);
  const { addAction, editAction, removeAction, filterList } =
    actions.ListActions;

  const [itemTitle, setItemTitle] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editItemID, setEditItemId] = useState("");
  const [search, setSearch] = useState("");

  const titleChange = (e) => {
    setItemTitle((prev) => (prev = e.target.value));
  };
  const priceChange = (e) => {
    setItemPrice((prev) => (prev = e.target.value));
  };

  const editItemHandler = (id) => {
    const editItem = list.find((item) => item.id === id);
    setItemPrice((prev) => (prev = editItem.price));
    setItemTitle((prev) => (prev = editItem.title));
    setIsEdit(true);
    setEditItemId((prev) => (prev = id));
  };

  const editItemAction = () => {
    dispatch(
      editAction({
        title: itemTitle,
        price: itemPrice,
        id: editItemID,
      })
    );
    setIsEdit(false);
    setEditItemId("");
    setItemPrice("");
    setItemTitle("");
  };

  const addItemHandler = () => {
    dispatch(
      addAction({
        id: nanoid(),
        title: itemTitle,
        price: itemPrice,
      })
    );
    setItemPrice("");
    setItemTitle("");
  };

  const removeItemHandler = (id) => {
    dispatch(removeAction(id));
  };

  useEffect(() => {
    dispatch(filterList(search));
  }, [search, list]);

  return (
    <>
      <div style={{ marginBottom: 40 }}>
        <label htmlFor="search">Seacrh</label>
        <input
          value={search}
          onChange={(e) => {
            setSearch((prev) => (prev = e.target.value));
          }}
          name="search"
        />
      </div>
      <input
        value={itemTitle}
        onChange={(e) => {
          titleChange(e);
        }}
      />
      <input
        value={itemPrice}
        onChange={(e) => {
          priceChange(e);
        }}
      />
      <button onClick={!isEdit ? addItemHandler : editItemAction}>
        {!isEdit ? "Add Item" : "Edit Item"}
      </button>
      <section>
        <ul>
          {listFilters.map((item) => {
            return (
              <li style={{ marginTop: 10 }} key={item.id}>
                <span>
                  {item.title} - {item.price}$
                </span>
                <button
                  style={{ marginLeft: 40 }}
                  onClick={() => {
                    editItemHandler(item.id);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => removeItemHandler(item.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
