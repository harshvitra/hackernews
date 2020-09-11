import styles from "./../../styles/Story.module.css";
import React from "react";
import timeSince from "../../src/utils/getDate";
import { StoryProps } from "../common/types";


export default function Story({ story }: StoryProps) {
    return (
        <>
            <div key={story.id} className={styles.storyCard}>
                <div className={styles.storyContent} >
                    <a rel="noopener" target="_blank" href={story.url}>
                        <h1 className={styles.storyTitle}>"{story.title}"</h1>
                    </a>
                    <div className={styles.storyFooter}>
                        <p className={styles.storyAuthor}>By - {story.by}</p>
                        <p className={styles.storyPostedTime}>{timeSince(story.time)}</p>
                    </div>
                </div>
            </div>
            <hr className={styles.storyDivider} />
        </>
    );
}
