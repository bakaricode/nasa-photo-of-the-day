function apiCall(){
fetch('https://api.nasa.gov/planetary/apod?start_date=2024-08-25&end_date&api_key=8aSuka3r4tfHhgIVQT3Gq6ltlbEHvQW3as8ygWwR')
.then(response => response.json())
.then(data => {
    console.log(data);
    let slicedData = data.slice(-3);
    console.log(slicedData)
    displayCards(slicedData)
    return data;
})
.catch(error => console.error('Error: ',error))
}
// apiCall();
// const burger = document.querySelector(".burger i")

// const nav = document.querySelector(".nav")

// function displayCards() {
//     console.log("clicked")
  
//   burger.classList.toggle("fa-times")
//   nav.classList.toggle("nav-active")
// };

let cardContainer = document.querySelector(".card-container");

function displayCards(arr) {
    console.log("get clicked")
    // let apiCallData = apiCall();
    for (let item of arr) {
    console.log(item.title)
    let cardItem = document.createElement("div");
    cardItem.className = "card";
    cardItem.innerHTML = `
    <div class="card-grid">
                <h3>${item.title}</h3>
                <img src=${item.url}>
                <p>${item.explanation}</p>
                <p><a href="${item.link}"> View the Photo Here!</a></p>
            </div>
            
    `;
    console.log(cardItem)
    cardContainer.appendChild(cardItem);
   
    }
}
const resetButton = document.getElementById("reset-button");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
// displayCards();