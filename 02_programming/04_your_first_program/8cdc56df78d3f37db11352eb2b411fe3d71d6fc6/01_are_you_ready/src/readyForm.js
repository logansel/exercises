const readyForm = (reader) => {
  reader.question ("Are you ready for today ??!", (reader) => {
    console.log(`WOW, ${reader} READY ??!! Really Nice! Let's goo !!.`);
  });
  reader.close();
};

// Leave line below for tests to work
module.exports = readyForm;