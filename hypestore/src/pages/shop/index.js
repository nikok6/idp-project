import React, { Fragment, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MultipleSelect from "../../Commons/MultipleSelect";
import MultipleSelectTwo from "../../Commons/MultipleSelectTwo"
import MediaCard from "../../Commons/MediaCard";
import Grid from "@mui/material/Grid";

export const Test = () => {
const [filter , setFilter] = useState({
    name: '',
    price: '',
    type: '',
})

  return (
    <Fragment>

      <div className="FilterContainer">
        <div className="DropdownContainer">
        <MultipleSelect filter = {filter} setFilter = {setFilter} field={'name'}/>
        <MultipleSelectTwo filter = {filter} setFilter = {setFilter} field={'type'}/>
        {console.log(filter)}
        </div>
      </div>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {Array.from(Array(6)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <MediaCard/>
    </Grid>
  ))}
</Grid>

      <div>Ngentot</div>
    </Fragment>
  );
};
