const tran = require("google-translate-api");

const translate = async (request, response) => {
  tran("I speak Dutch!", { from: "en", to: "nl" })
    .then((res) => {
      response.json({ text: res.text });
      console.log(res.text);
      //=> Ik spreek Nederlands!

      //=> true
      console.log(res.from.text.value);
      response.json({ translatedText: res.from.text.value });

      //=> I [speak] Dutch!
      console.log(res.from.text.didYouMean);
      response.json(res.from.text.didYouMean);

      //=> false
    })
    .catch((err) => {
      console.error(err);
      response.json(err);
    });
};

module.exports = { translate };
