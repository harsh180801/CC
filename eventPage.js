var contextMenuItem = {
    "id" : "convert",
    "title": "Convert",
    "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    var hello = clickData.selectionText;
    alert(hello);
})
