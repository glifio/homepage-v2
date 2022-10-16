import styled from 'styled-components'
import { useState } from 'react'
import { Colors } from '@/styles/Variables'

const FAQItemEl = styled.li`
  h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .toggle {
    color: ${Colors.PURPLE_MEDIUM};
    cursor: pointer;
    font-size: 3em;
    line-height: 0;
    user-select: none;
  }
`

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  return (
    <FAQItemEl>
      <h4>
        <span>{question}</span>
        <span className='toggle' onClick={() => setExpanded(!expanded)}>
          {expanded ? '\u2212' : '\u002b'}
        </span>
      </h4>
      {expanded && <p className='large'>{answer}</p>}
    </FAQItemEl>
  )
}

interface FAQItemProps {
  question: string
  answer: string
}
