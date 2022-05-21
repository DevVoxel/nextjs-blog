---
title: 'Welcome to My Blog!'
date: '2022-05-18'
---

Welcome to basically my first blog post!

It has been a while since I have revisited this website however I am coming back to it so I can make some needed modifications.  I have a list of things I would like to add, however that will be done in another post.  

The first few initial changes I have made are, that I have added support for every translated post! Basically every time I create a post, there will be a French translation included (I have very basic knowledge of the French language).  This will be accessible through the main post list, with there being a link on the right labeled "**FR**".  This can be done easily by adding the "**-FR**" condition at the end of every translated post.  This can be done like so using the **Link component**:

```javascript
<Link href={`/posts/${id}-FR`}> 
    <a> FR </a>
</Link>
```

Each post has a correlated ID when created.  The translated posts share the same ID as their counterparts, but with a slight change.  Small change, but simple and fun.  Eventually, I would like to add support for a translate button on each post.  This would effectively eliminate the need for either:

- A separate link for translated posts.

- Two seperate post files.

But would also make translation faster due to the static site generation (getStaticProps).  Next.js will pre-render the French translation as a part of the initial build time using the props that are returned.  Otherwise, we could use getServerSideProps() to render the translation when the request is made.  This could be helpful if the website seems to slow down because of the pre-rendering, although these are only markdown files parsed into HTML and read, so there should not be much trouble.

---

Otherwise, I need to change the navigation menu to be more responsive and support mobile devices.  This will probably be done by changing the navigation menu into its own component and using a media query to adjust for other devices.  Once that is done, I will pass it back into the layout as a component so that it does not interfere with much.  Although on that topic I have noticed that I am writing more JavaScript than I am HTML.  Using components and other methods to get the layouts and proper looks of pages that I need.  It's interesting and definitely a change from where I started. 

---

I think that is a good start for a first blog post.  Maybe I will have to add a comment section so that way I can receive some feedback, but who knows!  I have a lot of updates that I need to do with this project, but that is okay!  I look forward to working more on it and making it look a bit better.

    **- Aiden Smith**
