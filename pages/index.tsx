import styles from "./../styles/Home.module.css";
import React from "react";
import ContentLoader from "../src/common/contentLoader";
import Story from "../src/components/Story";
import { HomeTypes, StoryTypes } from "../src/common/types";

export default function Home({ stories }: HomeTypes) {

  const [storiesCollection, setStoriesCollection] = React.useState<Array<any>>(stories)
  const [allStories, setAllStories] = React.useState<Array<StoryTypes>>([]);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [isDarkMode, setIsDarkMode] = React.useState<Boolean>(false);
  React.useEffect(() => {
    async function getStories() {
      if (
        allStories.length < storiesCollection.length
      ) {
        const newStories: Array<StoryTypes> = [];
        for (i = pageNumber * 5 - 5; i < pageNumber * 5; i++) {
          const res = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${storiesCollection[i]}.json`
          );
          const newStory: StoryTypes = await res.json();
          newStories.push(newStory);
        }
        const finalStories = allStories;
        finalStories.push(...newStories);
        setAllStories(finalStories);
        setPageNumber(pageNumber + 1);
      } else {
      }
    }
    getStories();
  }, [pageNumber]);
  let i = 0;

  async function LoadMoreStories() {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );
    let newStories = await res.json();

    const finalStories = storiesCollection;
    finalStories.push(...newStories);

    setStoriesCollection(finalStories);
    setPageNumber(pageNumber + 1)
  }

  // Function to fund whether the user has reached bottom of the list or not
  function handleScroll(event: { target: any; }) {
    var node = event.target;
    const amountScrolled = node.scrollHeight - node.scrollTop
    let bottom = amountScrolled === node.clientHeight;
    if (bottom && allStories.length >= storiesCollection.length) {
      bottom = false;
      LoadMoreStories();
    }
  }

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.darkMode : ''}`}>
      <button className={styles.themeButton} onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? 'Light Mode' : 'Dark mode'}
      </button>
      <div
        onScroll={handleScroll}
        className={styles.storiesContainer}>
        <h2 className={styles.pageTitle}>Hacker News</h2>
        {allStories.map((story) => {
          return story && (
            <Story key={story.id} story={story} />
          );
        })}
        <div className={styles.contentLoader}>
          {<ContentLoader />}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/newstories.json"
  );
  let stories = await res.json();
  return {
    props: {
      stories,
    },
  };
}
