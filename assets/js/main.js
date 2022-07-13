// call pop up box
const postItemsAll      = document.querySelector('#postItemsAll');
const popbtn            = document.querySelector('.postbtn');
const postPopBox        = document.querySelector('#postPopBox');
const eidtPopBox        = document.querySelector('#eidtPopBox');
const closeBtn          = document.querySelector('.closeBtn');
const closeBtnedit      = document.querySelector('.closeBtneidt');
const alserbox          = document.querySelector('.alserbox');




popbtn.onclick = () => {
    postPopBox.style.display = "block"
}
closeBtn.onclick = () => {
     postPopBox.style.display = "none";
}
closeBtnedit.onclick = () => {
     eidtPopBox.style.display = "none";
}
alserbox.onclick = () => {
    const alertbtn = alserbox.querySelector('.alert-btn');
    alertbtn.style.display = "none";
}

  
//display post

const displayPost = () => {
    //get post data
    const fbPostArry = getLocalStorage('fbPost');
   
    // post loop data
  let postAll = '';
  
  if (!fbPostArry || fbPostArry.length == 0) {
    postAll = `<div class="postArea">
              <div class="notPost">
                <p>no post found</p>
              </div>
            </div>`;
  }
  if (fbPostArry) {
      
    fbPostArry.map((item,index) => {
        postAll += ` <div class="postitemarea">
            <div class="postItemBox">
              <div class="postITemContat">
                <div class="user">
                  <div class="userp">
                    <div class="ppf">
                      <img src="${item?.userPhoto}" alt="" />
                    </div>
                    <div>
                      <h6>${item?.name}</h6>
                      <p>2h. <i class="fa fa-cog" aria-hidden="true"></i></p>
                    </div>
                  </div>
                  <div class="ThreeDot">
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                     <div class="tolbox">
                         <ul>
                            <li><a edit_index="${index}" href="">Edit post</a></li>
                            <li><a delate_index="${index}" href="">Move to trash</a></li>
                        </ul>
                     </div>
                  </div>
                </div>
                <div class="userContent">
                  <p>
                    ${item?.userContent}
                  </p>
                </div>
              </div>
              <div class="postItemImage">
                <img
                  src="${item?.bgPhoto}"
                  alt=""
                />
              </div>
              <div class="postItemFooter">
                <div class="likeCounter">
                  <div class="likeCounterLeft">
                    <div class="likeIcons">
                      <img
                        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                        alt=""
                      />
                    </div>
                    <span>82K</span>
                  </div>
                  <div class="commentRight">
                    <p>457 Comments</p>
                  </div>
                </div>
                <div class="linkBox">
                  <div class="setLike">
                    <button>
                      <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Like
                    </button>
                  </div>
                  <div class="setComment">
                    <button>
                      <i class="fa fa-comment-o" aria-hidden="true"></i> Comment
                    </button>
                  </div>
                  <div class="setShree">
                    <button>
                      <i class="fa fa-share" aria-hidden="true"></i> Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>`;
    });
  }
    postItemsAll.innerHTML = postAll;
}
displayPost();

//Edit and delate Item


const editForm = document.querySelector('#editForm');

postItemsAll.onclick = (e) => {
    e.preventDefault();

    if (e.target.hasAttributes('edit_index')) {
        const editIndex = e.target.getAttribute('edit_index');
        if(editIndex){
            eidtPopBox.style.display = "block";

            const dataAll = getLocalStorage('fbPost');
            const getData = dataAll[editIndex];

            editForm.innerHTML = `<div class="popbody">
                <div>
                <label for="">Name</label>
                <input name="name" value="${getData.name}" type="text" />
                <input name="index" value="${editIndex}" type="hidden" />
                </div>
                <div>
                <label for="">UserPhoto</label>
                <input name="userPhoto" value="${getData.userPhoto}" type="text" />
                </div>
                <div>
                <label for="">BG image</label>
                <input name="bgPhoto" value="${getData?.bgPhoto}" type="text" />
                </div>
                <div>
                <label for="">Content</label>
                <textarea name="userContent" id="" cols="30" rows="10">${getData?.userContent}</textarea>
                </div>
                <div>
                <input class="submitBtn" type="submit" value="POST" />
                </div>
            </div>`;
        } 
        
    }

    if (e.target.hasAttributes('delate_index')) {
        const delateIndex = e.target.getAttribute('delate_index');
        if (delateIndex) {
            let dataLs = getLocalStorage('fbPost');
            dataLs.splice(delateIndex,1);
            updateLocalStorage('fbPost', dataLs);
            displayPost();
        }
        
    }
     
}

//edit form submit
const Editbox = document.querySelector('.Editbox');
editForm.onsubmit = (e) => {
    e.preventDefault();

    const editform = new FormData(e.target);
    const { name,index,userContent,userPhoto,bgPhoto} = Object.fromEntries(editform.entries());

    if (!name || !userPhoto) {
        Editbox.innerHTML = alertShow('All Field is required!');

    } else {

       let dataAll = getLocalStorage('fbPost');
       dataAll[index] = {name,userContent,userPhoto,bgPhoto};
        updateLocalStorage('fbPost', dataAll);
        eidtPopBox.style.display = "none";
       displayPost(); 
        
    }


}

//Create Post
const postForm = document.getElementById('postForm');

postForm.onsubmit = (e) => {
    e.preventDefault();

    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    
    const {name, userPhoto, bgPhoto, userContent} = Object.fromEntries(form_data.entries());

    if (!name || !userPhoto) {
       alserbox.innerHTML = alertShow('All Field is required!');
    } else {
        SetLocalStorage('fbPost', data);
        e.target.reset();
        postPopBox.style.display = "none";
        displayPost();
    }
    
}
