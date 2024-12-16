document.getElementById('postForm').addEventListener('submit',function (e) {
    e.preventDefault();
  
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const newPost = document.createElement('article');
    newPost.classList.add('post')

    const postTitle = document.createElement('h1');
    postTitle.textContent=title;

    const postDate = document.createElement('p');
    postDate.classList.add('date');
    postDate.textContent=new Date().toLocaleDateString();

    const postContent = document.createElement('p');
    postContent.textContent=content;

    const readMoreButton = document.createElement('button');
    readMoreButton.textContent = 'Read More';
    readMoreButton.classList.add('read-more');
    readMoreButton.onclick = () => togglePost(newPost);

    newPost.appendChild(postTitle);
    newPost.appendChild(postDate);
    newPost.appendChild(postContent);
    newPost.appendChild(readMoreButton);

    document.querySelector('#posts').appendChild(newPost);

    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
});

function togglePost(post) {
    const moreContent = post.querySelector('.more-content');
    if (moreContent) {
        moreContent.style.display = moreContent.style.display === 'none' ? 'block' : 'none';
    } else {
        const moreContent = document.createElement('p');
        moreContent.classList.add('more-content');
        moreContent.textContent = 'This is additional content for the post.';
        post.appendChild(moreContent);
        moreContent.style.display = 'block';
    }
}


