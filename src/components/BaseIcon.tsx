import { IconVariant } from '../../types/Icons/types'

type BaseIconProps = {
	variants: { [key: string]: JSX.Element }
	variant: IconVariant
}

const BaseIcon = (props: BaseIconProps) => {
	const { variants, variant } = props

	return variants[variant] ?? null
}

export default BaseIcon
