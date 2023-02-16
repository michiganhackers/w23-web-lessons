const usernameForm = document.getElementById("username-form");
const usernameInput = document.getElementById("username-input");
const user = document.getElementById("user");

usernameForm.addEventListener("submit", event => {
    // prevent automatic submit
    event.preventDefault();
    // remove existing children
    for (const child of Array.from(user.querySelectorAll("#repos > div"))) {
        child.remove();
    }

    const username = usernameInput.value;
    getUser(username).then(userData => {
        const heading = user.querySelector("h1 > a");
        heading.textContent = userData.login;
        heading.href = userData.html_url;

        user.querySelector("img").src = userData.avatar_url;
        user.querySelector("p").textContent = userData.bio;

        const repos = user.querySelector("#repos");
        for (const repo of userData.repos) {
            // create elements
            const wrapper = document.createElement("div");
            const name = document.createElement("h2");
            const link = document.createElement("a");
            const language = document.createElement("p");
            const description = document.createElement("p");

            // set up internal dom structure
            name.append(link);
            wrapper.append(name, language, description);

            // update content
            link.textContent = repo.name;
            link.href = repo.html_url;
            description.textContent = repo.description;
            language.textContent = repo.language;

            // add the repo
            repos.append(wrapper);
        }
    })
})

async function getUser(username) {
    const userProfile = await fetch(`https://api.github.com/users/${username}`).then(res => res.json());
    const repos = await fetch(userProfile.repos_url).then(res => res.json());
    return {
        ...userProfile,
        repos,
    }
}

