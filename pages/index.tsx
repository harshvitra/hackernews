import styles from "./../styles/Home.module.css";
import React from "react";
import ContentLoader from "../src/common/contentLoader";
import Story from "../src/components/Story";
import { HomeTypes, StoryTypes } from "../src/common/types";

export default function Home({ stories }: HomeTypes) {

  // Collection of stories contain the Ids of all the stories 
  const [storiesCollection, setStoriesCollection] = React.useState<Array<any>>(stories)

  // All stories contain the data of all fetched stories
  const [allStories, setAllStories] = React.useState<Array<StoryTypes>>([]);

  // Page Number is used to periodically add stories
  const [pageNumber, setPageNumber] = React.useState<number>(1);

  // State to manage dark mode 
  const [isDarkMode, setIsDarkMode] = React.useState<Boolean>(false);

  React.useEffect(() => {
    // Function to get Stories when the page number is updated 
    async function getStories() {
      if (
        allStories.length < storiesCollection.length
      ) {
        const newStories: Array<StoryTypes> = [];

        // Loop to fetch only 5 stories at a time 
        for (let i = pageNumber * 5 - 5; i < pageNumber * 5; i++) {
          const res = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${storiesCollection[i]}.json`
          );
          const newStory: StoryTypes = await res.json();
          newStories.push(newStory);
        }
        const finalStories = allStories;
        finalStories.push(...newStories);

        // Add all new stories and update the page number
        setAllStories(finalStories);
        setPageNumber(pageNumber + 1);
      } else {
      }
    }
    getStories();
  }, [pageNumber]);


  // Function to load more stories if user reached bottom of the page 
  async function loadMoreStories() {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );
    let newStories = await res.json();

    const finalStories = storiesCollection;
    finalStories.push(...newStories);

    setStoriesCollection(finalStories);
    setPageNumber(pageNumber + 1)
  }

  // Function to find whether the user has reached bottom of the list or not
  function handleScroll(event: { target: any; }) {
    var node = event.target;
    const amountScrolled = node.scrollHeight - node.scrollTop
    let bottom = amountScrolled === node.clientHeight;
    if (bottom && allStories.length >= storiesCollection.length) {
      bottom = false;
      loadMoreStories();
    }
  }

  return (
    <div id="container" className={`${styles.container} ${isDarkMode ? styles.darkMode : ''}`}>

      {/* This button is for toggling Light and Dark mode */}
      <button id="themeButton" className={styles.themeButton} onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? 'Light Mode' : 'Dark mode'}
      </button>

      <div id="storiesList" onScroll={handleScroll} className={styles.storiesContainer}>

        <h2 id="pageTitle" className={styles.pageTitle}>Hacker News</h2>

        {/* List of all the Stories */}
        {allStories.map((story) => {
          return story && (
            <Story key={story.id} story={story} />
          );
        })}

        {/* This will load a Content Loader */}
        <div className={styles.contentLoader}>
          {<ContentLoader />}
        </div>

      </div>
    </div>
  );
}

export async function getStaticProps() {

  // Fetch initial data from the API
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/newstories.json"
  );
  let stories: HomeTypes = await res.json();
  return {
    props: {
      stories,
    },
  };
}
