chrome.runtime.onInstalled.addListener((details) => {
  chrome.storage.local.set({
    shows: [],
  });
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });
  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(event);
    // chrome.search.query({
    //   disposition: "NEW_TAB",
    //   text: `imdb ${event.selectionText}`,
    // });

    // chrome.tabs.query(
    //   {
    //     currentWindow: true,
    //   },
    //   (tabs) => {
    //     console.log("tabs :>> ", tabs);
    //   }
    // );

    // chrome.tabs.create({
    //   active: true,
    //   url: `https://www.imdb.com/find?q=${event.selectionText}&ref_=nv_sr_sm`,
    // });
  });
});

// console.log("background script is running.");

// chrome.storage.local.get(["text"], (res) => {
//   console.log(res);
// });

// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//   console.log("msg :>> ", msg);
//   console.log("sender :>> ", sender);
//   console.log("sendResponse :>> ", sendResponse);
//   sendResponse("received msg from background");
//   chrome.tabs.sendMessage(
//     sender.tab.id,
//     `bg.js got your message - id is ${sender.tab.id}`
//   );
// });

chrome.contextMenus.onClicked.addListener((event) => {
  fetch(`https://api.tvmaze.com/search/shows?q=${event.selectionText}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      chrome.storage.local.set({
        shows: data,
      });
    });
});
