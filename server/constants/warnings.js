const badSecret = `
----------------------------

*** WARNING ***
Your application is not very secure.
You need to set SERVER_SESSION_SECRET to a better secret

----------------------------`;

const noBaseApiUrl = `
----------------------------
 

----------------------------`;

const exampleBadSecret = 'superDuperSecret';

module.exports = {
  badSecret,
  noBaseApiUrl,
  exampleBadSecret,
};
