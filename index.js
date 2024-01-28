const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

form.addEventListener("submit", search);

let target = "delhi";

const fetchData = async(target) => {
    try{
        const url = `https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=${target}`;

        const response = await fetch(url);
        const data = await response.json();

        const{
            current:{
                temp_c,
                condition: {text,icon}
            },
            location :{
                name, localtime
            },
        } =data;
        updateDom(temp_c,name,localtime,icon,text);
    }
    catch(error){
        alert("Bhai Phle Location k Nam Check Kar 🤯");
    }
};

function updateDom(temprature, city, time , emoji, text){
    const exactTime =time.split(" ")[1];
    const exactDate =time.split(" ")[0];
    const exactDay = getDayName(new Date(exactDate).getDay());

    temperatureField.innerText = temprature;
    cityField.innerText=city;
    dateField.innerText = `${exactTime} - ${exactDay} - ${exactDate}`;
    emojiField.src = emoji;
    weatherField.innerText = text;

}

fetchData(target);

function search(e){
    e. preventDefault();
    target = searchField.value;
    fetchData(target);
}

function getDayName(num){
    switch (num) {
        case 0: return "sunday";
                break;

        case 1: return "monday";
        break;
        case 2: return "tuesday";
        break;
        case 3: return "wednesday";
        break;
        case 4: return "thursday";
        break;
        case 5: return "friday";
        break;
        case 6: return "saturday";
        break;

        default: return " Pta Nhi Bhai";
    }
}

var preloader = document.querySelector(".loader");

setTimeout(function (){
        
    preloader.style.display = "none";

}, 1000);


