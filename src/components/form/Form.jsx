import {
  Alert,
  Box,
  Button,
  Card,
  FormControl,
  TextField,
} from "@mui/material";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { getOne } from "../../store/slices/crud";
import { useDispatch, useSelector } from "react-redux";
const init = {
  name: "",
  price: "",
  category: "",
  descr: "",
  image: "",
};

const Form = ({ isEdit }) => {
  const navigate = useNavigate();
  const productCollectionRef = collection(db, "data");
  const dispatch = useDispatch();
  const { oneProduct } = useSelector((state) => state.crud);
  const [inputValues, setInputValues] = useState(init);
  const [error, setError] = useState("");
  function handleInp(e) {
    if (e.target.name === "price") {
      let obj = { ...inputValues, [e.target.name]: Number(e.target.value) };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  }

  async function addProduct() {
    await addDoc(productCollectionRef, inputValues);
    // try {
    //   await addDoc(productCollectionRef, inputValues);
    // } catch (error) {
    //   setError(error.message);
    // }
  }

  //??? EDITPRODUCT

  async function getOneProduct(id) {
    let docRef = doc(db, "data", id);
    let data = await getDoc(docRef);
    data = { ...data.data() };
    dispatch(getOne(data));
  }
  const { id } = useParams();
  useEffect(() => {
    if (isEdit) {
      getOneProduct(id);
    }
  },[]);

  useEffect(() => {
    if (isEdit && oneProduct) {
      setInputValues(oneProduct);
    }
  }, [oneProduct]);

  async function editProduct() {
    let docRef = doc(db, "data", id);
    await updateDoc(docRef, inputValues);
    navigate("/menu");
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: "40px 0" }}>
      <FormControl>
        {error && <Alert severity="error">{error}</Alert>}
        <Card
          sx={{
            p: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "600px",
          }}
        >
          <TextField
            onChange={handleInp}
            id="outlined-basic"
            name="name"
            label="Name"
            value={inputValues.name}
            variant="outlined"
          />
          <TextField
            onChange={handleInp}
            id="outlined-basic"
            name="price"
            value={inputValues.price}
            label="Price"
            variant="outlined"
          />
          <TextField
            onChange={handleInp}
            id="outlined-basic"
            name="category"
            value={inputValues.category}
            label="Category"
            variant="outlined"
          />
          <TextField
            onChange={handleInp}
            id="outlined-basic"
            name="descr"
            value={inputValues.descr}
            label="Description"
            variant="outlined"
          />
          <TextField
            onChange={handleInp}
            id="outlined-basic"
            name="image"
            value={inputValues.image}
            label="Image"
            variant="outlined"
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          {isEdit ? (
            <Button onClick={editProduct} variant="contained">
              Edit
            </Button>
          ) : (
            <Button onClick={addProduct} variant="contained">
              Create
            </Button>
          )}
        </Card>
      </FormControl>
    </Box>
  );
};

export default Form;
