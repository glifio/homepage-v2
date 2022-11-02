import styled from 'styled-components'
import { FeatureCard } from './FeatureCard'
import { FeatureChecklist } from './FeatureChecklist'
import { Breakpoints } from '@/styles/Variables'
import LendIcon from '@/public/img/icons/lend.svg'
import BorrowIcon from '@/public/img/icons/borrow.svg'

const FeaturesEl = styled.section`
  .features {
    display: grid;
    grid-gap: 2.5em;

    @media (max-width: ${Breakpoints.TABLET_MAX}) {
      grid-template-columns: 1fr;
    }

    @media (min-width: ${Breakpoints.DESKTOP_MIN}) {
      grid-template-columns: 1fr 1fr;
    }
  }
`

export const Features = () => {
  return (
    <FeaturesEl className='dark'>
      <div className='content'>
        <h2>Features of the Glif Staking Marketplace</h2>
        <p className='subtitle'>
          Powering capital efficiency on Filecoin. We help miners scale and
          stakers earn rewards directly from their wallet.
        </p>
        <div className='features'>
          <div className='feature'>
            <FeatureCard
              Icon={LendIcon}
              title='Stake'
              description='Earn rewards on your Filecoin while supporting the network.'
              buttonText='Join our early community'
              buttonHref='https://discord.gg/HbNMdFHN9k'
            />
            <FeatureChecklist
              title='Investors'
              items={[
                'Stake directly from Glif, Ledger, Metamask, or your favorite Ethereum wallet.',
                'Diversify your portfolio and returns by staking into pools with varying degrees of risk.',
                "Don't give up custody of your Filecoin tokens.",
              ]}
            />
          </div>
          <div className='feature'>
            <FeatureCard
              Icon={BorrowIcon}
              title='Borrow'
              description='Borrow Filecoin from multiple pools at once and maintain ownership of your miner.'
              buttonText='Get early access'
              buttonHref='https://docs.google.com/forms/d/e/1FAIpQLSfrDffDpFBLOnwSq5B-NqGYSJ3W6U7q_yrKoHvUHL8QBL0-Og/viewform'
            />
            <FeatureChecklist
              title='Miners'
              items={[
                'Compare interest rates, payment plans, and collateral requirements across multiple pools.',
                'Take out loans from multiple pools at once with the same miner.',
                "Don't give up ownership of your miner.",
              ]}
            />
          </div>
        </div>
      </div>
    </FeaturesEl>
  )
}
