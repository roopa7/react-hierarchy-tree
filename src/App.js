import React from "react";
import "./App.css";
import { getBstTreeJSON } from "./utils/constructTree";
import { DesignationHierarchyTree } from "./components";
import designationData from "./stub/membersDataInPreorder.json";
const App = () => {
  console.log(designationData);

  return (
    <div className="App">
      <DesignationHierarchyTree
        bstTree={[getBstTreeJSON({ designationData })]}
      />
    </div>
  );
};

export default App;
