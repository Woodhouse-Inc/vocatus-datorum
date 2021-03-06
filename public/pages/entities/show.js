define([
    'lodash',
    'jquery',
    'knockout',
    'when'
], function (
    _,
    $,
    ko,
    when
) {
    var ShowPage = function (config) {
        _.bindAll(this);
        this.model = config.model;
        this.name = config.name;
        this[config.name] = this.entity = ko.observable();
        this.ready = ko.computed(function () {
            return !!this.entity();
        }, this);
    };

    ShowPage.prototype.refresh = function (params, forceRefresh) {
        var entity = this.model.get(params[this.name + '_id']);
        if (entity.loaded()) {
            this.entity(entity);
            if (forceRefresh) {
                return entity.refresh();
            } else {
                return when(true);
            }
        } else {
            this.entity(null);
            return entity.refresh().then(this.entity);
        }
    };

    return ShowPage;
});
