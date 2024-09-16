const button = document.querySelector(".btn-warning");
const activityElement = document.querySelector("#activity");

const url = "https://bored.api.lewagon.com/api/activity/";

const insertActivity = (data) => {
  const activityName = data.activity;
  activityElement.innerText = activityName;
}

button.addEventListener("click", (event) => {
  const requestPromise = fetch(url);

  requestPromise.then((response) =>  response.json()).then((data) => {
    insertActivity(data);
    event.target.innerText = 'Inspire me again!'
  });

});
