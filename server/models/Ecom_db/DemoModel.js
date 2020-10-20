import DemoModelGenerated from "./generated/DemoModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = DemoModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await DemoModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...DemoModelGenerated,
  ...customModel
};
