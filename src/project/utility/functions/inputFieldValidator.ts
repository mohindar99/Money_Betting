interface inputFieldValidator {
  fieldType: "password" | "email" | "username";
  inputString: string;
}

const validatorFunc = (allFields: string[], passedFieldIndexes?: number[]) => {
  const finalResult = {
    allFields,
    passedFieldIndexes,
  };
  return finalResult;
};

const inputFieldValidator = ({
  fieldType,
  inputString,
}: inputFieldValidator) => {
  inputString = inputString || "";
  switch (fieldType) {
    case "password": {
      const allFields = [
        "Must contain atleast 1 Capital Letter",
        "Must contain atleast 1 Small Letter",
        "Must contain atleast 1 Special Character",
        "Must contain atleast 1 Number",
      ];

      let passedFieldIndexes = [];

      //atlest one capital character
      if (/(?=.*[A-Z])/.test(inputString)) {
        passedFieldIndexes.push(0);
      }

      if (/(?=.*[a-z])/.test(inputString)) {
        passedFieldIndexes.push(1);
      }

      //atlest one special character
      if (/[!@#$%^&*(),.?":{}|<>]/.test(inputString)) {
        passedFieldIndexes.push(2);
      }

      //atlest one number
      if (/.*[0-9].*/.test(inputString)) {
        passedFieldIndexes.push(3);
      }

      const resultValidation = validatorFunc(allFields, passedFieldIndexes);
      return resultValidation;
    }

    case "email": {
      {
        const allFields = ["Please Enter a Valid Email Address"];

        let passedFieldIndexes = [];

        // email validation
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputString)) {
          passedFieldIndexes.push(0);
        }

        const resultValidation = validatorFunc(allFields, passedFieldIndexes);
        return resultValidation;
      }
    }
    case "username": {
      {
        const allFields = ["Username must atleast have 3 characters"];

        let passedFieldIndexes = [];

        // email validation
        if (inputString.length >= 3) {
          passedFieldIndexes.push(0);
        }

        const resultValidation = validatorFunc(allFields, passedFieldIndexes);
        return resultValidation;
      }
    }
    default:
      {
        return false;
      }
      break;
  }
};

export { inputFieldValidator };
