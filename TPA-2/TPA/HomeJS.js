// Like Functions
document.querySelectorAll('.heart-btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.innerHTML === '<i class="fi fi-rs-heart"></i>') {
            this.innerHTML = '<i class="fi fi-ss-heart"></i>';  // Like functionality
        } else {
            this.innerHTML = '<i class="fi fi-rs-heart"></i>';  // Unlike functionality
            
        }
    });
});

// Like Count Functions
let likeCount = 1600; 
let unliked = false;
    document.getElementById('likeBtn').addEventListener('click', function() {
        if (unliked) { likeCount--; // Increment like count
        document.getElementById('likeCount').innerHTML = `<i class="fi fi-rs-heart"></i>`; // Update the like display
        } else {
            likeCount ++;
            document.getElementById('likeCount').innerHTML = '<i class="fi fi-ss-heart"></i>';
        }
    
        document.getElementById('likeCount').innerHTML = `<i class="fi fi-rs-heart"></i>${likeCount.toLocaleString()}`;
    
        unliked =!unliked;
    });
    
    document.getElementById('likeBtn2').addEventListener('click', function() {
        if (unliked) { likeCount--; // Increment like count
        document.getElementById('likeCount2').innerHTML = `<i class="fi fi-rs-heart"></i>`; // Update the like display
        } else {
            likeCount ++;
            document.getElementById('likeCount2').innerHTML = '<i class="fi fi-ss-heart"></i>';
        }
    
        document.getElementById('likeCount2').innerHTML = `<i class="fi fi-rs-heart"></i>${likeCount.toLocaleString()}`;
    
        unliked =!unliked;
    });
//-----------------------------------------------------------------------------------------------------------------------------//
    

//Comment Functions on Comment1
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
        commentsList.appendChild(commentItem); // Add new comment to list
        document.getElementById('commentInput').value = ''; // Clear the input field

        // Update the comment count (for demo purposes, let's assume the initial count is 1300)
        let commentCount = 1300 + commentsList.children.length;
        document.getElementById('commentCount').innerHTML = `<i class="fi fi-rr-comment-alt-middle"></i>${commentCount.toLocaleString()}`;
    } else {
        alert('Please enter a comment');
    }
});
//Comment Functions on Comment2
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
        commentsList.appendChild(commentItem); // Add new comment to list
        document.getElementById('commentInput2').value = ''; // Clear the input field

        // Update the comment count (for demo purposes, let's assume the initial count is 1300)
        let commentCount = 1300 + commentsList.children.length;
        document.getElementById('commentCount2').innerHTML = `<i class="fi fi-rr-comment-alt-middle"></i>${commentCount.toLocaleString()}`;
    } else {
        alert('Please enter a comment');
    }
});
//-------------------------------------------------------------------------------------------------------------------------------------------//

// Share Functions
document.getElementById('shareBtn').addEventListener('click', function() {
    document.getElementById('shareModal').style.display = 'flex';
});

// Close the share modal
document.getElementById('closeShareModal').addEventListener('click', function() {
    document.getElementById('shareModal').style.display = 'none';
});

// Copy link functionality2
document.getElementById('copyLinkBtn').addEventListener('click', function() {
    const shareLink = document.getElementById('shareLink');
    shareLink.select();
    shareLink.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy'); // Copy the link
    alert('Link copied to clipboard!');
});

document.getElementById('shareBtn2').addEventListener('click', function() {
    document.getElementById('shareModal2').style.display = 'flex';
});

// Close the share modal2
document.getElementById('closeShareModal2').addEventListener('click', function() {
    document.getElementById('shareModal2').style.display = 'none';
});

// Copy link functionality2
document.getElementById('copyLinkBtn2').addEventListener('click', function() {
    const shareLink = document.getElementById('shareLink2');
    shareLink.select();
    shareLink.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy'); // Copy the link
    alert('Link copied to clipboard!');
});
//-----------------------------------------------------------------------------------------------------------------------//


//Article Modal
document.getElementById('articleBtn').addEventListener('click', function() {
    document.getElementById('articleModal').style.display = 'flex';
});

// Close the article modal
document.getElementById('closeArticleModal').addEventListener('click', function() {
    document.getElementById('articleModal').style.display = 'none';
});

//Article Modal2
document.getElementById('articleBtn2').addEventListener('click', function() {
    document.getElementById('articleModal2').style.display = 'flex';
});

// Close the article modal2
document.getElementById('closeArticleModal2').addEventListener('click', function() {
    document.getElementById('articleModal2').style.display = 'none';
});

//Article Modal3
document.getElementById('articleBtn3').addEventListener('click', function() {
    document.getElementById('articleModal3').style.display = 'flex';
});

// Close the article moda3
document.getElementById('closeArticleModal3').addEventListener('click', function() {
    document.getElementById('articleModal3').style.display = 'none';
});


//--------------------------------------------------------------------------------------------------------------------------//

