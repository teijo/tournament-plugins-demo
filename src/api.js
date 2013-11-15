function getApi(serverUrl) {
  if (!serverUrl)
    throw "Server URL required"

  function msg(method, data, path, success, error) {
    error = error || function() {}
    var requestUrl = serverUrl + path
    var jsonString = JSON.stringify(data);
    $.ajax({type: method,
      url: requestUrl,
      dataType: 'json',
      accept: 'application/json',
      crossDomain: true,
      data: jsonString,
    }).done(success).fail(function(jqXHR, textStatus) {
      error(textStatus)
    })
  }

  var POST = msg.bind(undefined, "POST")
  var PUT = msg.bind(undefined, "PUT")
  var GET = msg.bind(undefined, "GET", null)
  var DELETE = msg.bind(undefined, "DELETE", null)

  function parseCreate(cb) {
    return function (response) {
      cb(response.id, response.data)
    }
  }

  return {
    createBracket: function (cb) {
      POST({type: "bracket"}, "bracket", parseCreate(cb))
    },
    createGroup: function (cb) {
      POST({type: "group"}, "group", parseCreate(cb))
    },
    saveBracket: function (id, state, cb) {
      PUT(state, "bracket/" + id, cb)
    },
    saveGroup: function (id, state, cb) {
      PUT(state, "group/" + id, cb)
    },
    getBracket: function (id, cb) {
      GET("bracket/" + id, cb)
    },
    getGroup: function (id, cb) {
      GET("group/" + id, cb)
    },
    listBrackets: function (success, error) {
      GET("bracket", success, error)
    },
    listGroups: function (success, error) {
      GET("group", success, error)
    },
    deleteBracket: function (id, cb) {
      DELETE("bracket/" + id, cb)
    },
    deleteGroup: function (id, cb) {
      DELETE("group/" + id, cb)
    }
  }
}
