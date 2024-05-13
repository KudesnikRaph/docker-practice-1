document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const saveBtn = document.getElementById('saveBtn');
    const nicknameDisplay = document.getElementById('nickname');
    const notification = document.getElementById('notification');
  
    let currentNickname = '';
  console.log(currentNickname);
    generateBtn.addEventListener('click', () => {
        fetch('http://localhost:3000/api/names')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch random name');
                }
                return response.json();
            })
            .then(data => {
                currentNickname = data.name;
                nicknameDisplay.textContent = currentNickname;
            })
            .catch(error => {
                console.error('Error fetching random name:', error.message);
            });
    });
  
    saveBtn.addEventListener('click', () => {
        if (currentNickname) {
            fetch('http://localhost:3000/api/savenames', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: currentNickname })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to save nickname');
                }
                console.log('Nickname saved successfully!');
                showNotification();
            })
            .catch(error => {
                console.error('Error saving nickname:', error.message);
            });
        } else {
            console.error('No nickname to save');
        }
    });
  
    function showNotification() {
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000); 
    }
});
