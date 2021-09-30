chrome.action.onClicked.addListener((tab) => {
  const {tabs} = chrome
  tabs.create({url: 'https://price-assiastant.vercel.app/'})
});

chrome.runtime.onMessageExternal.addListener(
  (request, sender, sendResponse) =>  {
    if (sender.url === blocklistedWebsite)
      return;  // don't allow this web page access
    if (request.openUrlInEditor)
      openUrl(request.openUrlInEditor);
  });