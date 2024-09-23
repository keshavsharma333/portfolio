import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NumberedHeading } from '@common/styles';
import { srConfig } from '@config/sr';
import { jobs } from '@config';
import { StyledExperienceSection, StyledTabList, StyledTabContent, StyledTabButton } from './styles';

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledExperienceSection id="experience" ref={revealContainer}>
      <NumberedHeading>Experiences</NumberedHeading>
      <div className="inner">
        <StyledTabList>
          {jobs.map(({ company }, i) => (
            <StyledTabButton
              key={i}
              isActive={activeTabId === i}
              onClick={() => setActiveTabId(i)}
            >
              {company}
            </StyledTabButton>
          ))}
        </StyledTabList>

        <StyledTabContent>
          <CSSTransition key={activeTabId} timeout={250} classNames="fade">
            <div>
              <h3>
                {jobs[activeTabId].title} <span className="company">@ {jobs[activeTabId].company}</span>
              </h3>
              <p className="job-details">
                {jobs[activeTabId].range} | {jobs[activeTabId].location} | {jobs[activeTabId].type}
              </p>
              <ul>
                {jobs[activeTabId].description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </CSSTransition>
        </StyledTabContent>
      </div>
    </StyledExperienceSection>
  );
};

export default Experience;
