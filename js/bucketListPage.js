const form = document.getElementById( "NPSForm" );

API_KEY = "WwsxR31cJF3kXUmZSQfAvlW1rR6s1zh9zdTabjwF";
BASE_URL = "developer.nps.gov/api/v1";


function getActivities(activity, globalArray){
    
    console.log('API request to /activites/parks sending: ', activity);

    fetch("https://" + BASE_URL + "/activities/parks" + "?q=" + activity + "&limit=10" + "&api_key=" + API_KEY)
    .then((resp) => resp.json())
    .then(function(data) {
        /*console.log('Data object 0, ', data.data[0].parks[0]);
        console.log('Data object 1, ', data.data[0].parks[1]);*/
        var obj1 = data.data[0].parks[0];
        var obj2 = data.data[0].parks[1];

        globalArray.push(obj1.fullName);
        globalArray.push(obj2.fullName);

    })
    .catch(function(error) {
        console.log('Sorry, there was an error in the request. Please try again. Triggered by: ' + activity + ' ' +  error);
    });

};

function getTopics(topic, globalArray){

    console.log('API request to /topics/parks sending: ', topic);

    fetch("https://" + BASE_URL + "/topics/parks" + "?q=" + topic + "&limit=10" + "&api_key=" + API_KEY)
    .then((resp) => resp.json())
    .then(function(data) {
        /*console.log('Data object 0, ', data.data[0].parks[0]);
        console.log('Data object 1, ', data.data[0].parks[1]);*/
        var obj1 = data.data[0].parks[0];
        var obj2 = data.data[0].parks[1];


        globalArray.push(obj1.fullName);
        globalArray.push(obj2.fullName);

    })
    .catch(function(error) {
        console.log('Sorry, there was an error in the request. Please try again. Triggered by: ' + topic + " " + error);
    });

};

function getPlaces(stateCode, globalArray){

    console.log('API request to /topics/places sending: ', stateCode);

    fetch("https://" + BASE_URL + "/places" + "?stateCode=" + stateCode + "&limit=10" + "&api_key=" + API_KEY)
    .then((resp) => resp.json())
    .then(function(data) {
        /*console.log('PLACES 0, ', data.data[0].relatedParks[0]);*/
        var obj1 = data.data[0].relatedParks[0];

        globalArray.push(obj1.fullName)

    })
    .catch(function(error) {
        console.log('Sorry, there was an error in the request. Please try again. Triggered by: '+ stateCode + " " + error);
    });

};

function printInfo(array1, array2, array3, array4, array5, array6){

    console.log('Final', array1)
};

form.addEventListener( "submit", function(event) {
    event.preventDefault();
    var response1 = form.question1.value;
    var response2 = form.question2.value;
    var response3 = form.question3.value;
    var response4 = form.question4.value;
    var response5 = form.question5.value;

    var dropdown = document.getElementById("question6");
    var response6 = dropdown.value;

    console.log('response1', response1);
    console.log('response2', response2);
    console.log('response3', response3);
    console.log('response4', response4);
    console.log('response5', response5);
    console.log('response6', response6);

    let globalArray = [];

    getActivities(response1, globalArray);
    console.log('First Array Returned, ', globalArray);

    getActivities(response2, globalArray);
    console.log('Second Array Returned, ', globalArray);

    getTopics(response3, globalArray);
    console.log('Third Array Returned, ', globalArray);

    getTopics(response4, globalArray);
    console.log('Fourth Array Returned, ', globalArray);

    getTopics(response5, globalArray);
    console.log('Fifth Array Returned, ', globalArray);

    getPlaces(response6, globalArray);
    console.log('Sixth Array Returned, ', globalArray);

    console.log('GLOBAL, ', globalArray);

    setTimeout(function() { 
        alert("Hello, you're list is ready");
        var myobj = document.getElementById("directions");
        myobj.remove();
        const newItem = document.createElement('ol');
        newItem.innerHTML = '<ol><li>' + globalArray[0] + '</li><li>' + globalArray[1] + '</li><li>' + globalArray[2] + '</li><li>' + globalArray[3] + '</li><li>' + globalArray[4] + '</li><li>' + globalArray[5] + '</li><li>' + globalArray[6] + '</li><li>' + globalArray[7] + '</li><li>' + globalArray[8] + '</li><li>' + globalArray[9] + '</li><li>' + globalArray[10] + '</li></ol>';
        form.parentNode.replaceChild(newItem, form);

    }, 3000);



});

