chrome.action.onClicked.addListener((tab) => {
  const {tabs} = chrome
  tabs.create({url: 'http://localhost:3000/'})
});