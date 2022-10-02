

$(function () {

    var tasksList = new Array();


    chrome.storage.sync.get(['list1'], function (val) {
        if (val.list1.length > 0)
            tasksList = val.list1;
        console.log("val.list1 :" + val.list1);
        //displaying the old items
        for (var i = 0; i < tasksList.length; i++) {
            addListItem(tasksList[i]);
        }
    })


    $('#addButtonTask').click(function () {

        var newTask = $('#taskInput').val();
        //adding the new item to tasklist array
        tasksList.push(newTask);
        console.log("tasksList under click :" + tasksList);
        addListItem(newTask);
        //adding the new list back to chrome storage
        chrome.storage.sync.set({
            'list1': tasksList
        })
    
    });

    function addListItem(value) {
        console.log("addListItem");
        var ul = document.getElementById("todo-listUl");
        addUI(ul, value, 1)
    }

    function addUI(ul, value, num) {
        var li = document.createElement("li");
        $("li").addClass("list-group-item");
        li.appendChild(document.createTextNode(value));

        if (value === '') {
            //do nothing
            //alert("You must write something!");
        } else {
            ul.appendChild(li);
        }

    }
})