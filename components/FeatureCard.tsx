import { FC, SVGProps } from 'react'
import { SmartLink } from '@glif/react-components'

export const FeatureCard = ({
  Icon,
  title,
  description,
  buttonHref,
  buttonText,
}: FeatureCardProps) => (
  <div className='card'>
    <Icon width='100%' height='3.5em' />
    <h3>{title}</h3>
    <p>{description}</p>
    <SmartLink className='button dark-primary' href={buttonHref}>
      {buttonText}
    </SmartLink>
  </div>
)

interface FeatureCardProps {
  Icon: FC<SVGProps<SVGSVGElement>>
  title: string
  description: string
  buttonHref: string
  buttonText: string
}
