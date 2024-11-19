// Section.js
import React from 'react';
import Card from '../card/Card';

const Section = ({ title, items }) => {
  return (
    <div className="sectionfirst_left_one">
      <div className="sectionfirst_left_one_title">
        <label>{title}</label>
        <div className="row">
          {items.map((item, index) => (
            <Card key={index} imageSrc={item.imageSrc} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
