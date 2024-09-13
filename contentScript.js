// confirm("Hello form content script!");

// const aTags = document.getElementsByTagName("a");
// for (const tag of aTags) {
//   tag.textContent = tag.textContent;
// }

// const inputTags = document.getElementsByTagName("input");
// for (const input of inputTags) {
//   input.value = input.value;
// }

// for (const tag of aTags) {
//   if (tag.textContent.includes("i")) {
//     tag.style = "background-color:yellow;";
//   }
// }

const text = [];
const aTags = document.getElementsByTagName("a");
for (const tag of aTags) {
  text.push(tag.textContent);
}

chrome.storage.local.set({ text });

chrome.runtime.sendMessage(null, text, (response) => {
  console.log("I am from response function from contentScript " + response);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("message :>> ", message);
  console.log("sender :>> ", sender);
  console.log("sendResponse :>> ", sendResponse);
});
