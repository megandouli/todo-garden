$(function () {
    var tasksList = new Array();
    var learnList = new Array();


    chrome.storage.sync.get(['list1'], function (val) {
        if (val.list1.length > 0)
            tasksList = val.list1;
        console.log("val.list1 :" + val.list1);
        //displaying the old items
        for (var i = 0; i < tasksList.length; i++) {
            addListItem(tasksList[i]);
        }
    })

    chrome.storage.sync.get(['list2'], function (val) {
        if (val.list2.length > 0)
            learnList = val.list2;
        console.log("val.list2 :" + val.list2);

        //displaying the old items
        for (var i = 0; i < learnList.length; i++) {
            addList2Item(learnList[i]);
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


    $('#addButtonLearn').click(function () {
        var newLearn = $('#learnItemInput').val();
        // if(tasksList.length>0)
        //adding the new item to tasklist array
        learnList.push(newLearn);
        console.log("learnList under click :" + learnList);

        addList2Item(newLearn);
        //adding the new list back to chrome storage
        chrome.storage.sync.set({
            'list2': learnList
        })
    });

    function addListItem(value) {
        console.log("addListItem");
        document.getElementById("taskInput").value = "";
        var ul = document.getElementById("todo-listUl");

        addUI(ul, value, 1)
    }

    function addList2Item(value) {
        console.log("addList2Item");
        document.getElementById("learnItemInput").value = "";
        var ul = document.getElementById("listUl");

        addUI(ul, value, 2)
    }


})