import React from "react";
import styles from "../../styles/GoogleDriveLoading.module.scss";

function GoogleDriveLoading() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <svg
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="583.308 865.787 2500 2166"
        >
          <defs>
            <clipPath id="blueclippath">
              <path
                className={styles.clip}
                d="M1000,3031.54889l416.63519-721.84056H3083.30763l-416.67336,721.84056Z"
              />
            </clipPath>
            <clipPath id="yellowclippath">
              <path
                className={styles.clip}
                d="M2249.99908,2309.70822h833.30854L2249.99908,866.0254h-833.3639Z"
              />
            </clipPath>
            <clipPath id="greenclippath">
              <path
                className={styles.clip}
                d="M583.30766,2309.70822,1000,3031.54868l833.30849-1443.68113L1416.63519,866.0254Z"
              />
            </clipPath>
          </defs>
          <g>
            <g id={styles.grey}>
              <g className={styles.blue} clipPath="url(#blueclippath)">
                <path d="M0,3031.54889l416.63519-721.84056H3083.30763l-416.67336,721.84056Z" />
              </g>
              <g className={styles.yellow} clipPath="url(#yellowclippath)">
                <path d="M2749.99908,3175.73363h833.30854L2249.99908,866.0254h-833.3639Z" />
              </g>
              <g className={styles.green} clipPath="url(#greenclippath)">
                <path d="M583.30766,2309.70822,1000,3031.54868,2333.30849,721.84215,1916.63519,0Z" />
              </g>
            </g>
            <g id={styles.colour}>
              <g className={styles.blue} clipPath="url(#blueclippath)">
                <path d="M0,3031.54889l416.63519-721.84056H3083.30763l-416.67336,721.84056Z" />
              </g>
              <g className={styles.yellow} clipPath="url(#yellowclippath)">
                <path d="M2749.99908,3175.73363h833.30854L2249.99908,866.0254h-833.3639Z" />
              </g>
              <g className={styles.green} clipPath="url(#greenclippath)">
                <path d="M583.30766,2309.70822,1000,3031.54868,2333.30849,721.84215,1916.63519,0Z" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default GoogleDriveLoading;
