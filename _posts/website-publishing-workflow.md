---
title: Website publishing workflow
excerpt: Publishing a website is an integral part of the webdesign process. There are many ways to publish websites, but one of the most common methods is via SFTP (Secure File Transfer Protocol). In this post, we will discuss how you can automate the “deployment” workflow (not sure if it is even called deployment for websites^^) with GitHub actions and SFTP. So that you never have to manually upload new website versions again, but just hit “git push”.
coverImageInfo: Self created
date: "2023-04-09T16:45Z"
source: https://adriankast.notion.site/Website-Publishing-Workflow-a5e1a32ad1d1444fa667806e28b901f8
---

Publishing a website is an integral part of the webdesign process. There are many ways to publish websites, but one of the most common methods is via SFTP (Secure File Transfer Protocol). In this post, we will discuss how you can automate the “deployment” workflow (not sure if it is even called deployment for websites^^) with GitHub actions and SFTP. So that you never have to manually upload new website versions again, but just hit “git push”.

## Setup with Next.JS, GitHub & Strato

I assume you’re already having your website sources checked in some [git](https://git-scm.com) repository, in this blog post we will assume the sources are on [GitHub](https://github.com). This post is also demonstrating the deployment of a [Next.JS](https://nextjs.org) website, by using the static build feature of Next.JS (which has some limitations), but it works the same for every framework/source files that result in some static files (HTML & CSS & JS & assets like images and fonts) that simply have to be uploaded on a webserver for hosting. [Strato](https://www.strato.de/) is a web hosting provider that offers various hosting services such as domain registration, website hosting, and cloud hosting. I use Strato as an example here, since it is my hosting provider, the process should be exactly the same with your hosting provider, just make sure you have static file hosting and can setup SFTP accounts.

## Setting up SFTP

Before we can start deploying our website, we need to set up an SFTP account with Strato. The process of setting up an SFTP account may vary depending on the web hosting provider, but the basic steps are as follows:

1. Log in to your Strato account and navigate to the FTP section.
2. Create a new FTP user account and set a password.
3. Grant the new FTP user account the necessary permissions to access your website's root directory. If you host multiple websites in your webspace I would recommenend setting up separate users for each website that can only access that specific directory.
4. Recommended: Make sure “Allow only SFTP connections” option is set, since the normal FTP protocol does not provide privacy (comparable to http).

Once the SFTP account is set up, you can check that it works by uploading you website (in static files) using an FTP client such as [FileZilla](https://filezilla-project.org). 

## Scripting the SFTP deployment

After the SFTP credentials are created you should make sure that it is also possible to connect to your webspace via the CLI (Command Line Interface). Especially if you plan to use other commands than shown in the GitHub actions workflow, e.g., because you want to exclude certain directories. Since the feedback loop is much shorter I recommend testing these commands from your local terminal first.

To test that the programmatic access works in general: From a terminal (or PowerShell/WSL if you’re on windows) make sure you have the `sftp` command installed and try to connect to the SFTP login you just created. For Strato the necessary command should look like this: `sftp "[sftp_user_name@your_domain_name.de](mailto:sftp_ff_gallery@adriankast.de)@ssh.strato.de"` . It will then ask for your password and once you’ve entered it, you should be connected to your webspace, and be able to execute SFTP commands like `pwd`.

After finding the commands that have the publishing behavior you want to achieve, let’s automate the workflow with GitHub actions.

## Setting up GitHub actions workflow

You can look at [my setup](https://github.com/adriankast/nextjs-homepage/blob/main/.github/workflows/deploy.yml) to build a static output of a Next.JS website, and publish it to Strato via SFTP. I will explain the steps in the yaml file in Detail. But first you have to make sure that you can execute GitHub actions, meaning you fulfill one of the criteria:

- Your repository is public
- You have self hosted GitHub actions runners
- You pay for the actions executions minutes

Next you have to add the required environment variables  in Settings → Secrets and Variables → Actions. Add these variables:

- SSH_SERVER: the ssh server of the webspace, e.g., ssh.strato.de
- SFTP_HOST: the username of your sftp login
- SFTP_PASS: the password of your sftp login

They can now be accessed during the GitHub actions execution, without making them public.

Now let’s have a look at the GitHub actions [deploy.yaml](https://github.com/adriankast/nextjs-homepage/blob/main/.github/workflows/deploy.yml) that has to be located under .github/workflows in your repository.

1. At first we prepare for the SFTP connection by installing sshpass (allowing us to programmatically pass the sftp password) and adding the webspace server as known host to our GitHub runner (avoiding an interrupting prompt that asks if we would like to trust the server).
    
    ```yaml
    - name: Setup sshpass
          run: sudo apt update && sudo apt install sshpass
        - run: sshpass -V
        
        - name: Add known host
          env:
            SSHPASS: ${{ secrets.SFTP_PASS }}
            SFTP_HOST: ${{ secrets.SFTP_HOST }}
            SSH_SERVER: ${{ secrets.SSH_SERVER }}
          run: mkdir ~/.ssh && sshpass -e ssh-keyscan -H "$SSH_SERVER" >> ~/.ssh/known_hosts
    ```
    
2. Next we use predefined actions to checkout the git repository and install Node.js on the runner 
    
    ```yaml
    - name: Checkout repo
          uses: actions/checkout@v3
        
        - name: Setup Node
          uses: actions/setup-node@v3
          with:
            node-version: 18
    ```
    
3. Now install the required dependencies and build the static HTML, CSS, JS files we want to host on the webspace. The output will be written in the “out” directory, you can try this locally or add an `ls` statement to the GitHub action.
    
    ```yaml
    - name: Install node modules
          run: npm ci
    
        - name: Build Nextjs static output
          run: npm run build
    ```
    
4. Finally use SFTP to upload the static files in the “out” directory from the GitHub runner to the webspace, using the FTPC “put” method to upload and overwrite the existing files.
    
    ```yaml
    - name: Deploy put sftp
          env:
            SFTP_HOST: ${{ secrets.SFTP_HOST }}
            SSHPASS: ${{ secrets.SFTP_PASS }}
            SSH_SERVER: ${{ secrets.SSH_SERVER}}
          run: cd $GITHUB_WORKSPACE/out && sshpass -e sftp "$SFTP_HOST@$SSH_SERVER" <<< $"put -r . ./"
    ```
    

After adding the .yaml file to your repository and commiting & pushing your change, the GitHub action should start to run. In the GitHub repository, after clicking on the “Actions” tab, you should now also see the GitHub action execution and if it was successful or there have been failures.

![GitHub actions page showing last action executions](/assets/blog/website-publishing-workflow/github-screenshot.png)

GitHub actions page showing last action executions

## Conclusion

SFTP deployment is a simple and effective way to publish/deploy websites. Strato and most hosting providers equip users with an SFTP account that can be used to upload and manage files for their website. By following the steps outlined in this post, you can easily deploy your website via SFTP on Strato or any other web hosting provider that supports SFTP. After testing the whole process manually, you should automate it if you plan on updating your website regularly. The automation allows you to only use `git push` in order to publish a new version of your website.

## Bonus

If you just want to try stuff or work on a non commercial project you can also use [GitHub pages](https://pages.github.com) or [Vercel](https://vercel.com) for hosting and don’t even need to struggle with SFTP or pay for a hosting provider.