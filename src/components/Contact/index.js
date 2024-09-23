/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { email } from '@config';
import { srConfig } from '@config/sr';
import { NumberedHeading } from '@common/styles';
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
      <NumberedHeading overline>What’s Next?</NumberedHeading>

      <h2 className="title">Get In Touch</h2>

      <p >
  I'm actively seeking new and exciting opportunities to work on challenging projects and grow my skills.
  Whether you have a question, a collaboration idea, or a job opportunity, feel free to reach out! I'll try my best to get back to you as soon as possible!
</p>


      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
