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

chrome.storage.local.get(["shows"], (res) => {
  for (const show of res.shows) {
    renderShow(show);
  }
});

function renderShow(show) {
  const showDiv = document.createElement("div");

  const title = document.createElement("h3");
  title.textContent = show.show.name;

  const image = document.createElement("img");
  image.src = show.show.image ? show.show.image.medium : "icon.png";

  showDiv.appendChild(title);
  showDiv.appendChild(image);
  document.body.appendChild(showDiv);
}
