/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '@common/styles';
import Image from 'next/image';
import { skills } from '@config';
import { srConfig } from '@config/sr';
import { StyledAboutSection, StyledText, StyledPic } from './styles';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <NumberedHeading>About Me</NumberedHeading>
      <div className="inner">
        <StyledText>
          <p>
            An enthusiastic front-end developer with 4+ years of experience
            building sleek, high-performance web applications. From responsive
            front-end architectures to seamless user interfaces, I specialize in
            using modern JavaScript frameworks like React and Next with
            TypeScript.
          </p>
          <p>
            As a developer who thrives in agile teams, I collaborate effectively
            with product owners, developers, and designers to achieve successful
            implementations.
          </p>
          <br />
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="skills-list">
            {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </StyledText>
        <StyledPic>
          <div className="wrapper">
            <Image
              width={300}
              height={300}
              src="/avatar.jpeg"
              alt="Avatar"
              className="img"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
