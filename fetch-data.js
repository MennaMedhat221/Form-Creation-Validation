document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
});
async function fetchUserData() {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try {
        const response = await fetch(apiUrl);
        if(!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const users = await response.json();
        dataContainer.innerHtml = '';
        const userList = document.createElement('ul');
        users.forEach((user) => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        dataContainer.appendChild(userList);
    } catch (error) {
       dataContainer.textContent = 'Failed to fetch data';
    }
}
