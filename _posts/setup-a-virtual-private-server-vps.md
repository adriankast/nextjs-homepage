---
title: Setup a Virtual Private Server (VPS)
excerpt: I have been avoiding getting an own server for quite a bit now. The setup and maintenance effort always kept me from getting one, but I recently crossed a threshold because any analytics solution that holds up to my standards would cost me the same as getting an Virtual Private Server (VPS) with probably enough resources to run quite some other stuff I already thought about several times. 
coverImage: /assets/blog/setup-a-virtual-private-server-vps/cover.jpg
coverImageInfo: Self created
date: "2023-06-16T06:00Z"
source: https://adriankast.notion.site/Setup-a-Virtual-Private-Server-VPS-116d0db0456f400e9eed05f54a8b1f00
---

I have been avoiding getting an own server for quite a bit now. The setup and maintenance effort always kept me from getting one, but I recently crossed a threshold because any analytics solution that holds up to my standards would cost me the same as getting an Virtual Private Server (VPS) with probably enough resources to run quite some other stuff I already thought about several times. 

In addition I got the luck to have learned at least the basics about Linux administration at work and had a friend of mine that is a Linux admin providing me with basic instructions how to setup and secure a server. The following list is not complete for sure but will hopefully provide you with some practical guidance if you also have a server or you think about getting one.

## Order a new VPS at your hosting provider

There are many hosting provider that offer VPSs, often they are referred to as “V-Servers”. I decided to stick with [Strato](https://www.strato.de/), since my Webspace is already hosted there, which simplifies GDPR concerns for me because I don’t have to adapt my privacy declaration or make a new ADV contract. At Strato the VPS costs me 6€ monthly for 4 virtual Cores, 8 GB memory and 300 GB SSD storage that is not the cheapest you will find but also not that expensive. Besides the price/resource ratio you should also look for limitations of the provided VPS especially since they are always virtualized there might be some. I’m quite ZUFRIEDEN with the Strato server so far, only exception is that I could not get docker to work properly with Ubuntu-22 (the port mapping never worked - not even to localhost, at least not without me deleting most of Iptables), which could have to do with their virtualization provider, docker and the Ubuntu distro. But since Debian is probably the better choice for a server anyway (less preinstalled stuff → less vulnerabilities) I’m not too sad about it. Once I had ordered the VPS I could select an OS to install (can be changed later as mentioned), provide a root user password (for VNC access) and public key (for SSH access) and the hosting provider took care of spinning the OS up. The following commands are specifically tested with Debian (and Ubuntu also mostly), but should work at least with every Debian-based Linux.

## Create a non root user

Use the following commands to create a non root user, add an SSH key for the user and disable SSH access directly to root. That ensures that nobody even if he gets in possession of your private SSH key has root access to your server. Also processes that do not required root rights can be executed without root access now. To be still able to executed root commands, we add the user to the sudoers group and make sure the user access is password protected.

```bash
adduser <username>
usermod -aG sudo <username>
su - <username>
sudo mkdir -p ~/.ssh
sudo touch .ssh/authorized_keys
sudo vim .ssh/authorized_keys
# paste the public key (i, ctrl+v, esc, :wq)
sudo chmod -R go= ~/.ssh
sudo chown -R <username>:<username> ~/.ssh
exit
exit
ssh -i .ssh/name_of_private_key_file <username>@<hostname>
# opt: disable password auth via ssh
sudo nano /etc/ssh/sshd_config
## set the following entries then save (ctrl o, enter, ctrl x):
PasswordAuthentication no
ChallengeResponseAuthentication no
UsePAM no
# If you want to disable ssh access with root directly, also set the following entry to no
PermitRootLogin no
##
sudo systemctl restart ssh
```

## Change SSH port

The access via SSH key is very secure by default, but to protect your server from broot-force attacks or upcoming vulnerabilities even better you can easily change the port that is used for SSH connections. Also make sure that SSH access via password is disabled as shown in the preceding section.

```bash
sudo nano /etc/ssh/sshd_config
## set the following entry to your custom port (e.g. 122) then save (ctrl o, enter, ctrl x):
Port 122
##
sudo systemctl restart ssh
```

## Make sure no unnecessary ports are open

You can use the command `sudo netstat -tulpn` to see which ports are currently open on your OS. Then figure out which ones are not required (e.g. remote clock sync and dynamic IP assignment might be a good idea to keep) and keep them closed with UFW as shown in the section. If you just want to get ports listed that are listening `sudo netstat -tulpn | grep LISTEN`.

## Activate Firewall

If the Uncomplicated Firewall (UFW) is not already installed you can install it with 

```bash
sudo apt update && sudo apt install ufw
```

Then define the ports that should be kept open and make sure you include the SSH port you have chosen, otherwise your SSH connection will be closed and you can’t log in again. Finally activate the firewall and view the status:

```bash
# example uses ssh on port 122 adapt the command accordingly
sudo ufw allow 122/tcp
sudo ufw enable
sudo ufw status
# to delete a rule:
sudo ufw delete allow 80/tcp
```

## Automatic updates

To enable automatic updates on Ubuntu or Debian, here are great guides for it, I don’t really have a lot of experience yet, which settings work, so I will just list them here: 

- [https://www.digitalocean.com/community/tutorials/how-to-keep-ubuntu-22-04-servers-updated](https://www.digitalocean.com/community/tutorials/how-to-keep-ubuntu-22-04-servers-updated)
- [https://wiki.debian.org/UnattendedUpgrades](https://wiki.debian.org/UnattendedUpgrades).

## Add Rootkit Scanning

There are two really good instructions how to add rootkit scanning with the packages [rkhunter](https://wiki.ubuntuusers.de/rkhunter/) & [chrootkit](https://wiki.ubuntuusers.de/chkrootkit/) on the Ubuntuusers wiki.

## Forward root mails to the non-root user

To get the mails that services send to the root user (e.g. the scan results from rkhunter & chrootkit), you can simply forward them to your non root user. Do so by adding the address (e.g. `john@localhost`) of your user to the `~/.forward` file in the home directory of root.

## SSH config

To conveniently connect to your VPS you might want to add a SSH config file. That saves you the effort of having to type all connection details every time you want to connect to your VPS via SSH. Just reference the connection with the name (in the example `devserver`), like `ssh devserver`. To add an SSH config file under Linux/WSL:

```bash
# opt: create ssh config (or modify). locally on your machine
touch ~/.ssh/config
chmod 600 ~/.ssh/config
## edit the file content of "~/.ssh/config":
Host devserver
    HostName dev.mydomain.de
    Port 122
    User john
    IdentityFile ~/.ssh/name_of_private_key_file
```

## What’s next

That was a wrap about the things I concluded are most important to do, when you setup a Virtual Private Server (VPS). You can find all commands in a more compact version in this [gist on GitHub](https://gist.github.com/adriankast/898b8542084e6f345dce9b389769c683). There are some more topics left, like: Setting up docker, set a DNS record to assign a (sub)domain to your server, configure certbot to accept https connections, setting up a reverse proxy with nginx, …, but since they highly depend on your planned usage of the server I will not dig into them in this post. If you are interested in something especially or have some further suggestions feel free to let me know. Another recommendation are the blog posts of digital ocean like “[Initial Server Setup with Ubuntu](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04#step-5-%E2%80%94-enabling-external-access-for-your-regular-user)” that cover many points I mentioned.