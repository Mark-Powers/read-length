// See the following URL for details
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page

function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    wpm: document.querySelector("#wpm").value,
    minLength: document.querySelector("#minLength").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#wpm").value = result.wpm || 250;
    document.querySelector("#minLength").value = result.minLength || 3;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get(["wpm", "minLength"]);
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

