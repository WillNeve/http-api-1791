// select elements that we will need  from the DOM and save to variables
const button = document.querySelector(".btn-warning");
const activityElement = document.querySelector("#activity");

// save our API Endpoint to variable
const url = "https://bored.api.lewagon.com/api/activity/";

// create insertActivity() function that takes a data argument ({activity: string, ...})
// ... and updates the activity element innerText with activity name
const insertActivity = (data) => {
  const activityName = data.activity;
  activityElement.innerText = activityName;
};

// add an event listener to button element to allow us to make a request and get a new activity to insert when it is clicked
button.addEventListener("click", (event) => {
  const requestPromise = fetch(url); // save the fetch() response (Promise) to variable

  requestPromise.then((response) =>  response.json()).then((data) => {
    // ^^ wait for promise to resolve (to a Response)
    // ... and convert response body (data) from JSON to a Javascript object we can use
    insertActivity(data); // pass the converted data object to the function we wrote above to update the activity element
    event.target.innerText = 'Inspire me again!' // update the button (accessible through event.target) innerText
  });
});
