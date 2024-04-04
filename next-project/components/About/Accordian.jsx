import { useState } from 'react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index ) => {
    
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className="accordion flex flex-col ">
      {items.map((item, index) => (
        <div key={index} className="accordion-item ">
          <div className="accordion-header  bg-const-gray hover:bg-const-btn hover:text-white transition-all ease-in-out" onClick={() => toggleAccordion(index)}>
            <h3>{item.title}</h3>
            <span>{openIndex === index ? '-' : '+'}</span>
          </div>
          <div
            className={`accordion-content ${openIndex === index ? 'open' : ''}`}
            style={{ maxHeight: openIndex === index ? '1000px' : '0' }}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
      <style jsx>{`
        .accordion {
    


        }
        .accordion-item {
          padding:4px;
        }
        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          cursor: pointer;
        }
        .accordion-content {
          overflow: hidden;
          transition: max-height 0.5s ease-in-out;
          font-size: 13px;
          margin-top: 10px;
        }
      
      `}</style>
    </div>
  );
};

export default Accordion;
