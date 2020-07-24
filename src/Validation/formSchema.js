import * as Yup from "yup";

const formSchema = Yup.object().shape({
 
  name: Yup
    .string()
    .min(2, "Usermame must be at least 3 characters long."),
  pizzasize: Yup
    .string()
    .oneOf(['Large', 'Medium', 'Small'], "Select Your Pizza Size"),
  
})

export default formSchema
