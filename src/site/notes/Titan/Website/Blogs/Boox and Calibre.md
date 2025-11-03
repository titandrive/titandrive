---
{"dg-publish":true,"dg-path":"Blogs/Boox and Calibre.md","dg-permalink":"blogs/ereader","permalink":"/blogs/ereader/","title":"Calibre & Boox: The perfect combo","tags":["kindle","calibre","books","ereader"],"created":"2025-11-02T13:43:15.494-08:00","updated":"2025-11-02T22:07:29.132-08:00"}
---

# Intro
I have been an e-book reader since for nearly as long as I have been a reader. I wish I could remember what model it was, but my first ereader was some ancient Sony device. In fact, I distinctly remember [Digital Fortress](https://en.wikipedia.org/wiki/Digital_Fortress) being one of the first books I read on it. That started a lifelong fondness not only for reading but also gadgets. 

Since those early days, I have pretty much always had a Kindle by my side and keep my retired Paperwhites on my bookshelf, next to the books that they dutifully replaced. 

Although I have loved my kindles, they have always felt lacking to me. My main complaints:

- Due to nerve damage in both of my elbows, I rely heavily on page turners when I read. The problem is that Kindle's bluetooth stack is funky and will only communicate with audio devices. Because of that, I have to rely on the clip-on style page turners ([this](https://www.amazon.com/dp/B0CT8YJHMX?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_9) is the one I like). Although they get the job done, they are extremely annoying and finicky. They obscure the page, oftentimes don't register clicks, and are limited to paging forward. 
- The Kindle itself is extremely locked down. Unless you want to [jailbreak](https://kindlemodding.org/jailbreaking/) your Kindle, you cant do much to customize it. You are stuck using Kindle's stock reader, which is extremely limited as far as changing things like margins, spacing, and font. Kindle has extremely large margins, the wasted space drives me nuts. 
- Finally, you are limited to reading books in Amazon's proprietary forma. You can't read epubs without some sort of conversion like [Calibre](https://calibre-ebook.com/).  

The final straw for me was when Amazon finally shut off the ability for you to [download](https://goodereader.com/blog/kindle/amazon-removing-download-and-transfer-on-the-kindle-feb-26th) or transfer Kindle books. I think this solidified in my mind that I never really owned my Kindle books. 

# Thus started my journey to the perfect ereader. 

At the same time I began endlessly researching ereaders, I also tried to figure out the best way to reclaim the hundreds (if not thousands) of dollars I had spent on ebooks that I could only read on Kindles. 

That is how I came upon Calibre for the first time. Calibre is an ebook management software platform. It can do anything from organizing your ebook library to converting and syncing ebooks to various readers. I had tried it years ago but its dreadful interface (typically ran over VNC and not mobile friendly at all) turned me off immediately. 

But then I found [Calibre Web](https://github.com/janeczku/calibre-web)(CW) and [Calibre Web Automated](https://github.com/crocodilestick/Calibre-Web-Automated) (CWA) and *everything changed.* Due to Calibre's limitations, many people run CW alongside Calibre. CW gives Calibre a friendly, albeit limited, web interface to do some of the basic tasks such as sending books to devices or organizing your library.

CWA on the other hand aims to be a full Calibre replacement, in the same easy to use web interface. The main feature that CWA offers, that is a complete game changer for me, is automatic ingestion and conversion:

- If you drop a file (.epub, .pdf, .mobi, etc) into the ingestion folder, it atomically gets scooped up by CWA. It will automatically convert the file to .epub, if necessary, and then add it into your library. Its like magic. 

I started ingesting and converting my ebook library into CWA and fell in love. I spent an embarrassing amount of time organizing and futzing with my book library and knew I would never go back to Amazon. 

![Boox_and_calibre-xk22xx-008.webp|700](/img/user/Apps/Attachments/Boox_and_calibre-xk22xx-008.webp)

Not only is the CWA interface a joy to use, it also works perfectly with the wonderful [Calibre Web Companion](https://github.com/doen1el/calibre-web-companion) android app.

Now I needed to find the perfect ereader. I had a few requirements that my ideal ereader would have (in order of importance):
- Ability to connect with bluetooth pageturners 
- Compatibility with one of the popular reading apps (more on that [[#The search for the perfect reading app|later]]).
- Page turn buttons

I was initially considering the Kobo Libra series until I found that they no longer offer any black and white options in the US. I have previously tried color ereaders and was thoroughly unimpressed with the current generation Kaleido 3 color screens as they are [noticeably](https://www.reddit.com/r/kindle/comments/1g3sa4f/those_begging_kindle_to_go_color_its_worse_for/) darker then their black and white counterparts. Considering I only read books, rather then comics or manga, the tradeoff is just not worth it. This took Kobos out of the running so I bought a [Boox Go 7](https://shop.boox.com/products/go7?srsltid=AfmBOooAUa7k4hWkdaD-OQtY96djl8yHV7HtAi9HC-99RJgt9u-mKiup) as it was another popular option I had been looking at.

# The search for the perfect reading app

After turning it on for the first time, I immediately fell in love with the customizability. Since its based on Android, its endlessly customizable. The new problem was that I was overwhelmed (in a good way) with options. Now, I needed to find the perfect reading companion. Android has three main reading apps: 
- [Koreader](https://github.com/koreader/koreader)
- [Moon+ Reader](https://www.moondownload.com/)
- [Bookfusion](https://www.bookfusion.com/)
I had two things I was looking for in my perfect reading app. As mentioned above, I really wanted to be able to customize the reading experience, including custom fonts and changing spacing and padding. 

I also really wanted to be able to read on my phone and be able to sync the progress with the ereader. This was my main motivation for trying an Android based ereader, since I also have an Android phone. I would love to be able to start reading on my phone more when I have downtime, instead of picking up Reddit like I normally do. Being able to  later pick up reading where I left off on my ereader would be amazing. Thanksfully, all three of the apps were able to accomplish both of these goals. Time to narrow it down. 

## Koreader 
Koreader is probably the most popular reading app that I see mentioned frequently as it works on Jailbroken kindles, Kobos, and Android. I figured I would try that first. I immediately hated it. It is clearly designed with ereaders in mind first because the Android app is dreadful to use and has a very dated appearance. It also had an extremely [convoluted](https://www.mobileread.com/forums/showpost.php?p=4319446&postcount=1) process to set up syncing via dropbox that was the final nail in the coffin for Koreader. Because of these issues, I quickly uninstalled Koreader and began to look elsewhere. 

## Bookfusion

Next I gave Bookfusion a try. Bookfusion initially was intriguing to me because it offers a more full-featured and polished approach to reading. At its essence, its a cloud service where you upload your books to its digital library. This can be accomplished either manually or via a Calibre [plugin](https://support.bookfusion.com/hc/en-us/articles/360018852052-Installing-Using-the-BookFusion-Plugin-for-Calibre). 

There are a few [tiers](https://www.bookfusion.com/reading/pricing) of service, ranging from free to $95 a year, mainly depending on how many books you want to sync. I tried the free tier, which offers ten books. I initially really liked Bookfusion. The interface is quite nice to look at and it offers a decent amount of customizability. Most importantly, the syncing between my phone and Boox worked flawlessly. I also initially appreciated the Calibre plugin but since it only works with Calibre (not CW or CWA), I did not use it as much as I would like due to how much of a pain Calibre is to use. 

My biggest issue with Bookfusion was that its support for controllers (i.e., page turners) is janky at best. I paired it with an [8Bitdo Micro](https://www.8bitdo.com/micro/) that I had lying around as test. I could get it work so that I could page forward and back using the Micro. The problem I ran into is that as soon as I interacted with the book (for example, increasing the font size), the controller stopped working until I backed out of the book and opened it again. This got extremely annoying very quickly. 

## Over the moon(reader)
After being unimpressed with the first two apps, I next downloaded Moonreader (sorry, I refused to keep typing Moon+ Reader). Moonreader seems to inhabit the perfect middle ground between Koreader and Bookfusion. It does not rely on a cloud service and therefore there is no subscription. Instead it relies on your local storage and syncing is accomplished via either dropbox or ftp. There *is* a paid version that is a one time purchase of $10.99 that adds additional themes and such, but the free version is perfectly usable. 

I found the best way to import books into my library was via the Calibre Web Companion (CWC) app. I set CWC up so that it would download books directly into the Moonreader directory (SDCard/Books/Moonreader) and set Moonreader to automatically import any books in this directory. Therefore, as soon as I downloaded a book from CWC, it showed up in the library.

I repeated this on both my Boox and phone. I was able to then read the same book on both devices. After some initial [[Titan/Website/Blogs/Boox and Calibre#^dropbox-sync\|hiccups]], I got syncing to work via dropbox nearly perfectly. 

After spending way too much time futzing about with it, I figured it was time to actually start reading. I was quickly impressed by the level of customization available in Moonreader. Nearly every function of the reader is customizable. The basics such as padding, spacing, and fonts were of course there. It was super simple to upload my favorite font, [Jetbrains Mono](https://www.jetbrains.com/lp/mono/). But it was also easy to customize gestures and change how much, or how little, info shows in the status bar (reading progress, page location, etc). 

The final test was to try using a bluetooth controller with it and see how it compared to Bookfusion. Much like everything else with Moonreader, the level of options was vast. Moonreader, unlike Bookfusion, clearly put a lot of effort into controller support. I had no problem setting up my Micro to not only page back and forward (via left and right dpad) but also switch between day and night mode. But most importantly, page turning worked exactly as expected without any jankiness. 


![Boox_and_Calibre-oeoung-001.webp|200](/img/user/Apps/Attachments/Boox_and_Calibre-oeoung-001.webp)![Boox_and_Calibre-1m2qin-002.webp|200](/img/user/Apps/Attachments/Boox_and_Calibre-1m2qin-002.webp)![Boox_and_Calibre-rc4kek-003.webp|200](/img/user/Apps/Attachments/Boox_and_Calibre-rc4kek-003.webp)

> [!bug]- Troubleshooting dropbox syncing
>
> While trying to set up syncing, initially, I ran into a lot of bugs and issues. I wanted to share what I found to save someone else the future headache. 
> 
> Moonreader offers the option to connect directly with your Calibre Web library and download books into the reader. It also offers the option to sync books (no just reading progress) via dropbox. Don't use either of these features. I'm not sure exactly what the issue is, but something wierd happens when you let Moonreader sync the books between devices or download books from Caliber. For example, I found that if I downloaded a book to one device (via their Calibre feature or manually) and  synced the book to the other device, the book *would* show up on the second device. But it would throw a wierd error and the book would not open.  
> 
> If I downloaded the book to both devices, manually, via their calibre feature, I could not get syncing to work reliably at all.
> 
> The way to get it to sync reliably, and without issue, is to *not* use their Calibre feature or library syncing. I turned page progress sync on. I then manually downloaded the book to both devices using the Calibre Web Companion app, as mentioned above. Now, anytime I open a book it will load the progress from dropbox and if there was a change, ask if I want to skip ahead to the new location.
{ #dropbox-sync}

# Missing pieces: Page turner
The final piece to my perfect ereading setup is finding the perfect page turner. The trick is finding a good bluetooth pageturner that works with ereaders. If you search Amazon for "pageturners", you will be met with a long list of the clip-on style turners I was trying to get away from. If you search for "bluetooth pageturner" you will find a ton of results for things that *look* like pageturners and are *advertised* as page turners but they are not pageturners, as I found out. Almost all of them are designed to connect to a phone and act as a remote for Tiktok of all things. What I learned, after buying a few, is that most of them imitate a screen swipe when you click the up and down button. 

I eventually came across [this](https://www.amazon.com/dp/B0C7L9PVWP?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1) pageturner, which coincidentally looks almost identical to my be beloved clip-on pageturner. I didn't have high hopes for it since it was explicitly advertised as a TikTok remote and had no mention of pageturning anywhere. What I found, when I got it, through was that it had two modes: Tiktok Mode and Music mode. When you switch it to Music mode, the up and down buttons send a previous and next song command while the center button sends a pause command. Which is exactly what Moonreader is looking for! Huzzah! With this figured out, I configured it to page back and forward as well as toggle day/night mode. 
# Battery Woes