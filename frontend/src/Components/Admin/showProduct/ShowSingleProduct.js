import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ViewApi } from "../../../../../client/src/Components/Api/Apicall";
const ShowSingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const userProfile = async () => {
    const response = await ViewApi(id);
    console.log(id);
    console.log(response.data);
    setProduct(response.data);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const auth = sessionStorage.getItem("Admintoken");
    if (!auth) {
      navigate("/login");
    }
    userProfile();
  }, []);

  return <div>ShowSingleProduct</div>;
};

export default ShowSingleProduct;
