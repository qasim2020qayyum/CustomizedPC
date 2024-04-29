import { ApiFetchReq } from "./ApiReq";
import { Backend_url } from "./Beckend_url";

export const AddProductApi = async (data, header) => {
  return await ApiFetchReq("POST", `${Backend_url}/addproduct`, data, header);
}; 
export const userRegister = async (data, header) => {
  return await ApiFetchReq("POST", `${Backend_url}/userregister`, data, header);
};
export const showProduct = async () => {
  return await ApiFetchReq("GET", `${Backend_url}/allproducts`);
};
export const Adminjeans = async () => {
  return await ApiFetchReq("GET", `${Backend_url}/jeans`);
};
export const Adminshirts = async () => {
  return await ApiFetchReq("GET", `${Backend_url}/shirts`);
};
export const Adminjackets = async () => {
  return await ApiFetchReq("GET", `${Backend_url}/jackets`);
};
export const Admincosmetics = async () => {
  return await ApiFetchReq("GET", `${Backend_url}/cosmetics`);
};
export const Adminperfumes = async () => {
  return await ApiFetchReq("GET", `${Backend_url}/perfumes`);
};
export const Adminfootwares = async () => {
  return await ApiFetchReq("GET", `${Backend_url}/footwares`);
};
export const NewArivals = async () => {
  return await ApiFetchReq("GET", `${Backend_url}/newarival`);
};
export const NewSale = async () => {
  return await ApiFetchReq("GET", `${Backend_url}/sale`);
};
export const TotalProduct = async () => {
  return await ApiFetchReq("GET", `${Backend_url}/countproduct`);
};
export const ViewApi = async (id) => {
  return await ApiFetchReq("GET", `${Backend_url}/singleproduct/${id}`);
};
export const UpdateApi = async (id) => {
  return await ApiFetchReq("GET", `${Backend_url}/singleproduct/${id}`);
};

export const UpdateOrder = async (id) => {
  return await ApiFetchReq("GET", `${Backend_url}/singleorder/${id}`);
};
export const UpdateUser = async (id) => {
  return await ApiFetchReq("GET", `${Backend_url}/singleuser/${id}`);
};

export const update = async (id, data, header) => {
  return await ApiFetchReq(
    "PUT",
    `${Backend_url}/updateproduct/${id}`, 
    data,
    header
  );
};
export const updateOrderStatus = async (id, data, header) => {
  return await ApiFetchReq(
    "PUT",
    `${Backend_url}/updateorder/${id}`,
    data,
    header
  );
};

export const remove = async (id) => {
  return await ApiFetchReq("DELETE", `${Backend_url}/deleteproduct/${id}`, {});
};
//User Delete
export const removeUser = async (id) => {
  return await ApiFetchReq("DELETE", `${Backend_url}/deleteuser/${id}`, {});
};

// export const delet = async () => {
//   return await ApiFetchReq("DELETE", `${Backend_url}/deleteproduct/:id`);
// };
