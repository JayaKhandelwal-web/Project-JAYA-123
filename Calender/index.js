let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {

        let value = e.target.innerText;

        if (value === "AC") {
            string = "";
            input.value = string;
        }
        else if (value === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        }
        else if (value === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
            }
        }
        else {
            string += value;
            input.value = string;
        }

    });
});
