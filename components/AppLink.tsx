import styled from 'styled-components'
import Image, { StaticImageData } from 'next/image'
import { SmartLink } from '@glif/react-components'
import { Breakpoints, Colors, Opacity } from '@/styles/Variables'

const AppLinkEl = styled(SmartLink)`
  display: flex;
  align-items: center;
  color: ${({ color }: AppLinkElProps) => color ?? Colors.BLACK};

  &:hover {
    text-decoration: none;
    h4 {
      text-decoration: underline;
    }
    img {
      transform: scale(1.1);
    }
  }

  .icon {
    position: relative;
    flex: 0 0 auto;
  }

  h4 {
    margin: 0.5em 0;
  }

  p {
    margin: 0.5em 0;
    opacity: ${Opacity.TRANSPARENT_TEXT};
  }

  img {
    transition: transform 200ms;
  }

  @media (max-width: ${Breakpoints.MOBILE_MAX}) {
    gap: 1.5em;
    .icon {
      width: 50px;
      height: 50px;
    }
  }

  @media (min-width: ${Breakpoints.TABLET_MIN}) and (max-width: ${Breakpoints.TABLET_MAX}) {
    gap: 2em;
    .icon {
      width: 75px;
      height: 75px;
    }
  }

  @media (min-width: ${Breakpoints.DESKTOP_MIN}) {
    gap: 2.5em;
    .icon {
      width: 100px;
      height: 100px;
    }
  }
`

interface AppLinkElProps {
  color?: Colors
}

export const AppLink = ({
  href,
  title,
  description,
  imageSrc,
  color,
}: AppLinkProps) => (
  <AppLinkEl href={href} color={color}>
    <div className='icon'>
      <Image src={imageSrc} alt='' />
    </div>
    <div>
      <h4>{title}</h4>
      <p className='inter'>{description}</p>
    </div>
  </AppLinkEl>
)

interface AppLinkProps {
  href: string
  title: string
  description: string
  imageSrc: StaticImageData
  color?: Colors
}
