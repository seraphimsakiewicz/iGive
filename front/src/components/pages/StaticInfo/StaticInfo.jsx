import React from 'react'
import styles from './styleStaticInfo.module.css';

function StaticInfo() {
  return (
    <>
      <h3>Statistics</h3>
      <p className={styles.eventLeftText}>
        According to the Russian Public Opinion Research Center (VCIOM), over 11 years the number of blood donors in our country increased from 36% (2008) to 45% (2019). 45% of Russians have become donors: including 12% once, 14% 2-3 times, and 19% more than 3 times.
      </p>
      <p className={styles.eventLeftText}>
        In Russia, any citizen over 18 years old and foreigners residing in Russia for at least a year can become donors. Blood donation is contraindicated for those weighing less than 50 kg. Requirements for donors, preparation information, and blood donation center addresses are listed on the Blood Service website of the Federal Medical-Biological Agency (FMBA).
      </p>
      <p className={styles.eventLeftText}>
        In Russia, about 1.5 million people (more than 4,000 daily) need blood transfusions annually. In 2018, the total number of blood donors and its components was over 1.283 million people, performing more than 2.5 million donations. About 97% of procedures are done on a voluntary basis.
      </p>
    </>
  )
}

export default StaticInfo
