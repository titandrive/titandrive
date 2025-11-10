---
{"dg-publish":true,"dg-path":"Guides/UGreen UPS Setup.md","dg-permalink":"guides/ugreenups","permalink":"/guides/ugreenups/","title":"UGreen UPS & Unraid","tags":["guide","ugreen","unraid"],"created":"2025-11-09T16:38:29.679-08:00","updated":"2025-11-09T21:46:27.732-08:00"}
---

## Connecting your UGreen UPS to Unraid via the NUT Plugin


![UGreen_UPS_Setup-pvi5hj-005.png|400](/img/user/Apps/Attachments/UGreen_UPS_Setup-pvi5hj-005.png)
When I bought my [UGreen DXP 4800+](https://nas.ugreen.com/products/ugreen-nasync-dxp4800-plus-nas-storage) I decided to also buy the UGreen [Uninterupptible Power Supply](https://nas-eu.ugreen.com/products/ugreen-nas-backup-power-120w-12000mah) (UPS) along with it. Its small form-factor and out of the box compatibility with the server intrigued me. Of course, my plans to run Unraid instead of the default UGOS complicated things. 

By default, Unraid has the ability to communicate with most UPSs. Why is this important? Well, if the power goes out the UPS will start supplying power to the server. This happens with any UPS. But if the power outage goes on long enough, your UPS will eventually run out of power. If the UPS *can't* talk to the server, when it dies the server will experience an [unclean shutdown](https://docs.unraid.net/unraid-os/troubleshooting/common-issues/unclean-shutdowns/). This can have ill effects on parity among other things. A smart UPS can give the server a warning as it starts to run out of power at which point Unraid can stop the array and power down properly. 

Unfortunately, I found out once I plugged in the UGreen UPS that Unraid was unable to communicate with it. After hours of fiddling and tons of googling, I finally figured out how to get it working using the Network UPS Tools (NUT) plugin. 

In case you run into the same issue, here is how to get your UGreen UPS to work with Unraid! 
### Step 1: Disable Unraid UPS 
As mentioned earlier, Unraid has its own UPS capabilities (Settings/UPS Settings). By default, it is disabled but just in case you were using it before, make sure it is turned off (Start APC UPS demon: off).
### Step 2: Install NUT

Install NUT via Community Apps. 

![Ugreen_USP_Setup-34p2iz-001.png|400](/img/user/Apps/Attachments/Ugreen_USP_Setup-34p2iz-001.png)
### Step 3: Setup NUT
Once it is installed,  go to plugins and open up NUT. Once you are inside NUT settings, go to "enable manual configuration" and set it to: "for UPS driver".

Next, scroll to the NUT Configuration Editor at the bottom and paste the following snippet into it. This is what allows NUT (and therefore Unraid) to recognize, and communicate with, the UPS.

```
[ugreenups]
driver = usbhid-ups
port = auto
vendorid = 2b89
productid = ffff
subdriver = Arduino
desc = "Ugreen US3000 via USB"
```

Finally, scroll up to Shutdown mode and make sure it's set to "Time on battery". Directly below that, you can set how long you want Unraid to run on UPS power before it shuts down. This is a personal preference and will depend on your situation, but 5 minutes is where I set mine. If it is set too short and you live somewhere that experiences frequent and short power outrages, it might cause unnecessary shutdowns. 

### Step 4: Start NUT!
Once you have finished configuring NUT, scroll to the top and set "Start Network UPS Tool Services" to yes and hit done. NUT should come online shortly afterwards. 

If you did everything correctly, you should have a new tile on your dashboard. 

![Ugreen_USP_Setup-l77z7j-002.png|400|400x150](/img/user/Apps/Attachments/Ugreen_USP_Setup-l77z7j-002.png)