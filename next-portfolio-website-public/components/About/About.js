import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/About.module.scss";
import variables from "../../styles/export.module.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import { Experiences } from "./Content";
import { useMediaQuery } from "react-responsive";
import animate from "../Utils/animate";

function About() {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const bioRef = useRef(null);
  const pfpRef = useRef(null);
  const [pfpurl, setPfpUrl] = useState("/pfp2.jpg");
  const isMobile = useMediaQuery({
    query: "(max-width: 1300px)",
  });

  useEffect(() => {
    animate(titleRef);
    animate(subTitleRef);
    animate(bioRef);
    animate(pfpRef, 200);
  }, []);

  return (
    <div name="about" className={styles.about}>
      <div className={styles.header}>
        <h1 className={styles.title} ref={titleRef}>
          About Me
        </h1>
        <h2 className={styles.subtitle} ref={subTitleRef}>
          Software Engineer
        </h2>
      </div>
      <div className={styles.content}>
        <div className={styles.bio} ref={bioRef}>
          <p className={styles.text}>
            Hello everyone! My name is Stephen Ip and I recently graduated from
            the University of California, Berkeley. I enjoy developing projects
            that appeal to a wide range of users so that many people can benefit
            from my work. This passion motivates me to work to become a better
            software developer so that I can better fulfill this goal.
          </p>
          <p className={styles.text}>
            When I&apos;m not grinding away at some code, I enjoy playing video
            games such as League of Legends, working out, and playing sports. I
            did swimming for over 6 years and water polo for 4 years during high
            school. In college, I picked up fencing and table tennis, and really
            enjoy learning new things.
          </p>
          <p className={styles.text}>
            Please explore my links to get more information about me and take a
            copy of my resume. If you have any questions, don&apos;t hesitate to
            contact me.
          </p>
        </div>
        <div className={styles.pfp} onClick={() => setPfpUrl("/zoey.jpg")}>
          <img className={styles.pfpimg} src={pfpurl} alt="pfp" />
        </div>
      </div>
      <VerticalTimeline
        className={styles["vertical-timeline"]}
        lineColor={variables.highlightColor}
        animate={isMobile ? false : true}
      >
        {Experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.title}
            className={
              experience.type == "education"
                ? styles["vertical-timeline-element--education"]
                : styles["vertical-timeline-element--work"]
            }
            contentStyle={{
              background: variables.secondaryBgColor,
              border: `1px solid ${variables.highlightColor}`,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${variables.highlightColor}`,
            }}
            date={experience.date}
            iconStyle={{
              background: variables.secondaryBgColor,
              color: "bisque",
              boxShadow: `0 0 0 4px ${variables.highlightColor}`,
              inset:
                "0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
            }}
            icon={
              experience.type == "education" ? <SchoolIcon /> : <WorkIcon />
            }
          >
            <div className={styles.experienceHeader}>
              <div>
                <h3 className={styles["vertical-timeline-element-title"]}>
                  {experience.title}
                </h3>
                <h4 className={styles["vertical-timeline-element-subtitle"]}>
                  {experience.subtitle}
                </h4>
              </div>
              <img src={experience.logo} alt="experience logo" />
            </div>
            <div className={styles["vertical-timeline-element-description"]}>
              {experience.description}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default About;
