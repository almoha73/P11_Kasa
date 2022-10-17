import React from "react";
import Card from "../../components/Card"

const Gallery = ({ data }) => {
  return (
    <div className="gallery">
      <Card data={data} />
    </div>
  );
};

export default Gallery;
