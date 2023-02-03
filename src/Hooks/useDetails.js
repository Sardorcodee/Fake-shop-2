import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
 
function useDetails() {
  const [Products, setProducts] = useState([]);
  const id = useParams().id;

   useEffect(() => {
  (async function data() {
    try {
      let res = await axios.get(`/products/${id}`);
      if (res.status === 200) setProducts(res.data);
    } catch (error) {
      toast(error.response.data.error);
    }
  })();},[]);
  return [Products];
}

export default useDetails;
