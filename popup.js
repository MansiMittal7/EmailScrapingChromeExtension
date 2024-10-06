//writing handler for button click 
let scrapeEmails = document.getElementById('scrapeEmails');

scrapeEmails.addEventListener("click", async ()=>{
    //   alert('script running'); 

    //getting current active tab (using chrome's scripting api )
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    //Executing scripts to parse the current emails present on the tab 
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: scrapeEmailsFromPage, 
    });
})

//function to scrape emails from the page 
function scrapeEmailsFromPage() {
    //  alert('function is getting envoked'); 

    //regEx to parse email from page
    const emailRegEx = /[\w\.=-]+@[\w\.-]+\.[\w]{2,3}/gim;

    let emails=  document.body.innerHTML.match(emailRegEx);

     alert(emails);
}