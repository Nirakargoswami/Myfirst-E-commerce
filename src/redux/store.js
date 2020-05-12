import { createStore } from "redux";
import Allreducer  from "./Combinereducer";
import {persistStore} from "redux-persist"




 export  const store = createStore(Allreducer)
  export  const persistor = persistStore(store);

