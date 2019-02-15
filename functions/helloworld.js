exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Gareth says, Hello, World"
    });
}