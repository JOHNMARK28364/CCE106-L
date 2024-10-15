
document.querySelectorAll('.heart-btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.innerHTML === '<i class="fi fi-rs-heart"></i>') {
            this.innerHTML = '<i class="fi fi-ss-heart"></i>';  // Like functionality
        } else {
            this.innerHTML = '<i class="fi fi-rs-heart"></i>';  // Unlike functionality
            
        }
    });
});


let likeCount = 1600; 
let unliked = false;
    document.getElementById('likeBtn').addEventListener('click', function() {
        if (unliked) { likeCount--; 
        document.getElementById('likeCount').innerHTML = `<i class="fi fi-rs-heart"></i>`;
        } else {
            likeCount ++;
            document.getElementById('likeCount').innerHTML = '<i class="fi fi-ss-heart"></i>';
        }
    
        document.getElementById('likeCount').innerHTML = `<i class="fi fi-rs-heart"></i>${likeCount.toLocaleString()}`;
    
        unliked =!unliked;
    });
    
    document.getElementById('likeBtn2').addEventListener('click', function() {
        if (unliked) { likeCount--;
        document.getElementById('likeCount2').innerHTML = `<i class="fi fi-rs-heart"></i>`;
        } else {
            likeCount ++;
            document.getElementById('likeCount2').innerHTML = '<i class="fi fi-ss-heart"></i>';
        }
    
        document.getElementById('likeCount2').innerHTML = `<i class="fi fi-rs-heart"></i>${likeCount.toLocaleString()}`;
    
        unliked =!unliked;
    });
//-----------------------------------------------------------------------------------------------------------------------------//
    


document.getElementById('commentBtn').addEventListener('click', function() {
    const commentSection = document.getElementById('commentSection');
    if (commentSection.style.display === 'none') {
        commentSection.style.display = 'block'; 
    } else {
        commentSection.style.display = 'none';
    }
});

document.getElementById('postCommentBtn').addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput').value;
    if (commentInput) {
        const commentsList = document.getElementById('commentsList');
        const commentItem = document.createElement('li');
        commentItem.textContent = commentInput;
        commentsList.appendChild(commentItem); 
        document.getElementById('commentInput').value = '';

  
        let commentCount = 1300 + commentsList.children.length;
        document.getElementById('commentCount').innerHTML = `<i class="fi fi-rr-comment-alt-middle"></i>${commentCount.toLocaleString()}`;
    } else {
        alert('Please enter a comment');
    }
});

document.getElementById('commentBtn2').addEventListener('click', function() {
    const commentSection = document.getElementById('commentSection2');
    if (commentSection.style.display === 'none') {
        commentSection.style.display = 'block'; 
    } else {
        commentSection.style.display = 'none';
    }
});

document.getElementById('postCommentBtn2').addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput2').value;
    if (commentInput) {
        const commentsList = document.getElementById('commentsList2');
        const commentItem = document.createElement('li');
        commentItem.textContent = commentInput;
        commentsList.appendChild(commentItem); 
        document.getElementById('commentInput2').value = ''; 

        
        let commentCount = 1300 + commentsList.children.length;
        document.getElementById('commentCount2').innerHTML = `<i class="fi fi-rr-comment-alt-middle"></i>${commentCount.toLocaleString()}`;
    } else {
        alert('Please enter a comment');
    }
});
//-------------------------------------------------------------------------------------------------------------------------------------------//


document.getElementById('shareBtn').addEventListener('click', function() {
    document.getElementById('shareModal').style.display = 'flex';
});


document.getElementById('closeShareModal').addEventListener('click', function() {
    document.getElementById('shareModal').style.display = 'none';
});


document.getElementById('copyLinkBtn').addEventListener('click', function() {
    const shareLink = document.getElementById('shareLink');
    shareLink.select();
    shareLink.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Link copied to clipboard!');
});

document.getElementById('shareBtn2').addEventListener('click', function() {
    document.getElementById('shareModal2').style.display = 'flex';
});


document.getElementById('closeShareModal2').addEventListener('click', function() {
    document.getElementById('shareModal2').style.display = 'none';
});


document.getElementById('copyLinkBtn2').addEventListener('click', function() {
    const shareLink = document.getElementById('shareLink2');
    shareLink.select();
    shareLink.setSelectionRange(0, 99999);
    document.execCommand('copy'); 
    alert('Link copied to clipboard!');
});
//-----------------------------------------------------------------------------------------------------------------------//



document.getElementById('articleBtn').addEventListener('click', function() {
    document.getElementById('articleModal').style.display = 'flex';
});


document.getElementById('closeArticleModal').addEventListener('click', function() {
    document.getElementById('articleModal').style.display = 'none';
});


document.getElementById('articleBtn2').addEventListener('click', function() {
    document.getElementById('articleModal2').style.display = 'flex';
});


document.getElementById('closeArticleModal2').addEventListener('click', function() {
    document.getElementById('articleModal2').style.display = 'none';
});


document.getElementById('articleBtn3').addEventListener('click', function() {
    document.getElementById('articleModal3').style.display = 'flex';
});


document.getElementById('closeArticleModal3').addEventListener('click', function() {
    document.getElementById('articleModal3').style.display = 'none';
});


//--------------------------------------------------------------------------------------------------------------------------//

