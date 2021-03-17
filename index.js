const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const appContainer = document.getElementById('app')

// async function to retrive data from some API with error/handling
async function retrieveData(Url) {
    const fetchResponse = await fetch(Url);

    // check the response code.
    // could have check .ok prop.
    if (fetchResponse.status >= 200 && fetchResponse.status < 300) {
        // console.log('status: ', fetchResponse.status)
        const data = await fetchResponse.json()
        display(data)
    } else {
        console.log('error-code: ', fetchResponse.status)
    }
}

// function to display data on the webPage.
async function display(data) {
    // console.log(data)
    data.slice(0, 10).forEach(
        (element) => {
            // console.log(element)
            const { id, userId, title, body } = {...element };
            // console.log(id,userId,title,body)
            const img = document.createElement('img');
            img.src = 'https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80'
            img.classList.add('photo')
            img.alt = "Photo by Pavel  Anoshin";

            const messageContainer = document.createElement('div');
            messageContainer.classList.add('post', 'container');

            const msgHeader = document.createElement('div');
            msgHeader.classList.add('msgHeader', 'container');

            const domTitle = document.createElement('h4');
            domTitle.classList.add('subtitle')

            const domMessage = document.createElement('p')
            domMessage.classList.add('text');

            const messageId = document.createElement('span');
            messageId.classList.add('message-id')

            const domUserId = document.createElement('span');
            domUserId.classList.add('user-id')

            messageId.textContent = `${id}`;
            domTitle.textContent = `${title}`;
            domMessage.textContent = `${body}`;

            msgHeader.appendChild(img)
            msgHeader.appendChild(domTitle);

            messageContainer.appendChild(msgHeader);
            messageContainer.appendChild(domMessage);
            // messageContainer.appendChild(messageId);

            appContainer.appendChild(messageContainer)
                // console.log(messageContainer.innerHTML)
        })
}

retrieveData(apiUrl)