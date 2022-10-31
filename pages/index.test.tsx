import { render } from '@testing-library/react'
import { TestEnvironment } from '@glif/react-components'
import Home from '@/pages/index'

it('renders the homepage', () => {
  const { container } = render(
    <TestEnvironment>
      <Home />
    </TestEnvironment>
  )
  expect(container).toMatchSnapshot()
})
