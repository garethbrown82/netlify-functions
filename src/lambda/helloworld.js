// https://gareth-functions-demo.netlify.com/.netlify/functions/helloworld

exports.handler = (event, context, callback) => {
  const obj = {
    name: "Gareth",
    message: "Says hello"
  }

  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(obj)
  });
}