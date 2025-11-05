---
{"dg-publish":true,"dg-path":"Blog/Meet Titan.md","permalink":"/blog/meet-titan/","created":"2025-11-04T19:53:14.458-08:00","updated":"2025-11-04T19:55:07.277-08:00"}
---

Meet Titan. In this post, I introduce Titan and explain the thought process behind the hardware choices I made. 
### Host
For the host, I chose a [UGreen NASync DXP4800+](https://nas.ugreen.com/products/ugreen-nasync-dxp4800-nas-storage?from=mega-menu&dm_cam=22040385033&dm_grp=179664581682&dm_ad=774151938206&dm_kw=ugreen%20dxp4800&dm_net=adwords&utm_source=GoogleNAS&utm_medium=Conversion&utm_campaign=GG_DTC_US_CV_SA_S_NAS_20250219_BV_Brand_JE_Brand_4800&utm_term=ugreen%20dxp4800&utm_content=&gad_source=1&gad_campaignid=22040385033&gbraid=0AAAAA9YUSrD7tRHSw5fpCsbZXYmn0mIEo&gclid=CjwKCAjwjffHBhBuEiwAKMb8pJYPNWj5B6JW69TV788INddl7X3_hcQWT5Ao1Iu0ugYFD_ASrD_mIhoCd3QQAvD_BwE). The reason I chose this was that it offered an all in one solution that competitive hardware (especially in comparison to Synology) at a relatively affordable price. The Plus model in particular was attractive as it has a separate boot drive so that one of the NVME's isn't taken up by the OS. UGreen is also supportive of modding and allows other OSes to be installed. 


![dxp4800.webp|400](/img/user/Titan/Website/attachments/dxp4800.webp)

### Cache, RAM, and Storage
I chose the following hardware mainly because it was listed as [compatible](https://nas.ugreen.com/pages/compatibility) by UGreen and available on Amazon. 

- RAM: [Crucial 32GB DDR5 RAM Kit](http://www.amazon.com/dp/B0BLTDRRLF?ref=ppx_yo2ov_dt_b_fed_asin_title) (2 x 16)
- Cache: 2 x [Kingston NV3 2TB M.2 2280 NVMe SSD](https://www.amazon.com/dp/B0DBR6TRZQ?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1)
- Storage: 4 x [Seagate IronWolf 4TB NAS Internal Hard Drive](https://www.amazon.com/dp/B09NHV3CK9?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1)
- Boot USB: [64GB PNY Elite-X™ Fit USB 3.1 Flash Drive](https://www.amazon.com/dp/B0FJTH69ZM?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1)

### Uninterruptible Power Supply (UPS)
For a UPS, I chose the [Ugreen 120W UPS](https://www.amazon.com/dp/B0DDC9ZK8R?ref=ppx_yo2ov_dt_b_fed_asin_title), mainly because it was directly compatible with the DXP4800. The UPS for the NAS plugs directly into the UPS (along with a USB cable) so that it can control the NAS in event of a power outtage. It's also nice and compact. 

![UPS.webp|400](/img/user/Titan/Website/attachments/UPS.webp)
