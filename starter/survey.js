import inquirer from "inquirer";

const questions = [
  {
    name: "firstName",
    message: "What's your first name?",
    type: "input",
    validate(answer) {
      if (!answer) {
        return "Please, fill your name!";
      }
      return true;
    },
  },
  {
    name: "email",
    type: "input",
    message(answers) {
      return `Hello ${answers.firstName} What's your email address?`;
    },
    validate: (answer) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(answer)) {
        return "Please fill correct your E-mai!";
      }
      return true;
    },
  },
  {
    name: "experienceDeveloper",
    message: "Are you experienced developer?",
    type: "list",
    choices: ["yes", "no"],
  },
  {
    name: "ExperienceJavaScript",
    message: "How many years of experience you have with JavaScript?",
    type: "list",
    choices: ["0-1", "1-3", "3-5", "5-10", "10+"],
    when(answers) {
      return answers.experienceDeveloper === "yes";
    },
  },
  {
    name: "javaScriptLibrary",
    message: "What JavaScript library do you know?",
    type: "checkbox",
    choices: ["React.js", "Vue", "Angular","Node.js", "jQuery", "D3.js"],
  },
  {
    name: "desiredSalary",
    message: "What is your desired salary?",
    type: "input",
    validate(answer) {
      if (answer > 400000000) {
        return "Are you sure? please fill your salary!";
      }
      if (answer < 1000000) {
        return "please fill the correct amount!";
      } else {
        return  "Thank You for Your Response!";
      }
    },
  },
];
// run your command
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers, null, 2));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!");
    } else {
      console.log(error);
    }
  });
