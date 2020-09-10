import styles from "./../styles/Home.module.css";
import React from "react";
import ContentLoader from "../src/common/contentLoader";
import Story from "../src/components/Story";
import { HomeTypes, StoryTypes } from "../src/common/types";

export default function Home({ stories }: HomeTypes) {

  const [allStories, setAllStories] = React.useState<Array<StoryTypes>>([]);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<Boolean>(true);

  React.useEffect(() => {
    async function getStories() {
      if (
        allStories.length < stories.length
      ) {
        const newStories: Array<StoryTypes> = [];
        for (i = pageNumber * 5 - 5; i < pageNumber * 5; i++) {
          const res = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${stories[i]}.json`
          );
          const newStory: StoryTypes = await res.json();
          newStories.push(newStory);
        }
        const finalStories = allStories;
        finalStories.push(...newStories);
        setAllStories(finalStories);
        setPageNumber(pageNumber + 1);
      } else {
        setLoading(false);
      }
    }
    getStories();
  }, [pageNumber]);
  let i = 0;

  return (
    <div className={styles.container}>
      <div className={styles.storiesContainer}>
        <h2 className={styles.pageTitle}>Hacker News</h2>

        {allStories.map((story) => {
          i++;
          return (
            <Story key={story.id} i={i} story={story} />
          );
        })}
        <div className={styles.contentLoader}>
          {loading && <ContentLoader />}

        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/newstories.json"
  );
  const stories = await res.json();

  return {
    props: {
      stories,
    },
  };
}
