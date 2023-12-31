# The Holy Bible on the Web

**This project is not finished yet.**
Of course, you can use it, but it's not very user friendly yet. The current version is only a proof of concept.

Based on Static Site Generation with NextJS.

Currently only the [HSV](https://nl.wikipedia.org/wiki/Herziene_Statenvertaling) version is available and it's only Dutch. The way this works is really basic at this very moment, but I want to expand functionality in the future.

There is a book selector at the moment, but it doesn't do anything yet. The only way to navigate is by changing the URL. (http://localhost:3000/read/[book]/[chapter] e.g. http://localhost:3000/read/1_Koningen/1)

## Future plans

- Use OSIS format for the Bible text (currently using markdown). This will make it easier to compare different versions of the Bible, as references are standardized. (e.g. `John 3:16` or `Johannes 3:16` will always be `John.3.16`, no matter your language or version of the Bible)
- Be able to select a version of the Bible (only versions as close as possible to the original scriptures, e.g. Statenvertaling, HSV, KJV, etc. No Book of Mormon or other non-biblical texts)
- Compare 2 versions of the Bible side by side
- Be able to select a book, chapter and verse
- Be able to select a range of verses
- Click on cross references to read them (possibly in a popup)
- Search function
- Be able to make notes
- Explanation on how to read the Bible for beginners (e.g. where to start, how to read, what does bold or italic text mean etc.)

Maybe I will add Apocrypha in the future, but I'm not sure yet.

## Sources

Current Bible based on https://github.com/henkjan/herziene-statenvertaling/tree/master.

But I want to move to this project: https://github.com/Isidore-Guild/statenvertaling/
