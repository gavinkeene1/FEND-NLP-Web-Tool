# FEND Natural Language Processing Web Tool
This an web tool project that allows users to run Natural Language Processing (NLP) on tweet-sized bits of text for sentiment analysis with a couple of objective metrics.

When a user enters text into the input field and clicks 'submit', the app runs a validation test to check that text up to 140 characters has been entered.

If validation passes, the app calls the Aylien Text API at its "sentiment analysis" endpoint, passing protected API keys from a .env, getting information, and then posting it to the user's viewing page.

Development and Production environments have been set up for the project, and code has been minified for Production. Webpack enables Live Reloading in Development.

Sass files house the styling for the project and are imported by the client's source index.js file.

A couple of very simple Jest tests are set up to demonstrate working functions  in the formHandler and nameChecker files that aid the app in properly taking in input and returning Aylien API data.

Finally, Service Workers are set up for caching of the app when online to provide for offline usage of the app.

## Concepts Covered Throughout Project Development

- Webpack entry point
- Webpack output and dist folder
- Webpack Loaders
- Webpack Plugins
- Webpack Mode
- Tools for convenient Webpack development