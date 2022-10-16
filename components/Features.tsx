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
        <h2>Features of the Glif Lending Marketplace</h2>
        <p className='subtitle'>
          Powering capital efficiency on Filecoin. We help miners scale and
          lenders earn rewards directly from their wallet.
        </p>
        <div className='features'>
          <div className='feature'>
            <FeatureCard
              Icon={LendIcon}
              title='Lend'
              description='Earn rewards on your Filecoin, while supporting the network.'
              buttonText='Get early access'
              buttonHref=''
            />
            <FeatureChecklist
              title='Investors'
              items={[
                'Lend directly from Ledger, Metamask, or your favorite wallet.',
                'Transparency. Get clear up-front rates and risk profiles.',
                'Use our Filecoin Rewards Calculator to compare rewards across lending pools.',
              ]}
            />
          </div>
          <div className='feature'>
            <FeatureCard
              Icon={BorrowIcon}
              title='Borrow'
              description='Borrow Filecoin with no collateral and maintain ownership of your miner.'
              buttonText='Get early access'
              buttonHref=''
            />
            <FeatureChecklist
              title='Miners'
              items={[
                'Self-manage your loans. Compare lending rates of multiple lending pools.',
                'Scale your mining operation without tying up collateral. Use your mining reputation to secure loans.',
                "Don't give up ownership of your miner. Stay in control of your mining operation.",
              ]}
            />
          </div>
        </div>
      </div>
    </FeaturesEl>
  )
}
