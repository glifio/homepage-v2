import styled from 'styled-components'
import {
  Colors as RcColors,
  IconGlif,
  SmartLink,
  useEnvironment,
} from '@glif/react-components'
import { Breakpoints, Colors, Opacity } from '@/styles/Variables'

const FooterEl = styled.footer`
  padding: 2.5em;

  @media (max-width: ${Breakpoints.MOBILE_MAX}) {
    text-align: center;

    .glif {
      margin-top: 3em;
    }

    .links > div {
      margin-bottom: 2em;
    }
  }

  @media (min-width: ${Breakpoints.TABLET_MIN}) and (max-width: ${Breakpoints.TABLET_MAX}) {
    text-align: center;

    .glif {
      margin-top: 3em;
    }

    .links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: ${Breakpoints.DESKTOP_MIN}) {
    display: flex;
    flex-direction: row-reverse;

    .glif {
      flex: 0 1 50%;
    }

    .links {
      flex: 1 0 50%;
      display: flex;
      gap: 2em;

      & > div {
        flex: 0 0 25%;
        max-width: 10em;
      }
    }
  }

  .glif p {
    margin: 0.5em 0;
  }

  h6 {
    margin: 0 0 1em 0;
  }

  li {
    margin: 0.5em 0;
  }

  a {
    color: ${Colors.WHITE};
    opacity: ${Opacity.TRANSPARENT_TEXT};
    transition: opacity 200ms;

    &:hover {
      text-decoration: none;
      opacity: 1;
    }
  }
`

export const Footer = () => {
  const {
    explorerUrl,
    walletUrl,
    safeUrl,
    nodesUrl,
    verifierUrl,
    blogUrl,
    githubUrl,
    discordUrl,
    contactEmail,
  } = useEnvironment()
  return (
    <FooterEl className='dark'>
      <div className='links'>
        <div>
          <h6>About</h6>
          <ul>
            <li>
              <SmartLink href={blogUrl}>Blog</SmartLink>
            </li>
            <li>
              <SmartLink href={`mailto:${contactEmail}`}>Contact</SmartLink>
            </li>
          </ul>
        </div>
        <div>
          <h6>Apps</h6>
          <ul>
            <li>
              <SmartLink href={walletUrl}>Wallet</SmartLink>
            </li>
            <li>
              <SmartLink href={safeUrl}>Safe</SmartLink>
            </li>
            <li>
              <SmartLink href={nodesUrl}>Nodes</SmartLink>
            </li>
            <li>
              <SmartLink href={explorerUrl}>Explorer</SmartLink>
            </li>
            <li>
              <SmartLink href={verifierUrl}>Verifier</SmartLink>
            </li>
          </ul>
        </div>
        <div>
          <h6>Community</h6>
          <ul>
            <li>
              <SmartLink href={githubUrl}>Github</SmartLink>
            </li>
            <li>
              <SmartLink href={discordUrl}>Discord</SmartLink>
            </li>
          </ul>
        </div>
      </div>
      <div className='glif'>
        <IconGlif width='2.5em' color={RcColors.WHITE} />
        <p>GLIF FOR LIFE &#128156;</p>
      </div>
    </FooterEl>
  )
}
