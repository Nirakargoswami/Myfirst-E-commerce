import React from "react";
import { shallow } from "enzyme";
import Coomponent from "./Newcomponent"

it("expect that react encyme shuld work" ,()  =>{
return expect(shallow(<Coomponent/>)).toMatchSnapshot();
} )