//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    randomUserGenerator() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: (data) => {
                let firstName = data.results[0].name.first
                let lastName = data.results[0].name.last
                let city = data.results[0].location.city
                let state = data.results[0].location.state
                let pictureUrl = data.results[0].picture.thumbnail
                let mainUser = { "firstName": firstName, "lastName": lastName, "city": city, "state": state, "pictureUrl": pictureUrl }
                this.data.user=mainUser
    
            },
            error: (xhr, text, error) => {
            }
        });

    }
    randomUserGeneratorFriends() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=6',
            dataType: 'json',
            success: (data) => {
                let friends = data.results.map(user => ({
                    firstName: user.name.first,
                    lastName: user.name.last,
                }));
                this.data.friends=friends

            },
            error: (xhr, text, error) => {
                console.error("Error:", error);
            }
        });

    }
    randomKanyeQuote() {
        fetch("https://api.kanye.rest")
            .then((response) => response.json())
            .then((data) => {
                let quote = data.quote;
                this.data.quote=quote
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    randomPokemon() {
        const generateRandomNuber = () => Math.floor(Math.random() * 150) + 1;
        const url = "https://pokeapi.co/api/v2/pokemon/"
        const finalUrl = url + generateRandomNuber()
        fetch(finalUrl)
            .then((response) => response.json())
            .then((data) => {
                const imgSrc = data.sprites.other.dream_world.front_default
                const pokeName = data.name
                this.data.pokemon={pokeName, imgSrc}

            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    baconIpsumApi() {
        fetch('https://baconipsum.com/api/?callback=?type=all-meat&paras=1')
            .then((response) => response.json())
            .then((data) => {
                let about = data;
                about = about.join('\n');
                this.data.about=about
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    }

}

