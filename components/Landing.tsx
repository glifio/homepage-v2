import styled from 'styled-components'
import { SmartLink } from '@glif/react-components'
import { Colors, FontSizes } from '@/styles/Variables'

const LandingEl = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 4em);

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;

    .left,
    .right {
      position: absolute;
      top: 0;
      height: 100%;
      width: 25%;
    }

    .top,
    .bottom {
      position: absolute;
      left: 0;
      width: 100%;
      height: 50%;
      background-size: cover;
    }

    .left {
      left: 0;
    }

    .right {
      right: 0;
    }

    .top {
      top: 0;
    }

    .bottom {
      bottom: 0;
    }

    .left .top {
      background-image: url(/img/grid/left-top.png);
      background-position: 100% 100%;
    }

    .left .bottom {
      background-image: url(/img/grid/left-bottom.png);
      background-position: 100% -2px;
    }

    .right .top {
      background-image: url(/img/grid/right-top.png);
      background-position: 0 100%;
    }

    .right .bottom {
      background-image: url(/img/grid/right-bottom.png);
      background-position: 0 -2px;
    }
  }

  .foreground {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .launching {
      display: flex;
      font-size: ${FontSizes.L};
      text-align: center;
      text-transform: uppercase;
      color: ${Colors.ORANGE_MEDIUM};

      .bracket {
        width: 1.25em;
        border: 1px solid ${Colors.RED_MEDIUM};
        opacity: 0.7;

        &.left {
          border-right: none;
        }

        &.right {
          border-left: none;
        }
      }

      p {
        margin: 1em 0.5em;
      }
    }

    h1 {
      max-width: 47.5rem;
    }

    .buttons {
      display: flex;
      justify-content: center;
      gap: 2em;
      margin: 4em 0;
    }
  }
`

export const Landing = () => {
  return (
    <LandingEl className='dark'>
      <div className='background'>
        <div className='left'>
          <div className='top' />
          <div className='bottom' />
        </div>
        <div className='right'>
          <div className='top' />
          <div className='bottom' />
        </div>
      </div>
      <div className='foreground'>
        <div className='launching inter'>
          <div className='bracket left' />
          <p>Glif pools, launching in 2023</p>
          <div className='bracket right' />
        </div>
        <h1>
          The only Filecoin staking protocol, designed for miners <i>and</i>{' '}
          retail investors.
        </h1>
        <div className='buttons'>
          <SmartLink
            className='button dark-primary'
            href='https://discord.gg/HbNMdFHN9k'
          >
            Join the early community
          </SmartLink>
        </div>
      </div>
    </LandingEl>
  )
}
