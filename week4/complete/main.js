const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const resultsDiv = document.getElementById("results");

nameForm.onsubmit = function (event) {
    // prevent the form from submitting normally
    event.preventDefault();
    // remove existing children
    for (const child of Array.from(resultsDiv.children)) {
        child.remove();
    }
    const name = nameInput.value;
    getNameData(name).then(nameData => {
        const intro = document.createElement("h2");
        const ageData = document.createElement("p");
        const nationalityData = document.createElement("p");
        const genderData = document.createElement("p");

        intro.textContent = name;
        ageData.textContent = `Is most likely ${nameData.age} years old`;
        nationalityData.textContent = `Is most likely to be from ${nameData.nationalities[0].country} (${(nameData.nationalities[0].probability * 100).toFixed(1)}% chance)`;
        genderData.textContent = `Is most likely to be ${nameData.gender.gender} (${(nameData.gender.probability * 100).toFixed(1)}% chance)`;
        resultsDiv.append(intro, ageData, nationalityData, genderData);
    })
}

const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});

async function getNameData(name) {
    const ageData = await (await fetch(`https://api.agify.io?name=${name}`)).json();
    const nationalityData = await (await fetch(`https://api.nationalize.io?name=${name}`)).json();
    const genderData = await (await fetch(`https://api.genderize.io?name=${name}`)).json();
    return {
        age: ageData.age,
        nationalities: nationalityData.country.map(c => ({
            country: regionNames.of(c.country_id), probability: c.probability
        })),
        gender: {
            gender: genderData.gender,
            probability: genderData.probability,
        }
    }
}
