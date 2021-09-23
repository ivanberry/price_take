var port = chrome.runtime.connect();

window.addEventListener("message", (event) => {
  // We only accept messages from ourselves
  console.log('event 0: ', event)
  if (event.source != window) {
    return;
  }

  console.log('event: ', event)

  if (event.data.type && (event.data.type == "USER_STORAGE")) {
    console.log("Content script received: " + event.data.text);
    port.postMessage(event.data.text);
  }
}, false);