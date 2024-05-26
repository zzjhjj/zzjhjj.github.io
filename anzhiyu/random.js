var posts=["posts/2.html","posts/3.html","posts/4.html","posts/5.html","posts/6.html","posts/7.html","posts/8.html","posts/9.html","posts/10.html","posts/1.html","posts/t1.html","posts/t2.html","posts/t3.html","posts/t4.html","posts/t5.html","posts/t6.html","posts/t7.html","posts/t8.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };