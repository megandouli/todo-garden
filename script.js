

$(function () {

    var tasksList = new Array();

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

        function getList() {
            console.log("addListItem");
            document.getElementById("taskInput").value = "";
            var ul = document.getElementById("todo-listUl");
    
            addUI(ul, value, 1)
        }

        function addListItem(value) {
            console.log("addListItem");
            document.getElementById("taskInput").value = "";
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
            }}
    
    });
})