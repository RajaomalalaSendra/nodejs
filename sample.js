/* Here is the way of creation of variable in the node
inside of the js file */
// THe first variable is:
var user = function (ops) {
    return { firstName: ops.name || "John"
            , lastName: ops.name || "Smith"
            , email: ops.email || "test@hotmail.com"
            , name: function() { return this.firstName + this.lastName }
            }
}
var agency = function(ops) {
          ops = ops || {}
          var agency = user(ops)
          agency.costomers = ops.costomers || 0
          agency.isAgency = true
          return agency
}
