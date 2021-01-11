console.log('from background');

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, back => {
        if (/^https:\/\/www\.google/.test(back.url))
            chrome.tabs.executeScript(null, {file : "./foreground.js"} , () => {console.log("injected");});
    });
});
