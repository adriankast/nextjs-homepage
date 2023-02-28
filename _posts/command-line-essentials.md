---
title: Command Line Essentials
excerpt: As a developer, working with Git, Docker, and Shell is a very common task. The command-line interface can be intimidating for beginners, but it is a powerful tool that can save time and streamline workflows. In this blog post, we will cover essential commands that I needed a lot recently and will help you as a developer to make your work more efficient and effective.
coverImageInfo: Image from Hector Martinez on unsplash
coverImageUrl: https://unsplash.com/de/fotos/EG49vTtKdvI
date: "2023-02-28T08:10Z"
---

As a developer, working with Git, Docker, and Shell is a very common task. The command-line interface can be intimidating for beginners, but it is a powerful tool that can save time and streamline workflows. In this blog post, we will cover essential commands that I needed a lot recently and will help you as a developer to make your work more efficient and effective.

You can also find all commands explained in this post listed in this [public gist](https://gist.github.com/adriankast/500c3d422261c8605a156c490fcea230) that I update regularly.

## Git

- Add execute rights to every shell script in the folder, to avoid that somebody else or your CI/CD pipeline cannot execute a script you have checked in.
    
    ```bash
    git update-index --chmod=+x *.sh
    ```
    
- List current files with details, to check which access rights your files have at the moment
    
    ```bash
    git ls-files -s
    ```
    

## Docker

- List and stop Docker containers containing a string (SEARCH_STRING) in their name
    
    ```bash
    docker ps | grep SEARCH_STRING | awk '{print $1}'
    ```
    
    ```bash
    docker stop $(docker ps | grep SEARCH_STRING | awk '{print $1}')
    ```
    
- After unnecessary containers have been stopped, it is essential to free up host resources. Use the following commands to achieve this:
    
    ```bash
    docker container prune
    ```
    
    ```bash
    docker image prune --filter "until=40h" --all
    ```
    
    ```bash
    docker network prune
    ```
    
1. Get port of a container running in Docker Compose
    
    ```bash
    docker-compose port SERVICE_NAME INT_PORT | grep -P ':\d+' -o | grep -P '\d+' -o
    ```
    

## Shell

Common commands that you can use in Shell/Bash under Linux/Unix. If you are on windows most of the commands should also work if you use WSL. I’m using WSL heavily meanwhile especially to try deploy scripts, before pushing them to GitLab and can highly recommend it. Here are Shell commands I find especially useful:

- Check if a directory is present
    
    ```bash
    if [ -d "./asdf" ]
    ```
    
- Check if a file is present
    
    ```bash
    if [ -f "./asdf.txt" ]
    ```
    
- Get a free port
    
    ```bash
    comm -23 <(seq 49152 65535 | sort) <(ss -Htan | awk '{print $4}' | cut -d':' -f2 | sort -u) | shuf | head -n 1
    ```
    
- Get the PID of a service available under a certain port
    
    ```bash
    ss -lptn 'sport = :SEARCH_PORT'
    ```
    
- Lint Shell Scripts using ShellCheck (must be installed)
    
    ```bash
    find . -name "*.sh" | xargs shellcheck -S error
    ```
    
- Find lines containing the search string in all matching files
    
    ```bash
    grep -F 'SEARCH_STRING' */abc.txt
    ```
    

In conclusion, these commands are essential for every developer working with modern setups. They can help you save time, streamline workflows, and make your work more efficient and effective. As always thank you for reading and I appreciate any feedback 🙏
