import actionsFunction from "./generated/DemoActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import DemoApi from "../../api/DemoApi";
 
 actionsFunction.loadDemoList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return DemoApi
     .getDemoList()
     .then(list => {
       dispatch(actionsFunction.loadDemoSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
