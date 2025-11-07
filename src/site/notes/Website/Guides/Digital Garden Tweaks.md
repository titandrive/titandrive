---
{"dg-publish":true,"dg-path":"Guides/Digital Garden Tweaks.md","dg-permalink":"guides/dgtweaks","permalink":"/guides/dgtweaks/","title":"Digital Garden Tweaks","tags":["digitalgarden"],"created":"2025-11-06T19:35:42.324-08:00","updated":"2025-11-06T20:36:20.689-08:00"}
---

I have made some minor modifications to the Digital Garden template that I wanted to share here. They aren't anything crazy but just a few things that I think improve the usability of the website. 
- [[Website/Guides/Digital Garden Tweaks#Zoombox\|Zoombox]]
- [[Website/Guides/Digital Garden Tweaks#Contact form\|Contact Form]]
## Zoombox
You may have noticed that if you click on an image on my site, it pops up and zooms in so you can see it better. This is not a default behavior and requires a few .css and .js additions. 

You will have to add three files in the below directories. The docs [layout](https://dg-docs.ole.dev/advanced/adding-custom-components/) specific locations to put .css and .js so that it will survive template [updates](https://dg-docs.ole.dev/getting-started/06-updating-the-template/). 

Navigate to the Code section of your repo in Github. Place the following snippets in their respective directories and commit the changes. Some of the directories may not exist so you will have to create them first. Once you have added all three, refresh your page and you should have Zoombox! 

- src/site/scripts/zoombox.js
- src/site/styles/user/zoombox.css
- src/site/_includes/components/user/common/footer/zoombox.njk

> [!success] Hard Refresh in Chrome
> Cmd + Shift + R in Chrome will do a hard refresh of a site and clear any site data. If Zoombox doesn't immediately work, try this!

> [!Code]- zoombox.js
> 
> ```
> document.addEventListener("click", (e) => {
>   const target = e.target;
>   const node = target.closest("img"); // match current template output
>   if (!node) return;
> 
>   if (node.classList.contains("zoomed")) {
>     node.classList.remove("zoomed");
>   } else {
>     document.querySelectorAll("img.zoomed").forEach((el) => el.classList.remove("zoomed"));
>     node.classList.add("zoomed");
>   }
> });
> ```
> 

> [!code]- zoombox.css
> 
> ```
> /* --- Image zoom (force override of any base styles) --- */
> 
> /* Default state */
> img {
>   display: inline-block !important;
>   overflow: visible !important;
>   position: relative !important;
>   text-align: center !important;
>   margin: 1rem auto !important;
> 
>   cursor: zoom-in !important;
>   transition: transform 0.25s ease !important;
>   transform: scale(1) !important;
>   transform-origin: center center !important;
> }
> 
> /* Remove all hover transforms from upstream CSS */
> img:hover {
>   transform: none !important;
> }
> 
> /* Zoomed state */
> img.zoomed {
>   transform: scale(1.4) !important;
>   cursor: zoom-out !important;
>   position: relative !important;
>   z-index: 9999 !important;
> }
> 
> /* Optional captions */
> figcaption {
>   font-size: 0.85rem !important;
>   color: var(--muted-foreground, #888) !important;
>   margin-top: 0.4rem !important;
>   text-align: center !important;
> }
> ```
> 

> [!code]- zoombox.njk
> 
> ```
> <script src="/scripts/zoombox.js"></script>
> ```

# Contact form
## Formspree
I wanted to create a contact [[Website/Contact\|form]] for the website. I did this by using [Formspree](https://formspree.io/) and some simple .css. The benefit of using Formspree is that you don't have to directly expose your email address on the page and subject it to spambots. 

First, create an account on Formspree. Once you have an account, create a new form.

![Digital_Garden_Tweaks-1spgw2-001.png|300](/img/user/Apps/Attachments/Digital_Garden_Tweaks-1spgw2-001.png)

Once you create a form, it will give you an endpoint url. Copy that as we will need it for the next step. 

![Digital_Garden_Tweaks-4h2bsp-002.png|500](/img/user/Apps/Attachments/Digital_Garden_Tweaks-4h2bsp-002.png)

## Contact Page
Create a new note in Obsidian to put your contact form. Insert your Digital Garden [[Website/Guides/Digital Garden and Obsidian#Step 7 Declaring frontmatter\|frontmatter]]. Then paste the below html snippet into the body of your note. Make sure to input your endpoint url into the appropriate spot in the first line of the snippet. 

> [!success] Source Mode
> Once you paste the html code, it will likely transform from html into an actual form and make it hard to edit the code. If you click the ... menu in the top right of Obsidian and select "source mode" it will show you the bare code so you can edit it. 
> ![Digital_Garden_Tweaks-1guobc-003.png|250](/img/user/Apps/Attachments/Digital_Garden_Tweaks-1guobc-003.png)
> 

> [!NOTE]- Contact form html
> 
> ```
> <form action="INSERT_ENDPOINT_HERE" method="POST" class="contact-form">
>   <label>Your Name
>     <input type="text" name="name" required>
>   </label>
>   <label>Your Email
>     <input type="email" name="_replyto" required>
>   </label>
>   <label>Message
>     <textarea name="message" rows="5" required></textarea>
>   </label>
>   <button type="submit">Send</button>
> </form>
> ```
> 

Once you have created your note and entered your endpoint url, go ahead and publish it to Digital Garden. Once the page loads, you will notice it's kind of ugly. Let's fix that next. 
## .CSS Magic

Create a new .css file at `src/site/styles/user/contact.css`

Paste the following snippet in the file and commit the change. Once it's deployed, refresh your page and it will look much better! 

> [!contact.css]-
> 
> ```
> /* --- Contact form styling --- */
> .contact-form {
>   display: flex;
>   flex-direction: column;
>   gap: 1rem;
>   max-width: 500px;
>   margin: 2rem auto;
>   background: var(--background-secondary);
>   padding: 1.5rem;
>   border-radius: 1rem;
>   box-shadow: 0 0 8px rgba(0,0,0,0.15);
> }
> 
> .contact-form label {
>   display: flex;
>   flex-direction: column;
>   font-weight: 600;
>   color: var(--text-normal);
> }
> 
> .contact-form input,
> .contact-form textarea {
>   margin-top: 0.4rem;
>   padding: 0.6rem;
>   border-radius: 0.5rem;
>   border: 1px solid var(--background-modifier-border);
>   background: var(--background-primary);
>   color: var(--text-normal);
>   font-size: 1rem;
> }
> 
> .contact-form textarea {
>   resize: vertical;
> }
> 
> .contact-form button {
>   padding: 0.8rem;
>   border: none;
>   border-radius: 0.5rem;
>   background: var(--interactive-accent);
>   color: white;
>   font-weight: 600;
>   cursor: pointer;
>   transition: background 0.2s ease;
> }
> 
> .contact-form button:hover {
>   background: var(--interactive-accent-hover);
> }
> 
> ```
> 
