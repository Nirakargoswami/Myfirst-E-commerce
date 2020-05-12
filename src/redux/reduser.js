


const USERSTATE = {
User : null
}
  const  Courrentuser = (state = USERSTATE ,action) => {

switch (action.type) {
  case "Courent_user":
      return (
        { ...state },
        {
          User: action.Payload,
        }
      );
  default:
    return state;
}


}

export default Courrentuser;