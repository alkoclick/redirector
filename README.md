# Redirector

A redirector service, mostly made to explore a thought

## What's the point?
To make a redirector service, that doesn't require any data storage.
It avoids that by using a deterministic 2-way function to encode the information (target) in a URL-safe format

## Run locally
Using Caddy via Docker
```shell
docker run --rm -it -p 8080:80 \
    -v $PWD/index.html:/usr/share/caddy/index.html \
    -v caddy_data:/data \ 
    caddy
```