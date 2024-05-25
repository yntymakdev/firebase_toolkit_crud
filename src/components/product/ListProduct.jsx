import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../card/CardProduct";
import { Typography } from "@mui/material";
import { db } from "../../firebase";
import { getProduct } from "../../store/slices/crud";
// import { readProduct } from "../../store/slices/crud";

const ListProduct = () => {
  const dispatch = useDispatch();
  const productCollectionRef = collection(db, "data");

  // async function getProduct() {
  //   let data = await getDocs(productCollectionRef);
  //   data = data.docs.map((doc) => doc.data());
  //   dispatch(readProduct(data));
  // }

  useEffect(() => {
    readProduct();
  }, []);
  async function readProduct() {
    let data = await getDocs(productCollectionRef);
    data = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch(getProduct(data));
  }
  async function deleteProduct(id) {
    const docRef = doc(db, "data", id);
    await deleteDoc(docRef);
    readProduct();
  }
  const { products } = useSelector((state) => state.crud);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        padding: "60px 0",
      }}
    >
      {products.length > 0 ? (
        products.map((el, index) => (
          <CardProduct deleteProduct={deleteProduct} el={el} key={index} />
        ))
      ) : (
        <Typography>Loading...</Typography>
      )}
    </div>
  );
};

export default ListProduct;
