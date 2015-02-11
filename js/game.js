;
(function(m) {

    "use strict";



    //     var BodyView = Backbone.View.extend({
    //     el: "body"
    //     events: {
    //         "":"",
    //     },
    //     : function(event) {
    //         event.preventDefault();
    //         event.target;
    //     }
    // }),
    var SidebarView = {};
    _.extend(SidebarView, Backbone.Events);
    SidebarView.on("show-msg", function() {
        $('.sideBar').bind('click', function() {
            alert("MARCO")
        })
    });
    SidebarView.trigger("show-msg");

    var BodyView = {};
    _.extend(BodyView, Backbone.Events);
    BodyView.listenTo(SidebarView, "MARCO", function() {
        this.trigger("MARCO");
        console.log(marco);
    });

    var MainView = {};
    _.extend(MainView, Backbone.Events);
    MainView.listenTo(BodyView, "MARCO", function() {

        render(function() {
            this.$('.mainView').append("POLO")
        });
        return this;
    });



    // var MainView = {};
    // _.extend()
    // var SidebarView = Backbone.View.extend({
    //     el: "sideBar",
    //     // listenTo: "click", //doesn't do anything
    //     // trigger: this.gameStart,
    //     events: {
    //         "click": "marco"
    //     },
    //     marco: function(event) {
    //         event.preventDefault();
    //         event.target;
    //         alert("marco");
    //         this.gameStart;


    //     }

    // });
    //     var MainView = Backbone.View.extend({
    //     el: "mainView"
    //     events: {
    //         "":"",
    //     },
    //     : function(event) {
    //         event.preventDefault();
    //         event.target;
    //     }
    // }),
    // self = this;
    // function gameStart(){
    //     // this.gameStart = gameStart;
    //     // SidebarView.listenTo(Backbone, )
    //     alert("new game");
    // };

    // m.gameStart = gameStart;

})(typeof module === "object" ? module.exports : window);
