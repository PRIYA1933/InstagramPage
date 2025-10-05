 let likesicon=document.getElementById('likesicon');
    let likes_display=document.getElementById('likes_display');
          let likes=localStorage.getItem('likes')?localStorage.getItem('likes'):1;
      localStorage.setItem('likes',likes)
      likes_display.textContent=likes;
       likesicon.addEventListener('click',()=>{
        likes++;
        likes_display.textContent=likes;
        //after clicking whatever the count it will be stored, not set to 1
        localStorage.setItem('likes',likes)
      })
      likesicon.addEventListener('click',()=>{
        likesicon.classList.remove("bi-heart");
       likesicon.classList.add("bi-heart-fill"); // add filled heart
       likesicon.style.color = "red";            // make it red
      })
    
        let Commenticon=document.getElementById('Commenticon');
    let comment=document.getElementById('comment');
          let count=localStorage.getItem('count')?localStorage.getItem('count'):1;
      localStorage.setItem('count',count)
      comment.textContent=count;
       Commenticon.addEventListener('click',()=>{
        count++;
        comment.textContent=count;
        //after clicking whatever the count it will be stored, not set to 1
        localStorage.setItem('count',count)
      })
      let Postphoto=document.getElementById('Postphoto');
       Postphoto.addEventListener('dblclick',()=>{
        likes++;
        likes_display.textContent=likes;
        //after clicking whatever the count it will be stored, not set to 1
        localStorage.setItem('likes',likes)
      })
      Postphoto.addEventListener('dblclick',()=>{
        likesicon.classList.remove("bi-heart");
       likesicon.classList.add("bi-heart-fill"); // add filled heart
       likesicon.style.color = "red";            // make it red
      })
    