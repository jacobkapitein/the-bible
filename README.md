# The Holy Bible on the Web

Based on SSG with NextJS.

Currently only the HSV version is available and it's only Dutch. The way this works is really basic at this very moment, but I want to expand functionality in the future.

There is a book selector at the moment, but it doesn't do anything yet. The only way to navigate is by changing the URL. (http://localhost:3000/[book]/[chapter] e.g. http://localhost:3000/1_Koningen/1)

## Future plans

- Use OSIS format for the Bible text (currently using markdown). This will make it easier to compare different versions of the Bible, as references are standardized. (e.g. `John 3:16` or `Johannes 3:16` will always be `John.3.16`, no matter your language or version of the Bible)
- Be able to select a version of the Bible (only versions as close as possible to the original scriptures, e.g. Statenvertaling, HSV, KJV, etc. No Book of Mormon or other non-biblical texts)
- Compare 2 versions of the Bible side by side
- Be able to select a book, chapter and verse
- Be able to select a range of verses
- Click on cross references to read them (possibly in a popup)
- Search function
- Be able to make notes

Maybe I will add Apocrypha in the future, but I'm not sure yet.
