import type { NextPage } from 'next'
import { Landing } from '@/components/Landing'
import { Features } from '@/components/Features'
import { Problem } from '@/components/Problem'
import { Apps } from '@/components/Apps'
import { UsedBy } from '@/components/UsedBy'
// import { FAQ } from '@/components/FAQ'

const Home: NextPage = () => (
  <>
    <Landing />
    <Features />
    <Problem />
    <Apps />
    <UsedBy />
    {/* <FAQ /> */}
  </>
)

export default Home
