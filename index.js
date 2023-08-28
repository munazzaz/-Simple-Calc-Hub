import inquirer from "inquirer";
async function main() {
    let { firstNumber, secondNumber, operation } = await inquirer.prompt([
        {
            message: "Enter first Number",
            type: "number",
            name: "firstNumber"
        },
        {
            message: "Enter second Number",
            type: "number",
            name: "secondNumber"
        },
        {
            name: "operation",
            type: "list",
            choices: ["addition", "subtraction", "multiplication", "division"],
            message: "Enter your operation"
        }
    ]);
    if (operation === "addition") {
        console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}.`);
    }
    else if (operation === "subtraction") {
        console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}.`);
    }
    else if (operation === "multiplication") {
        console.log(`${firstNumber} x ${secondNumber} = ${firstNumber * secondNumber}.`);
    }
    else if (operation === "division") {
        console.log(`${firstNumber} / ${secondNumber} =  ${firstNumber / secondNumber}.`);
    }
    else {
        console.log("The operation is invalid.");
    }
}
main();
