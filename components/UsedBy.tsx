import styled from 'styled-components'
import Image from 'next/image'
import { SmartLink } from '@glif/react-components'
import { Breakpoints, FontSizes } from '@/styles/Variables'
import protocolLabsImg from '@/public/img/used-by/protocol-labs.png'
import filecoinFoundationImg from '@/public/img/used-by/filecoin-foundation.png'
import metamaskImg from '@/public/img/used-by/metamask.png'
import braveImg from '@/public/img/used-by/brave.png'

const UsedByEl = styled.section`
  h2 {
    margin: calc(${FontSizes.XXL} * 1.25) 0;
    font-size: ${FontSizes.L};
    font-weight: 400;
    text-transform: capitalize;
  }

  .logos {
    column-gap: 2em;
    row-gap: 3em;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 200ms;

      &:hover {
        transform: scale(1.1);
      }
    }

    @media (max-width: ${Breakpoints.MOBILE_MAX}) {
      display: grid;
      grid-template-columns: 1fr;
    }

    @media (min-width: ${Breakpoints.TABLET_MIN}) and (max-width: ${Breakpoints.TABLET_MAX}) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${Breakpoints.DESKTOP_MIN}) {
      display: flex;
      justify-content: space-between;
    }
  }
`

export const UsedBy = () => {
  return (
    <UsedByEl className='border-top'>
      <div className='content'>
        <h2>USED BY</h2>
        <div className='logos'>
          <SmartLink href='https://protocol.ai'>
            <Image src={protocolLabsImg} alt='' />
          </SmartLink>
          <SmartLink href='https://fil.org'>
            <Image src={filecoinFoundationImg} alt='' />
          </SmartLink>
          <SmartLink href='https://metamask.io'>
            <Image src={metamaskImg} alt='' />
          </SmartLink>
          <SmartLink href='https://brave.com'>
            <Image src={braveImg} alt='' />
          </SmartLink>
        </div>
      </div>
    </UsedByEl>
  )
}
