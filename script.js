let number_groups = [];
let line = 1;

function generate_string(number_groups, line, number_members) {
    if (number_groups.length === 0 || number_groups.length % 2 != 0) {
        return `
            <div class="row group-line mb-3" id="group-line-${line}">
                <div class="col group-card" id="group-card-${number_groups.length}">
                    <p class="group-name">
                        Grupo ${number_groups.length}
                    </p>
                    <p id="number-members-field">
                        Participantes: ${number_members}
                    </p>
                </div>
            </div>
        `;
    } else {
        return `
            <div class="col group-card" id="group-card-${number_groups.length}">
                <p class="group-name">
                    Grupo ${number_groups.length}
                </p>
                <p id="number-members-field">
                    Participantes: ${number_members}
                </p>
            </div>
        `;
    }
}

function generate_groups() {

    let number_members_input = document.getElementById("number-members-input");
    let number_members = +number_members_input.value;

    const group_field = document.querySelector(".groups");

    if (number_members > 0 && number_members <= 50 && number_members != null && typeof (number_members) !== "string") {
        number_groups.push(number_members);

        if (number_groups.length === 0 || number_groups.length % 2 == 0) {

            const group_line = document.getElementById(`group-line-${line}`);
            group_line.innerHTML += generate_string(number_groups, line, number_members);
            // Adiciona a classe show após um pequeno atraso
            const newCard = document.getElementById(`group-card-${number_groups.length}`);
            setTimeout(() => {
                if (newCard) newCard.classList.add("show");
            }, 10);

            newCard.addEventListener("animationend", function () {
                newCard.style.opacity = "1";
                newCard.classList.remove("show");
                console.log(newCard.className);
            });
        } else {
            line++;
            group_field.innerHTML += generate_string(number_groups, line, number_members);
            // Adiciona a classe show após um pequeno atraso
            const newCard = document.getElementById(`group-card-${number_groups.length}`);
            setTimeout(() => {
                if (newCard) newCard.classList.add("show");
            }, 10);
            newCard.addEventListener("animationend", function () {
                newCard.style.opacity = "1";
                newCard.classList.remove("show");
                console.log(newCard.className);
            });
        }
    } else {
        alert("Valor inválido! Tente novamente")
    }
}

function calculate_average() {
    const result_field = document.getElementById("result-field");
    let total_number_people = 0;
    number_groups.forEach((value) => total_number_people += value);

    result_field.innerText = `Média: ${Math.floor(total_number_people / number_groups.length)}`
}
