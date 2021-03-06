var orm = require("../config/orm");
var burgers = {
  selectAll: function(controllerCallback) {
    orm.selectAll("burgers", function(data) {
      controllerCallback(data);
    });
  },
  insertOne: function(newBurger, controllerCallback) {
    orm.insertOne("burgers", ["burger_name", "devoured"], newBurger, function(
      data
    ) {
      controllerCallback(data);
    });
  },
  updateOne: function(devoured,id, controllerCallback) {
    orm.updateOne("burgers", ["devoured","id"], [devoured,id], function(data) {
      controllerCallback(data);
    });
  }
};

module.exports = burgers;
