export const GETDATA = (payload) => {
  return {
    type: "Get_data",
    payload: payload,
  };
};

export const ADDTOCART = (Payload) => {
  return {
    type: "ADDTOCART",
    Payload: Payload,
  };
};
export const BUYNOW = (Payload) => {
  return {
    type: "BUYNOW",
    Payload: Payload,
  };
};
export const CLEANUP = (Payload) => {
  return {
    type: "CLEANUP",
    
    Payload: Payload,
  };
};