import styles from "./../../styles/Story.module.css";
import React from "react";
import timeSince from "../../src/utils/getDate";
import { StoryProps } from "../common/types";


export default function Story({ story }: StoryProps) {
    return (
        <>
            <div key={story.id} className={styles.storyCard}>
                {/* <h2 className={styles.storyNumber}>{i}</h2> */} {/*Removing story numbers because we need infinite scroll experience, otherwise numbers are good UX*/}
                <a rel="noopener" target="_blank" className={styles.storyContent} href={story.url}>
                    <h1 className={styles.storyTitle}>"{story.title}"</h1>
                    <div className={styles.storyFooter}>
                        <p className={styles.storyAuthor}>By - {story.by}</p>
                        <p className={styles.storyPostedTime}>{timeSince(story.time)}</p>
                    </div>
                </a>
            </div>
            <hr className={styles.storyDivider} />
        </>
    );
}
