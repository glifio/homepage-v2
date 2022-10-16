import styled from 'styled-components'
import { SmartLink } from '@glif/react-components'
import { AppLinks } from './AppLinks'

const AppsEl = styled.section`
  .links {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 2.5em;
  }
`

export const Apps = () => {
  return (
    <AppsEl>
      <div className='content'>
        <h2>Glif builds foundational tools for the Filecoin Ecosystem</h2>
        <p className='subtitle'>
          With ongoing support from{' '}
          <SmartLink href='https://protocol.ai'>Protocol Labs</SmartLink> and
          the <SmartLink href='https://fil.org'>Filecoin Foundation</SmartLink>,
          Glif has built and maintained essential Filecoin apps and tools since
          before Filecoin Mainnet launch in 2020.
        </p>
        <div className='separator' />
        <div className='links'>
          <AppLinks />
        </div>
      </div>
    </AppsEl>
  )
}
