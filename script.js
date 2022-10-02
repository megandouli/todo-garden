async function fetchData() {
    const res = await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
    const record = await res.json();
    console.log(record);
    document.getElementById("date").innerHTML=record.data[0].date;
    document.getElementById("areaName").innerHTML=record.data[0].areaName;
    document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
    document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
}
fetchData();




//  PERSISTENT Storage - Globally
//  Save data to storage across their browsers...

chrome.storage.sync.set({ "yourBody": "myBody" }, function(){
    //  A data saved callback omg so fancy
});

chrome.storage.sync.get(/* String or Array */["yourBody"], function(items){
    //  items = [ { "yourBody": "myBody" } ]
});

//  LOCAL Storage

// Save data to storage locally, in just this browser...

chrome.storage.local.set({ "phasersTo": "awesome" }, function(){
    //  Data's been saved boys and girls, go on home
});

chrome.storage.local.get(/* String or Array */["phasersTo"], function(items){
    //  items = [ { "phasersTo": "awesome" } ]
});