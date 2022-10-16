import styled from 'styled-components'

const FeatureChecklistEl = styled.div`
  ul {
    padding-left: 1.5em;
    list-style-type: checks;
  }
`

export const FeatureChecklist = ({ title, items }: FeatureChecklistProps) => (
  <FeatureChecklistEl className='inter'>
    <h5>{title}</h5>
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </FeatureChecklistEl>
)

interface FeatureChecklistProps {
  title: string
  items: Array<string>
}
