// Part-1 User Data array operations
let users = [
    {
        name: "Preethi",
        age: 29,
        gender: "Female",
        location: "Chennai"
    },
    {
        name: "Deepa",
        age: 27,
        gender: "Female",
        location: "Kottayam"
    },
    {
        name: "Jose",
        age: 27,
        gender: "Male",
        location: "Chennai"
    },
    {
        name: "Kurian",
        age: 58,
        gender: "Male",
        location: "Chennai"
    },
    {
        name: "Bindu",
        age: 56,
        gender: "Female",
        location: "Chennai"
    },
    {
        name: "Alan",
        age: 25,
        gender: "Male",
        location: "Bangalore"
    },
    {
        name: "Sheela",
        age: 45,
        gender: "Female",
        location: "Pala"
    },
    {
        name: "Juan",
        age: 4,
        gender: "Male",
        location: "Trivandrum"
    },
    {
        name: "Jiya",
        age: 8,
        gender: "Female",
        location: "Trivandrum"
    },
    {
        name: "Niviya",
        age: 15,
        gender: "Female",
        location: "Kottayam"
    },
    {
        name: "Evan",
        age: 2,
        gender: "Male",
        location: "Chennai"
    },
    {
        name: "Abin",
        age: 30,
        gender: "Male",
        location: "Chennai"
    },
    {
        name: "Francis",
        age: 63,
        gender: "Male",
        location: "Chennai"
    },
    {
        name: "Anvitha",
        age: 35,
        gender: "Female",
        location: "Trivandrum"
    },
    {
        name: "Salomi",
        age: 58,
        gender: "Female",
        location: "Chennai"
    }

]


//function isAdult() to take user object as input and return true(if age > 18) else false 
function isAdult(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}


//using filter to store Adultusers
let adultUsers = users.filter((user) => {
    if (isAdult(user) == true) {
        return user
    }
});

//function getFullName() to take user object and return full name
getFullName = (user) => {

    return user.name + " " + user.location;
}

//using map to store user FullNames 
let userNames = users.map((user) => {
    return getFullName(user)
});

// Part 2 :Chaining user data
//Function filterByGender()
filterByGender = (user, gender) => {

    if (user.gender === gender) {
        return true
    }
    else {
        return false
    }

}
//Chaining- Filtering female users by gender and mapping their full name inside 'femaleUsers' array
let femaleUsers = users.filter((user) => {
    if (filterByGender(user, "Female")) {
        return user
    }
}).map((user) => {
    return getFullName(user)

})

// Part-3 Movie Data array Manipulation

let movies = [
    {
        title: "Vinnai thandi varuvaiya",
        genre: "Romance",
        year: 2010,
        rating: 8.1
    },

    { title: "Kaithi", genre: "Action", year: 2019, rating: 8.5 },
    { title: "Vikram Vedha", genre: "Crime", year: 2017, rating: 8.6 },
    { title: "Drishyam", genre: "Mystery", year: 2013, rating: 8.7 },
    { title: "Lucifer", genre: "Action", year: 2019, rating: 8.0 },
    { title: "Premam", genre: "Romance", year: 2015, rating: 8.3 },
    { title: "Super Deluxe", genre: "Drama", year: 2019, rating: 8.4 },
    { title: "Peranbu", genre: "Drama", year: 2018, rating: 9.0 },
    { title: "96", genre: "Romance", year: 2018, rating: 8.6 },
    { title: "Aruvi", genre: "Drama", year: 2016, rating: 8.5 }
];

// Part-4
//function filterbyGenre that takes a movie object and a 'genre' string as input and returns true if matches
filterbyGenre = (movie, genre) => {

    if (movie.genre === genre) {
        return true;
    }

}
// filter movie of action genre
let actionMovies = movies.filter((movie) => {
    return filterbyGenre(movie, "Action")
})
//map titles of action movies
let movieTitles = actionMovies.map((movie) => {
    return movie.title
})


//Part-5 Integration and Output

let combinedResults = [
    { adultusers: adultUsers, username: userNames },
    { femaleusers: femaleUsers },
    { actionMovieTitles: movieTitles }
]

// printing combined result to console using forEach 
combinedResults.forEach((result) => {
    console.log(result);
})


// Miscellaneous
//function to create table

function createTable(userarray, displaydivID) {


    let displaytable = document.getElementById(displaydivID);
    let tablerow = "";
    let tabledataSNo = "";
    let tabledataName = "";
    let tabledataAge = "";
    let tabledataGender = "";
    let tabledataPlace = "";
    let tabledataSNohead = "";
    let tabledataNamehead = "";
    let tabledataAgehead = "";
    let tabledataGenderhead = "";
    let tabledataPlacehead = "";
    //create first heading row
    tablerow = document.createElement('tr');
    tabledataSNohead = document.createElement('th');
    tabledataNamehead = document.createElement('th');
    tabledataAgehead = document.createElement('th');
    tabledataGenderhead = document.createElement('th');
    tabledataPlacehead = document.createElement('th');

    if (displaydivID === "usertable" || displaydivID === "adultUsertable") {

        //create first heading row
        
        tabledataSNohead.innerText = "S.No"
        tabledataNamehead.innerText = "Name";
        tabledataAgehead.innerText = "Age";
        tabledataGenderhead.innerText = "Gender";
        tabledataPlacehead.innerText = "Location";
        tablerow.appendChild(tabledataSNohead);
        tablerow.appendChild(tabledataNamehead);
        tablerow.appendChild(tabledataAgehead);
        tablerow.appendChild(tabledataGenderhead);
        tablerow.appendChild(tabledataPlacehead);
        displaytable.appendChild(tablerow);
        for (let i = 0; i < userarray.length; i++) {
            tablerow = document.createElement('tr');
            tabledataSNo = document.createElement('td');
            tabledataName = document.createElement('td');
            tabledataAge = document.createElement('td');
            tabledataGender = document.createElement('td');
            tabledataPlace = document.createElement('td');
    
            tabledataSNo.innerText = i + 1;
            tabledataName.innerText = userarray[i].name;
            tabledataAge.innerText = userarray[i].age;
            tabledataGender.innerText = userarray[i].gender;
            tabledataPlace.innerText = userarray[i].location;
            tablerow.appendChild(tabledataSNo);
            tablerow.appendChild(tabledataName);
            tablerow.appendChild(tabledataAge);
            tablerow.appendChild(tabledataGender);
            tablerow.appendChild(tabledataPlace);
            displaytable.appendChild(tablerow);
        }
    }
    else if(displaydivID === "movietable"){
        
         //create first heading row
        tabledataSNohead.innerText = "S.No"
        tabledataNamehead.innerText = "Movie";
        tabledataAgehead.innerText = "Genre";
        tabledataGenderhead.innerText = "Year";
        tabledataPlacehead.innerText = "Rating";
        tablerow.appendChild(tabledataSNohead);
        tablerow.appendChild(tabledataNamehead);
        tablerow.appendChild(tabledataAgehead);
        tablerow.appendChild(tabledataGenderhead);
        tablerow.appendChild(tabledataPlacehead);
        displaytable.appendChild(tablerow);

        for (let i = 0; i < userarray.length; i++) {
            tablerow = document.createElement('tr');
            tabledataSNo = document.createElement('td');
            tabledataName = document.createElement('td');
            tabledataAge = document.createElement('td');
            tabledataGender = document.createElement('td');
            tabledataPlace = document.createElement('td');
    
            tabledataSNo.innerText = i + 1;
            tabledataName.innerText = userarray[i].title;
            tabledataAge.innerText = userarray[i].genre;
            tabledataGender.innerText = userarray[i].year;
            tabledataPlace.innerText = userarray[i].rating;
            tablerow.appendChild(tabledataSNo);
            tablerow.appendChild(tabledataName);
            tablerow.appendChild(tabledataAge);
            tablerow.appendChild(tabledataGender);
            tablerow.appendChild(tabledataPlace);
            displaytable.appendChild(tablerow);
        }
    }
   





}


createTable(users, "usertable");
createTable(movies, "movietable");

let fiterAdultuserbutton = document.getElementById("selectAdult");

// eventListener for filterAdult button
fiterAdultuserbutton.addEventListener("click", () => {
    let adultusertable = document.getElementById("adultUsertable");
    let buildTable = false;

    if (!buildTable) {
        while (adultusertable.firstChild) {
            adultusertable.removeChild(adultusertable.firstChild);
        }
        createTable(adultUsers, "adultUsertable");
        buildTable = true;
    }


})

