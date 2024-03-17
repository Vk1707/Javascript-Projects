const APIURl = "https://api.github.com/users/";
const main = document.querySelector("#main");
const searchBox = document.querySelector("#search");


const getUser = async (username) => {
    const response = await fetch(APIURl + username)
    const data = await response.json()
    console.log(data)
    contCard = `
        <div class="container">
            <div class="box">
                <div class="img">
                    <img src="${data.avatar_url}" alt="">
                </div>
                <div class="details">
                    <h2 id="userName">${data.name}</h2>
                    <p id="userBio">${data.bio}</p>

                    <ul id="info">
                        <li> <strong>Followers</strong> <span>${data.followers}</span></li>
                        <li> <strong>Following</strong> <span>${data.following}</span></li>
                        <li> <strong>Repos</strong> <span>${data.public_repos}</span></li>
                    </ul>
                    <div class="repos">
                    </div>
                </div>
            </div>
        </div>    
    `;

    main.innerHTML = contCard;
    getRepos(username);
}



const getRepos = async (username) => {
    const repos = document.querySelector(".repos")
    const response = await fetch(APIURl + username + "/repos")
    const data = await response.json()
    data.forEach(
        (item) => {
            console.log(data)
            const elem = document.createElement("a")
            elem.href = item.svn_url
            elem.target = "_blank"
            elem.innerText = item.name
            repos.appendChild(elem)
        }
    )


}



getUser("Vk1707")


const formSubmit = () =>{
    const user = searchBox.value
    if(user != ""){
        getUser(user);
        searchBox.value ="";
    }
    return false;
}
