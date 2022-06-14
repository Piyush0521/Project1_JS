//creating a function to fetch data from an api containing many users name
function getData(){
    url = "https://reqres.in/api/users";
fetch(url).then(response => {
 
    return response.json();
}).then(data =>{
    console.log(data);

    //looping over all the arrays and constructing a html array
    const html = data.data.map(user => {
        //adding the elements to be displayed at the frontend - profile pic, name and Email
        return `
        <div class="details">
        <p> <img src="${user.avatar}" alt="image" /></p>
        <div class="user">
        <p>Name: ${user.first_name}</p>
        <p>E-mail: ${user.email}</p>
        </div>
        </div>
        `;
    }).join("")
    console.log(html);
    document.querySelector(".container").insertAdjacentHTML("afterbegin", html)
}).catch(error =>{ 
    console.log("ERROR DETECTED", error);
})
}

getData();