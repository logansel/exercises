const identityForm = (reader) => {
  reader.question("What is your first name ?", (firstName) => {
    const firstname = firstName;
    reader.question("What is your last name ?", (lastName) => {
      const nom = lastName;
      reader.question("What is your age ?", (age) => {
        const ageOfReader = age;
        console.log(`Your name is ${firstname} ${nom} and you are ${ageOfReader}.`);
        reader.close();
      });
    });
  });
};

// Leave line below for tests to work
module.exports = identityForm;
 