import React, { useEffect, useState } from "react";
import axios from "axios";
import "./assets/MainSec.scss";
import ProdutCard from "./ProdutCard";
function MainSec() {
  const [items, setitems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ItemsPerPage] = useState(5);
  // fetch data using Axios in useEffect
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          console.log(res.data);
          setitems(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);
  const indexOfLastItem = currentPage * ItemsPerPage;
  console.log(indexOfLastItem);
  const indexOfFirstPage = indexOfLastItem - ItemsPerPage;
  console.log(indexOfFirstPage);
  const currentItems = items.slice(indexOfFirstPage, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //   const [inputVal, setInputValue] = useState("");
  //   const [list, setList] = useState([]);
  //   const [editIndex, setEditIndex] = useState(null);
  //   const addItem = () => {
  //     const newArr = [...list, inputVal];
  //     console.log(newArr);
  //     setList(newArr);
  //     setInputValue("");
  //   };

  //   const editToggel = (index) => {
  //     console.log("edt click");
  //     setEditIndex(index);
  //   };
  //  const saveEdit = (index) => {
  //   const editIndexValue = [...list]
  //   editIndexValue[index] = inputVal
  //   setList(editIndexValue)
  //   setEditIndex(null)
  //   setInputValue('')
  //  }
  //   const handleRemove = (index) => {
  //     const updateIndex = [...list];
  //     updateIndex.splice(index, 1);
  //     setList(updateIndex);
  //   };
  return (
    <div className="main__sec">
      
      <div className="row" style={{ display: "flex" }}>
        {currentItems.map((item, i) => {
          if (i < 5)
            return (
              <ProdutCard
                title={item.title}
                image={item.image}
                price={item.price}
                category={item.category}
              />
            );
        })}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(items.length / ItemsPerPage) }).map(
          (item, i) => {
            return (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? "active" : "paginate_button"}
              >
                {i + 1}
              </button>
            );
          }
        )}
      </div>
    </div>
    // <div className="main__sec">
    //   <input
    //     type="text"
    //     value={inputVal}
    //     onChange={(e) => setInputValue(e.target.value)}
    //   />
    //   <button onClick={addItem} className="btn btn-light">
    //     Submit
    //   </button>
    //   <div className="add__item">
    //     <ul>
    //       {list.map((item, index) => {
    //         return (
    //           <li key={index}>
    //             {editIndex === index ? (
    //               <>
    //                 <input
    //                   type="text"
    //                   value={inputVal}
    //                   onChange={(e) => setInputValue(e.target.value)}
    //                 />
    //                 <button onClick={()=>saveEdit(index)} className="btn btn-light">
    //                   save
    //                 </button>
    //               </>
    //             ) : (
    //               <>
    //                 {item}{" "}
    //                 <button onClick={() => editToggel(index)}>Edit</button>{" "}
    //                 <button onClick={() => handleRemove(index)}>X</button>
    //               </>
    //             )}
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </div>
  );
}

export default MainSec;
