const addTask = document.getElementById('userId')

const newTask = async (e) => {
    e.preventDefault();

   const task = document.getElementById('task').value; 
   const user_id = Number(document.getElementById('userId').dataset.user);

   console.log(user_id)
   console.log(task)

    if (task) {
        const response = await fetch('/api/tasks/', {
            method: 'POST',
            body: JSON.stringify({task, user_id}),
            headers: {'Content-Type': 'application/json'}
        })

        if(response.ok) {
            document.location.replace('/todo')
        } else {
            alert('failed to post')
        }

    }

}

// const goToEdit = (e) => {
//     e.preventDefault();
//     console.log('click')
//     const blogId = Number(e.target.parentNode.dataset.blogid)
//     document.location.replace('/edit/' + blogId)
// }

// window.addEventListener('DOMContentLoaded', (event) => {
//     document.querySelectorAll("#edit-btn").forEach(el => {
//         el.addEventListener('click', goToEdit);
//     });
// });

addTask.addEventListener('submit', newTask)