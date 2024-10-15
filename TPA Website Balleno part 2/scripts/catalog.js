
const users = [
    {
        id: 1,
        nickname: 'Aulner',
        consultedBy: 'Jerich Alegro',
        cause: 'Nabuntis og sayo',
        receivedAt: '25-02-2024 10:39:43'
    },
    {
        id: 2,
        nickname: 'Chanmar Duroha',
        consultedBy: 'Honey Jane',
        cause: 'Batang Ama',
        receivedAt: '25-02-2024 10:39:43'
    },
    {
        id: 3,
        nickname: 'Harold James S. Balleno',
        consultedBy: 'John Mark Ramos',
        cause: 'Batang Ama',
        receivedAt: '25-02-2024 10:39:43'
    }
   
];


function showModal(userId) {
    const user = users.find(u => u.id === userId)

    if (user) {
        
        document.querySelector('#userModal .user-logo').src = "pictures/user.png"; 
        document.getElementById('userId').textContent = user.id;
        document.getElementById('userNickname').textContent = user.nickname;
        document.getElementById('userConsultedBy').textContent = user.consultedBy;
        document.getElementById('userCause').textContent = user.cause;

        
        document.getElementById("userModal").style.display = "block";
    } else {
        console.error('User not found');
    }
}



function closeModal() {
    document.getElementById("userModal").style.display = "none";
}
