/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '@common/styles';
import { srConfig } from '@config/sr';
import { StyledContactSection } from './styles';

const Contact = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <NumberedHeading>Contact</NumberedHeading>
      <p>
        I'm actively seeking new and exciting opportunities to work on
        challenging projects and grow my skills. Whether you have a question, a
        collaboration idea, or a job opportunity, feel free to reach out.
      </p>
    </StyledContactSection>
  );
};

export default Contact;
