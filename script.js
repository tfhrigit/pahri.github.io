document.addEventListener("DOMContentLoaded", function () {
    const editableElements = document.querySelectorAll(".editable");

    editableElements.forEach(element => {
        element.addEventListener("click", function () {
            let input = document.createElement("input");
            input.type = "text";
            input.value = this.innerText;
            this.innerText = "";
            this.appendChild(input);

            input.focus();

            input.addEventListener("blur", function () {
                element.innerText = input.value;
            });

            input.addEventListener("keypress", function (e) {
                if (e.key === "Enter") {
                    input.blur();
                }
            });
        });
    });
});