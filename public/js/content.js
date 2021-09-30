// window.addEventListener("message", (event) => {
//   // We only accept messages from ourselves
//   console.log('message: ', event)
//   if (event.source != window) {
//     return;
//   }

//   if (event.data.type && (event.data.type == "USER_STORAGE")) {
//     if (chrome.runtime.lastError) {
//       console.log('error')
//     } else {
//       chrome.runtime.onConnect.addListener(port => {
//         port.postMessage({type: event.data.type, text: event.data.text})
//       })

//       chrome.runtime.sendMessage('xxx', (res) => {
//         console.log('xxxx: ', res)
//       })
//     }
//   }
// }, false);