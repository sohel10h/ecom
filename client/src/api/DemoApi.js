import DemoApiGenerated from "./generated/DemoApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class DemoApi extends DemoApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Demo List
  static getDemoList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/demos")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default DemoApi;