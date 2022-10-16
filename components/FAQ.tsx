import { FAQItem } from './FAQItem'

export const FAQ = () => {
  return (
    <section className='border-top'>
      <div className='content'>
        <h2>FAQ</h2>
        <ul className='inter'>
          <FAQItem
            question='How does custody for staking and lending work?'
            answer='All of our solutions are non-custodial. You custody your crypto assets, while we help you earn via staking and lending.'
          />
        </ul>
      </div>
    </section>
  )
}
