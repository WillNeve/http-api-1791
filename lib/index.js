// TODO: Fetch an activity with the Bored API - Let's pseudocode!
const url = "https://bored.api.lewagon.com/api/activity/";

const button = document.querySelector(".btn-warning");

const insertActivity = (data, event) => {
  const activityName = data.activity;

  event.target.innerText = activityName;
  event.target.setAttribute("disabled", "");
}

button.addEventListener("click", (event) => {
  // const options = ["Read a book!", "Do your flashcards!", "Go for a walk!"]
  // const randomNumber = Math.floor(Math.random() * 3);
  const requestPromise = fetch('https://bored.api.lewagon.com/api/activity/');

  requestPromise.then((response) =>  response.json()).then((data) => {
    insertActivity(data, event);
  });

});

const myFunction = () => {

}
