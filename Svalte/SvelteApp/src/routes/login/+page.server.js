/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
      // event.preventDefault()
      const data = await request.formData();
      const [emailField, passwordField] = data;
      const email = emailField[1];
      const password = passwordField[1];
      
      console.log(data);
      console.log(email, password);

      if(!email){
        return "email field is required";
      }
      if(!password){
        return "password field is required";
      }
    }
  };

