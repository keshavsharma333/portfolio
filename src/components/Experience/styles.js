import styled from 'styled-components';

export const StyledExperienceSection = styled.section`
  max-width: 700px;
  margin: 0 auto;
  padding: 100px 0;
`;

export const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: 200px;
  float: left;
`;

export const StyledTabButton = styled.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0 20px 2px;
  border-left: 2px solid ${({ theme }) => theme.colors.lightestNavy};
  background-color: transparent;
  color: ${({ isActive, theme }) => (isActive ? theme.brand.primary : theme.colors.slate)};
  font-family: ${({ theme }) => theme.fontFamily.fontMono};
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-align: left;
  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightNavy};
  }

  &.active {
    color: ${({ theme }) => theme.brand.primary};
    border-left-color: ${({ theme }) => theme.brand.primary};
  }
`;

export const StyledTabContent = styled.div`
  position: relative;
  padding-left: 30px;
  margin-left: 200px;

  h3 {
    margin-bottom: 5px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: ${({ theme }) => theme.brand.primary};
    }
  }

  .job-details {
    font-family: ${({ theme }) => theme.fontFamily.fontMono};
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.slate};
    margin-bottom: 25px;
  }

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.text.accent};

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.brand.primary};
    }
  }
`;
