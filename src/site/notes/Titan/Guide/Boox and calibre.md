---
{"dg-publish":true,"dg-path":" /Boox and calibre.md","permalink":"//boox-and-calibre/","title":"Calibre & Boox: Journey to the perfect ereader","updated":"2025-11-02T17:41:12.560-08:00"}
---

I have been an e-book reader since for nearly as long as I have been a reader. I wish I could remember what model it was, but my first ereader was some ancient Sony device. In fact, I  distinctly [Digital Fortress](https://en.wikipedia.org/wiki/Digital_Fortress) being one of the first books I read on it. That started a lifelong fondness not only for reading but also gadgets. 

Since those early days, I have pretty much always had a Kindle by my side and keep my retired Paperwhites on my bookshelf, next to the books that they dutifully replaced. 

Although I have loved my kindles, they have always felt lacking to me. My main complaints:

- Due to nerve damage in both of my elbows, I rely heavily on page turners when I read. The problem is that Kindle's bluetooth stack is funky and will only communicate with audio devices. Because of that, I have to rely on the clip-on style page turners ([this](https://www.amazon.com/dp/B0CT8YJHMX?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_9) is the one I like). Although they get the job done, they are extremely annoying and finicky. They obscure the page, oftentimes don't register clicks, and are limited to paging forward. 
- The Kindle itself is extremely locked down. Unless you want to [jailbreak](https://kindlemodding.org/jailbreaking/) your Kindle, you cant do much to customize it. You are stuck using Kindle's stock reader, which is extremely limited as far as changing things like margins, spacing, and font. Kindle has extremely large margins, the wasted space drives me nuts. 
- Finally, you are limited to reading books in Amazon's proprietary forma. You can't read epubs without some sort of conversion like [Calibre](https://calibre-ebook.com/).  

The final straw for me was when Amazon finally shut off the ability for you to [download](https://goodereader.com/blog/kindle/amazon-removing-download-and-transfer-on-the-kindle-feb-26th) or transfer Kindle books. I think this solidified in my mind that I never really owned my Kindle books. 

### Thus started my journey to the perfect ereader. 

At the same time I began endlessly researching ereaders, I also tried to figure out the best way to reclaim the hundreds (if not thousands) of dollars I had spent on ebooks that I could only read on Kindles. 

That is how I came upon Calibre for the first time. Calibre is an ebook management software platform. It can do anything from organizing your ebook library to converting and syncing ebooks to various readers. I had tried it years ago but its dreadful interface (typically ran over VNC and not mobile friendly at all) turned me off immediately. 

But then I found [Calibre Web](https://github.com/janeczku/calibre-web)(CW) and [Calibre Web Automated](https://github.com/crocodilestick/Calibre-Web-Automated) (CWA) and *everything changed.* Due to Calibre's limitations, many people run CW alongside Calibre. CW gives Calibre a friendly, albeit limited, web interface to do some of the basic tasks such as sending books to devices or organizing your library.

CWA on the other hand aims to be a full Calibre replacement, in the same easy to use web interface. The main feature that CWA offers, that is a complete game changer for me, is automatic ingestion and conversion:

- If you drop a file (.epub, .pdf, .mobi, etc) into the ingestion folder, it atomically gets scooped up by CWA. It will automatically convert the file to .epub, if necessary, and then add it into your library. Its like magic. 

I started ingesting and converting my ebook library into CWA and fell in love. I spent an embarrassing amount of time organizing and futzing with my book library and knew I would never go back to Amazon. 

![Boox_and_calibre-xk22xx-008.webp|700](/img/user/Apps/Attachments/Boox_and_calibre-xk22xx-008.webp)

Not only is the CWA interface a joy to use, it also works perfectly with the wonderful [Calibre Web Companion](https://github.com/doen1el/calibre-web-companion) android app.

s