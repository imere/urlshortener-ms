# API Basejump: URL Shortener

>User stories:
>- I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
>- When I visit that shortened URL, it will redirect me to my original link.

### Example creation usage:

[https://im-urlshortener-ms.glitch.me/new/https://www.google.com ](https://im-urlshortener-ms.glitch.me/new/https://www.google.com)

[https://im-urlshortener-ms.glitch.me/new/http://freecodecamp.com/news ]https://im-urlshortener-ms.glitch.me/new/http://freecodecamp.com/news)

##### If you want to pass a site that doesn't exist (or an invalid url) for some reason you can do:

	https://im-urlshortener-ms.glitch.me/new/invalid?allow=true

### Example creation output:

	{ "original_url": "http://freecodecamp.com/news", "short_url": "https://im-urlshortener-ms.glitch.me/4" }

### Usage:

	https://im-urlshortener-ms.glitch.me/4

### Will redirect to:

	http://freecodecamp.com/news
