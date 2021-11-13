var contextMenuItem = {
    "id" : "convert",
    "title": "Convert",
    "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    var hello = clickData.selectionText;
    var amount = hello;
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${amount}&from=USD&to=INR`)
      .then(resp => resp.json())
      .then((data) => {
        alert(amount + ` USD = ${data.rates.INR} INR`);
      });

})
