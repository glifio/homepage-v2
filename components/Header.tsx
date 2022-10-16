import styled, { css } from 'styled-components'
import { MutableRefObject, useState } from 'react'
import {
  Colors as RcColors,
  IconGlif,
  SmartLink,
  useEnvironment,
} from '@glif/react-components'
import { Breakpoints, Colors, Opacity } from '@/styles/Variables'
import { AppLinks } from './AppLinks'
import DropdownIcon from '@/public/img/icons/dropdown.svg'

const HeaderEl = styled.header`
  position: sticky;
  z-index: 1;
  top: 0;

  .bar {
    position: relative;
    display: grid;
    height: 4em;
    grid-template-columns: 6em auto 6em;
    border-bottom: 1px solid transparent;
    transition: border-color 400ms;

    ${({ open }: HeaderElProps) =>
      open &&
      css`
        border-color: rgba(255, 255, 255, 0.2);
      `}

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    nav {
      display: flex;
      justify-content: center;

      & > * {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        gap: 0.5em;
        padding: 0 1.5em;
        color: ${Colors.WHITE};
        opacity: ${Opacity.TRANSPARENT_TEXT};
        transition: opacity 200ms;

        &:hover {
          text-decoration: none;
          opacity: 1;
        }
      }

      .apps svg {
        transition: transform 200ms;
      }

      ${({ open }: HeaderElProps) =>
        open &&
        css`
          .apps {
            opacity: 1;
            svg {
              transform: scaleY(-1);
            }
          }
        `}
    }
  }

  .dropdown {
    position: absolute;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 400ms;

    ${({ open }: HeaderElProps) =>
      open &&
      css`
        transform: translateY(100%);
      `}
  }

  .dropdown-content {
    display: grid;
    max-width: 1920px;
    margin: 0 auto;

    @media (max-width: ${Breakpoints.MOBILE_MAX}) {
      padding: 1em 1.5em;
      grid-template-columns: 1fr;
    }

    @media (min-width: ${Breakpoints.TABLET_MIN}) and (max-width: ${Breakpoints.TABLET_MAX}) {
      padding: 1.5em 2em;
      grid-row-gap: 0.5em;
      grid-template-columns: 1fr;
    }

    @media (min-width: ${Breakpoints.DESKTOP_MIN}) and (max-width: ${Breakpoints.DESKTOP_M_MAX}) {
      padding: 2em 2.5em;
      grid-row-gap: 1em;
      grid-column-gap: 2.5em;
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${Breakpoints.DESKTOP_L_MIN}) {
      padding: 2.5em 3em;
      grid-row-gap: 1.5em;
      grid-column-gap: 3em;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`

interface HeaderElProps {
  open: boolean
}

export const Header = ({ headerCloseRef }: HeaderProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

  const { blogUrl, githubUrl, discordUrl } = useEnvironment()

  headerCloseRef.current = () => setOpen(false)

  const onMouseEnter = () => {
    if (timer) {
      clearInterval(timer)
      setTimer(null)
    }
  }

  const onMouseLeave = () => {
    if (open) setTimer(setTimeout(() => setOpen(false), 2000))
  }

  return (
    <HeaderEl
      open={open}
      onClick={e => e.stopPropagation()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className='dropdown dark'>
        <div className='dropdown-content'>
          <AppLinks color={Colors.WHITE} />
        </div>
      </div>
      <div className='bar dark'>
        <div className='logo'>
          <IconGlif height='2em' color={RcColors.WHITE}></IconGlif>
        </div>
        <nav>
          <span
            className='apps'
            onClick={() => setOpen(!open)}
            onMouseEnter={() => setOpen(true)}
          >
            Apps
            <DropdownIcon width='0.625em' />
          </span>
          <SmartLink href={blogUrl}>Blog</SmartLink>
          <SmartLink href={githubUrl}>Code</SmartLink>
          <SmartLink href={discordUrl}>Discord</SmartLink>
        </nav>
      </div>
    </HeaderEl>
  )
}

interface HeaderProps {
  headerCloseRef: MutableRefObject<() => void | null>
}
