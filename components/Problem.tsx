export const Problem = () => {
  return (
    <section className='dark'>
      <div className='content'>
        <h2>What problem are we solving?</h2>
        <p className='large inter'>
          Filecoin lacks an on-chain primitive for trustless lending of capital
          to miners. As a result, Filecoin struggles from major capital
          inefficiencies - the majority of FIL holders cannot productively put
          their FIL to work without giving up custody of it, and well-reputed
          miners are forced to invest massive amounts of collateral in FIL to
          grow and remain profitable.
        </p>
        <p className='large inter'>
          Today&apos;s lending solutions are less than ideal because they
          require investors to give up custody of their FIL to participate, and
          force miners to relinquish ownership over their entire mining
          operation. Furthermore, it introduces operational overhead for both
          the custodians and the miners.
        </p>
        <p className='large inter'>
          Glif will solve Filecoin&apos;s capital inefficiencies with the first
          on-chain lending primitive, enabling miners to safely borrow capital
          and investors to earn yield on FIL.
        </p>
        <p className='large inter'>
          <b>
            This opens the door to an entirely new suite of Filecoin
            applications such as perpetual deals, just-in-time lending, and
            DataDAOs - none of which are possible to build today.
          </b>
        </p>
      </div>
    </section>
  )
}
