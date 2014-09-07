define([
    'knockout',
    './entity'
], function (
    ko,
    EntityType
) {
    return new EntityType({
        name: 'user',
        mapping: {
            user_sessions: 'models/user_sessions'
        },
        init: function () {
            this.email = ko.observable();
            this.logged_in = ko.computed(function () {
                return !!this.id();
            }, this);
            this.can_edit = ko.computed(function () {
                return this.logged_in();
            }, this);
            this.options_text = ko.computed({
                get: function () {
                    var options_text = '';
                    this.options.forEach(function (text) {
                        options_text = options_text + ',' + text;
                    });
                    return options_text;
                },
                set: function (text) {
                    this.options = text.split(',');
                }
            }, this);
        }
    });
});
