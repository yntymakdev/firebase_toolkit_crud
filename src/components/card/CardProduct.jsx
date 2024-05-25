import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CardProduct = ({ el, deleteProduct }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 350, height: "100%" }}>
      <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography variant="h4" color="text.secondary">
          {el.name}
        </Typography>
      </CardContent>
      <CardMedia sx={{ height: 280 }} image={el.image} title="green iquana" />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-around",
          p: "50px 0 0 0",
        }}
      >
        <Typography gutterBottom variant="h6" component="div">
          ${el.price}
        </Typography>
        <Button
          sx={{ borderRadios: 15 }}
          variant="contained
        "
          size="small"
        >

          Buy
        </Button>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-around", p: "20px 0" }}
      >
        <Button
          onClick={() => navigate(`/edit/${el.id}`)}
          sx={{ borderRadius: 15 }}
          variant="contained"
          color="success"
          size="small"
        >
          {" "}
          Edit
        </Button>
        <Button
          onClick={() => deleteProduct(el.id)}
          sx={{ borderRadius: 15 }}
          variant="contained"
          color="error"
          size="small"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardProduct;
