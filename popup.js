
document.getElementById("start").addEventListener("click", async () => {
    const rating = parseInt(document.getElementById("rating").value);
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: startAutoFeedback,
        args: [rating]
    });
});

function startAutoFeedback(rating) {
    window.postMessage({ type: "START_FEEDBACK", rating }, "*");
}
