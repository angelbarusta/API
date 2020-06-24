// export const setLista = (payload) => ({
//   type: "SET_LIST", // cuidado con los nombres al llamr en los reducers debe ser exactam,ente los mismo
//   payload,
// });

export const setLista = (payload) => {
  console.log("payload :>> ", payload);
  return {
    type: "SET_LIST", // cuidado con los nombres al llamr en los reducers debe ser exactam,ente los mismo
    payload,
  };
};
