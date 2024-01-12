import React from 'react'

type BaseIconProps = {
	variants: { [key: string]: JSX.Element }
	variant: any
	iconLabel?: string
}

const BaseIcon = React.forwardRef<HTMLSpanElement, BaseIconProps>((props, forwardedRef) => {
	const { variants, variant, iconLabel = 'aftershoot unicon icon', ...restProps } = props

	if (!variants[variant]) return null

	return (
		<span ref={forwardedRef} {...restProps} role='img' aria-label={iconLabel} aria-hidden='false' style={{ display: 'inline-block' }}>
			{variants[variant]}
		</span>
	)
})

export default BaseIcon
