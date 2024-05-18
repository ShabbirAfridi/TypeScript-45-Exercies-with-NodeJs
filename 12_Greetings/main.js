// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var Friend_names = ["Afridi", "Sameer", "Zohaib", "Hamza"];
var message = Friend_names.forEach(function (Friend_names) { return console.log("Hello ".concat(Friend_names, " How are you")); });
