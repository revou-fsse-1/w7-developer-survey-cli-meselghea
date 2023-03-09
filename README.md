# Developer Survey CLI

- Assignment for Week 7: Programming — JavaScript, Node.js, npm, TypeScript

## Survey using CLI and JavaScript

## Expetation: [Loom](https://www.loom.com/share/fddee318c86643ef9220bc83768f82fb)

## Prerequisites

- Node.js
- NPM
  - Inquirer
- JavaScript
- Terminal

Code from folder starter :

- What's your first name?
  Rules

  - Input type "input"
  - Validate not empty

- Hello (name from question 1) What's your email address?
  Rules

  - Input type "input"
  - Validate not empty

- Are you experienced Developer?
  Rules

  - Input type "list", [yes, no]
  - Validate not empty

- How many years of experience you have with JavaScript?
  Rules

  - Input type "list", ["0-1", "1-3", "3-5", "5-10", "10+"]
  - Validate not empty
  - Only show if question 3 selected "yes"

- What JavaScript library do you know?
  Rules

  - Input type "checkbox", ["React.js", "Vue", "Angular", "Node.js", "jQuery", "D3.js"]
  - Validate not empty
  - Only show if question 3 selected "yes"

- What is your desired salary?
  Rules
  - Input type "number"
  - Validate salary more than zero
  - Only show if question 3 selected "yes"
