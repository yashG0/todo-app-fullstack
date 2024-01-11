// @ts-nocheck
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {

    if (inputBox.value === '') {
        alert('You must write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;

        let span1 = document.createElement('span');
        span1.innerHTML = '\u00d7';
        span1.addEventListener('click', () => {
            li.remove();
        });

        let span2 = document.createElement('span');
        span2.className = 'edit-button';
        span2.innerHTML = '\u270e';
        span2.addEventListener('click', () => {
            // Implement edit functionality here
            console.log('Edit button clicked');
        });

        li.appendChild(span1);
        li.appendChild(span2);

        listContainer.appendChild(li);



        const url = "http://localhost:5500/save";
        const payload = {
            text: inputBox.value
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            },
            body: JSON.stringify(payload)
        }).then(response => response.json()).then(data => console.log(data)).catch(error => console.error('Error:', error));

        inputBox.value = '';

    }
}

listContainer.addEventListener('click', (e) => {
    const targetTagName = e.target.tagName;

    if (targetTagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (targetTagName === 'SPAN' && e.target.classList.contains('edit-button')) {
        // Handle edit button click
        console.log('Edit button clicked');
    } else if (targetTagName === 'SPAN' && !e.target.classList.contains('edit-button')) {
        e.target.parentElement.remove();
    }
}, false);

const getTodo = async () => {
    try {
        const res = await fetch("http://localhost:5500/");
        const data = await res.json();

        // Clear existing content in listContainer
        listContainer.innerHTML = '';

        // Handle the data here
        console.log("Fetch successful");
        data.forEach((item) => {
            let li = document.createElement('li');
            li.innerHTML = item.text;

            let span1 = document.createElement('span');
            span1.innerHTML = '\u00d7';
            span1.addEventListener('click', () => {
                li.remove();
                deleteTask(data._id);

            });

            let span2 = document.createElement('span');
            span2.className = 'edit-button';
            span2.innerHTML = '\u270e';
            span2.addEventListener('click', () => {
                // Implement edit functionality here
                console.log('Edit button clicked');
            });

            li.appendChild(span1);
            li.appendChild(span2);

            listContainer.appendChild(li);
        });
    } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
    }
}

function deleteTask() {


    const url = "http://localhost:5500/delete";
    const payload = {
        text: inputBox._id
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
        },
        body: JSON.stringify(payload)
    }).then(response => response.json()).then(data => console.log(data)).catch(error => console.error('Error:', error));

    inputBox.value = '';


}

getTodo();