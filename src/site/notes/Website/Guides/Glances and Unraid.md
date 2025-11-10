---
{"dg-publish":true,"dg-path":"Guides/Glances and Unraid.md","dg-permalink":"guides/glances","permalink":"/guides/glances/","title":"Quickie: Homepage, Glances, and Unraid","tags":["quickie","unraid"],"created":"2025-11-09T18:08:44.677-08:00","updated":"2025-11-09T18:45:09.652-08:00"}
---

## Quickie: How to get Glances (and Homepage) to read Arrays and Cache in Unraid
I recently setup [Homepage](https://gethomepage.dev/) to quickly access all of my frequently used things on Titan. I plan on doing a more in-depth post on Homepage once I get my page fully set up. In the meantime, I wanted to share a quick trick I learned today while setting it up. 

Homepage offers numerous [widgets](https://gethomepage.dev/widgets/) that allow you to monitor Unraid's current status. Many of them harness [Glances](http://github.com/nicolargo/glances) which is a separate community app. 

I wanted to be able to quickly see the status of my Array and Pool but found Glances wasn't able to see it and could only see the individual drives, which I did not find helpful. After some googling, I came across this [reddit](https://www.reddit.com/r/unRAID/comments/1bunisz/unraid_homepage_glances/) thread that addressed the issue. Although I did not immediately understand what the user was suggesting, so I wanted to dumb it down here in case anyone finds themselves in my shoes in the future. 

Thankfully, the solution is quite simple. This, of course, assumes you already have Homepage and Glances up and running in Unraid. 

Next, you will want to navigate to `/mnt/user/appdata/glances/`. There may already be a file there called `glances.conf`. If there isn't, create one.

Paste the following snipped into `glances.conf`.

```
[fs]
disable=False
hide=/boot.*,/snap.*
allow=shfs
careful=50
warning=70
critical=90
```

Finally, edit the Glances docker container and add the following path: 
![DRAFT_Quickie_Homepage,_Glances,_and_Unraid-30m13u-006.png|400](/img/user/Apps/Attachments/DRAFT_Quickie_Homepage,_Glances,_and_Unraid-30m13u-006.png)

That's it! Now Glances will be able to read your Array and cache Pool. 

Here is what my widgets currently look like and how I accomplished it using Glances.

![DRAFT_Quickie_Homepage,_Glances,_and_Unraid-ajijcl-008.png](/img/user/Apps/Attachments/DRAFT_Quickie_Homepage,_Glances,_and_Unraid-ajijcl-008.png)

> [!NOTE]- widgets.yaml
> 
> ```yaml
> - glances:
>         url: [CONTAINER URL GOES HERE]
>         version: 4
>         cpu: true
>         mem: true
>         cputemp: true
>         uptime: true
>         diskUnits: bytes
>         expanded: true
>         label: Titan Status
>         row: true
> 
> - glances:
>     url: [CONTAINER URL GOES HERE]
>     version: 4
>     label: Array
>     cpu: false
>     mem: false
>     cputemp: false
>     uptime: false
>     disk:
>         - /rootfs/mnt/user
>     diskUnits: bbytes
>     expanded: true
>     row: true
> 
> - glances:
>     url: [CONTAINER URL GOES HERE]
>     version: 4
>     label: Cache
>     cpu: false
>     mem: false
>     cputemp: false
>     uptime: false
>     disk:
>         - /rootfs/mnt/cache
>     diskUnits: bbytes
>     expanded: true
>     row: true
> ```