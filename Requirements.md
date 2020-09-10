# Hacker News Reader

You will be building a news reader app which displays the latest Hacker News stories. Your app will leverage the Hacker News API to fetch the data it requires.

Requirements
The app will be a single page web application will the following features:

1. The app will display a list of the latest Hacker News stories in descending order from newest to oldest. Each list item should show the title (which should link to the story), author name, and posted time.
2. The targeted users for this app are exceptionally inpatient, so the app needs to display each story list item as soon as it has been fetched. The resulting list will look like it is growing gradually as new stories come in.
3. The app should support infinite scroll (like a social media feed). Specifically, when the user reaches the bottom of the page, the app should fetch earlier items and display them.
4. The app should support offline capability. Specifically, the user should be able to use the app offline to check out the list.
5. You can assume that the app will only be run on modern browsers, hence, feel free to use the latest web spec.
6. The test project should be submitted in React. This is closest to our current frontend stack and allows for a fast and fair feedback loop.

Evaluation Criteria

1. App performance. We will be looking at the wait times for readers to see the content — the shorter, the better.
2. We will evaluate your code’s quality. Does your code have good modular design and testability? Is it easy to read?
3. Tests. We don’t expect you to reach 100% code coverage (or any other arbitrary number), but we expect at least some tests. Show us that you know what matters and have the skills to automatically test your work.
4. We prefer the project to be lightweight, all dependencies should be well justified. For example, please interact with the Hacker News API directly instead of using the official Firebase client library.

Deliverable

1. Upload your test project as a public repository on Github. Please make sure to include a README file with instructions on how to run your app.
2. Make sure your project is easy to set up. Your app should be ready to run after npm install.
3. Please spend no more than 12 hours on this task.
4. The test project will be compensated.

# UI Analysis -

Just 1 page with all the stories is needed

There will be a list of stories, each story will have -

1. Title (linked to the story)
2. Author name
3. Posted time

For a mobile device the list can be shown as it is in full-width
For a desktop device, full width will spread the title on the screen and it will be difficult for the user's to scan through. So approx 40-50% widht should be given to stories

Each story card -
Title will be the main heading, since these are stories we can wrap title into quotes
Author name can be posted below the title in color which is less highlighted than the title
Posted time has to be converted to readable time, since these are latest stories we can add how much time happened since the story has been posted

This card will also need a content loader until the story has arrived.

Since there will be too many cards, we need Numbering too.

# API Analysis -

https://github.com/HackerNews/API

We can fetch all Stories and filter the APIs only for "type" : "story"
'AllStories' end point is not open and needs permission, same goes for 'Stories'

The API has different endpoints -
A. New Stories https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty - According to the requirements this is what we need
B. Top Stories https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
C. Best Stories https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty

All the above APIs will return the Array of IDs of the stories and we need to fetch those stories by feeding these ids

Story API - https://hacker-news.firebaseio.com/v0/item/id.json

Sample Item - {
"by" : "dhouston",
"descendants" : 71,
"id" : 8863,
"kids" : [ 9224,... ],
"score" : 104,
"time" : 1175714200,
"title" : "My YC app: Dropbox - Throw away your USB drive",
"type" : "story",
"url" : "http://www.getdropbox.com/u/2/screencast.html"
}

# Other features -

- Create a content loader but dont use the lirbary just for one element - svg based loader can be used

- Create a function to convert timestamp to "time ago format", can be done using moment, but it is also a heavy library for this one case.
