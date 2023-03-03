---
title: Backup Strategy
excerpt: The time around the holidays is also a time of backups for me. I’ve automated my most important backup mechanisms. Still I keep some manual backup routines that are hard to automate and I don’t want to spent too much time with. So I execute them once or twice a year and one time is always between the years. This post shares my whole backup strategy.
coverImageInfo: Image from christels on pixabay
coverImageUrl: https://pixabay.com/de/photos/feuerwerk-pyrotechnik-explodieren-1880042/
date: "2023-01-04T06:10Z"
source: https://www.notion.so/adriankast/Backup-Strategy-c5733372759b4c69bd01028663eaabb6
---

The time around the holidays is also a time of backups for me. I’ve automated my most important backup mechanisms. Still I keep some manual backup routines that are hard to automate and I don’t want to spent too much time with. So I execute them once or twice a year and one time is always between the years. This post shares my whole backup strategy.

## TLDR;

- Automatic: Mobile device image upload to OneDrive
- Automatic: Encrypted upload of documents folder to OneDrive ([script](https://github.com/adriankast/simple-ps-backup))
- Manual: Download documents from all banks I have accounts/depots at
- Manual: Download Contacts and Calendar
- Manual: Backup my OneDrive content on a otherwise disconnected and encrypted hard-drive
- Manual: Password manager content backup

## Prerequisites

The services I use to store/sync my data define my main prerequisites:

- A Mailprovider for Contacts and Calendar sync.
- [1Password](https://1password.com/) for passwords sync. I am very glad to have switched from LastPass a year ago or so, since the [latest Incident at LastPass](https://www.theverge.com/2022/12/22/23523322/lastpass-data-breach-cloud-encrypted-password-vault-hackers) seems to be quite concerning…
- [OneDrive](https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage) for files (not too important files though) and mobile image backup
- Windows/Android as OS
- I keep my important documents in the documents folder on my laptop

## Automatic Backups

Most of my backups happen automatically since they would be too time consuming otherwise, if executed regularly. My current backup setup is:

- Automatic image backup using the OneDrive image upload functionality. As soon as my mobile device has WLAN connection it will backup the images.
- This [script](https://github.com/adriankast/simple-ps-backup) will automatically encrypt the content of my documents folder and upload to OneDrive. The upload executes weekly, once my laptop has a power supply plugged in and doesn’t have a lot to do.

## Manual Backups (1-2x per year)

The steps executed vary a bit. A while ago I used to backup my whole laptop drive and most folders on my phone. But recently I realized that the backup should be limited to what is essential and cannot be redownloaded from the web anyway. The point I definitely have to figure out yet is how to backup the content of my password manager (1password). I used to keep also a printed list of all contents, but that seemed to defy the purpose of a pw-manager a bit. This year I will go with downloading the content of my pw manager to an encrypted folder inside my encrypted hard-drive. All manual steps this year:

- Manual: contacts and calendar backup to local documents folder
- Manual: download all documents I received from banks this year
- Manual: password-manager content backup
- Manual: backup the whole content of my OneDrive on the external hard-drive

## The end

That’s all for now. It doesn’t take me too much time doing the backup once or twice a year, considered the amount of time and problems I potentially could safe if shit hits the fan. I should add that I don’t keep a lot of paper if it’s not necessary (legal requirements or so). So I kind of depend on that data not being lost forever. What about you? I hope you get some value out of the post and would love to hear about your backup strategy or suggestions!

That being said, have a good start into 2023! 🎉
