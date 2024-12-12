import "../assets/styles/MenuList/menuList.css";
import { useState } from "react";

function MenuList(props) {
  const [data, setData] = useState(props.obj);
  const [expandedIndices, setExpandedIndices] = useState([]);

  function handleReadLessMore(index) {
    setExpandedIndices((previousExpandedIndices) => {
      const isCurrentlyExpanded = previousExpandedIndices.includes(index);
      if (isCurrentlyExpanded) {
        return previousExpandedIndices.filter((i) => i !== index);
      } else {
        return [...previousExpandedIndices, index];
      }
    });
  }

  function handleNotInterested(index) {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  }
  return (
    <>
      <ul>
        {data.map((el, index) => (
          <div key={index} className="listItem">
            <div className="imgContainer">
              <img
                src={new URL(el.imageDestination, import.meta.url).href}
                alt=""
              />
              <div className="priceContainer">${el.price}</div>
            </div>
            <h3>{el.name}</h3>
            <p>
              {expandedIndices.includes(index)
                ? el.description
                : `${el.description.substring(0, 200)}...`}
              <span onClick={() => handleReadLessMore(index)}>
                {expandedIndices.includes(index) ? (
                  " Read Less"
                ) : (
                  <>
                    <br />
                    Read More
                  </>
                )}
              </span>
            </p>
            <button onClick={() => handleNotInterested(index)}>
              Not Interested
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}
export default MenuList;
