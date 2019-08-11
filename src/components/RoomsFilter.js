import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

//get all unique value
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  //get uniqe types
  let types = getUnique(rooms, "type");
  //add all
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/*Select Type*/}
        <div className="form-group">
          <label htmlfor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/*End Of Select Type*/}
      </form>
    </section>
  );
}
