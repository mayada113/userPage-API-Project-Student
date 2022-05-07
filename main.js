let ApiManager = new APIManager()
let render = new Renderer()

$(".buttons").on("click", "#load", function () {
    ApiManager.randomUserGenerator()
    ApiManager.randomKanyeQuote()
    ApiManager.randomPokemon()
    ApiManager.baconIpsumApi()
    ApiManager.randomUserGeneratorFriends()

})

$(".buttons").on("click", "#display", function () {
    render.renderMainUser(ApiManager.data.user)
    render.renderQuote(ApiManager.data.quote)
    render.renderPokemon(ApiManager.data.pokemon)
    render.renderMeat(ApiManager.data.about)
    render.renderFriend(ApiManager.data.friends)
})