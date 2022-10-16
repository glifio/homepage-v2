import { useEnvironment } from '@glif/react-components'
import { AppLink } from './AppLink'
import { Colors } from '@/styles/Variables'
import explorerImg from '@/public/img/apps/explorer-100.png'
import walletImg from '@/public/img/apps/wallet-100.png'
import safeImg from '@/public/img/apps/safe-100.png'
import nodesImg from '@/public/img/apps/nodes-100.png'
import verifierImg from '@/public/img/apps/verifier-100.png'

export const AppLinks = ({ color }: AppLinksProps) => {
  const { explorerUrl, walletUrl, safeUrl, nodesUrl, verifierUrl } =
    useEnvironment()
  return (
    <>
      <AppLink
        href={walletUrl}
        imageSrc={walletImg}
        title='Wallet'
        description='The most popular Filecoin Wallet, compatible with Ledger, Metamask, and more.'
        color={color}
      />
      <AppLink
        href={explorerUrl}
        imageSrc={explorerImg}
        title='Explorer'
        description='View the history of your accounts and smart contracts on our Filecoin blockchain explorer.'
        color={color}
      />
      <AppLink
        href={verifierUrl}
        imageSrc={verifierImg}
        title='Verifier'
        description='An automated Filecoin Notary - get better storage deals with miners.'
        color={color}
      />
      <AppLink
        href={safeUrl}
        imageSrc={safeImg}
        title='Safe'
        description='A Filecoin multisig wallet to more securely custody your funds.'
        color={color}
      />
      <AppLink
        href={nodesUrl}
        imageSrc={nodesImg}
        title='Nodes'
        description='Get started building Filecoin apps by using our Filecoin RPC API endpoints.'
        color={color}
      />
    </>
  )
}

interface AppLinksProps {
  color?: Colors
}
