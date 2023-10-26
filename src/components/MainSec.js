import React, { useEffect, useState } from "react";
import axios from "axios";
import "./assets/MainSec.scss";
import ProdutCard from "./ProdutCard";
import { useHistory } from "react-router-dom";
function MainSec() {
  const history = useHistory()
  const [items, setitems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ItemsPerPage] = useState(5);
  // const [useId, setUserId] = useState("")
  // fetch data using Axios in useEffect
  useEffect(() => {
    const fetchData = async () => {
    await  axios
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
  const onclickView = (id, category, title , image, price, description, rating) =>{
    history.push(`/dashboard/viewproduct/${id}/${category}/${title}/${encodeURIComponent(image)}/${price}/${description}/${rating}`)
  }
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
              key={i}
                title={item.category}
                image={item.image}
                price={item.price}
                category={item.category}
                onClickView={()=>onclickView(item.id, item.category, item.title, item.image, item.price, item.description, item.rating.rate)}
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
