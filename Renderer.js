class Renderer {
    
    renderMainUser(mainUser) {
        $(".user-container").empty()
        const source = $('#main-user').html();
        const template = Handlebars.compile(source);
        const newHTML = template(mainUser);
        $('.user-container').append(newHTML);
    }
    renderQuote(quote) {
        $(".quote-container").empty()
        const source = $('#quote').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ quote });
        $('.quote-container').append(newHTML);

    }
    renderPokemon(data) {
        $(".pokemon-container").empty()
        const source = $('#pokemon').html();
        const template = Handlebars.compile(source);
        const newHTML = template(data);
        $('.pokemon-container').append(newHTML);

    }
    renderMeat(about) {
        $(".meat-container").empty()
        const source = $('#meat').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ about });
        $('.meat-container').append(newHTML);
    }
    renderFriend(friends) {
        $(".friends-container").empty()
        const source = $('#friends').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ friends });
        $('.friends-container').append(newHTML);
    }

}