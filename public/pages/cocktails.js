define([
    'models/cocktail',
    './entities'
], function (
    Cocktail,
    EntitiesPage
) {
    return new EntitiesPage({
        model: Cocktail,
        url: '/api/cocktails'
    });
});