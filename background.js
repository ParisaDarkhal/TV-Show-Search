chrome.runtime.onInstalled.addListener((details) => {
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

    chrome.tabs.create({
      active: true,
      url: `https://www.imdb.com/find?q=${event.selectionText}&ref_=nv_sr_sm`,
    });
  });
});

console.log("background script is running.");
