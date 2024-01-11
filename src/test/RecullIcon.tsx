import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const Recull = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
  //props
  const {
    variant = 'primary',
    color = DEFAULT_ICON.COLOR,
    bgColor = DEFAULT_ICON.BG_COLOR,
    size = DEFAULT_ICON.SIZE,
    inActive = false,
    ...restProps
  } = props

  const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

  // variants
  const primary = (
<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.3307 20.3339C43.6786 15.6411 41.5016 11.2929 38.1351 7.95917C34.7686 4.6254 30.3994 2.49097 25.7005 1.88466C21.0016 1.27835 16.2337 2.2338 12.1313 4.60384C8.02881 6.97388 4.81939 10.627 2.9974 15.0005M1.66406 4.33385V15.0005H12.3307M1.66406 25.6673C2.31622 30.3601 4.49321 34.7082 7.85969 38.042C11.2262 41.3758 15.5954 43.5102 20.2943 44.1165C24.9932 44.7228 29.7611 43.7674 33.8635 41.3973C37.966 39.0273 41.1754 35.3742 42.9974 31.0007M44.3307 41.6673V31.0007H33.6641" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<mask id="mask0_2273_36597" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="14" y="16" width="18" height="15">
<path d="M25.2798 21.9933C26.4629 23.2762 28.3777 23.4506 29.7577 22.4012C31.1377 21.3519 31.556 19.4031 30.7359 17.8443C29.9157 16.2854 28.1108 15.5985 26.5152 16.238C24.9195 16.8775 24.0267 18.6456 24.4271 20.3726H23.5746C23.3508 20.3736 23.1364 20.4658 22.9777 20.6294L22.5769 21.0457L22.1762 20.6294C22.0174 20.4658 21.803 20.3736 21.5793 20.3726H20.7267C21.1272 18.6456 20.2343 16.8775 18.6387 16.238C17.043 15.5985 15.2381 16.2854 14.418 17.8443C13.5979 19.4031 14.0161 21.3519 15.3961 22.4012C16.7761 23.4506 18.691 23.2762 19.874 21.9933L20.7693 22.9232L16.506 27.3512C16.0262 27.849 15.7563 28.5243 15.7557 29.2287V30.5571C15.7557 30.8016 15.9466 31 16.182 31H16.4293C16.5449 31.0016 16.656 30.9536 16.7363 30.867L25.2798 21.9933ZM16.2588 20.7357C15.6851 20.1363 15.5991 19.1993 16.0534 18.4981C16.5077 17.7969 17.3758 17.5268 18.1265 17.8531C18.8771 18.1793 19.3013 19.011 19.1394 19.8393C18.9775 20.6677 18.2747 21.2618 17.461 21.2582C17.0095 21.2562 16.5771 21.0683 16.2588 20.7357ZM28.8951 18.2383C29.3817 18.6712 29.5937 19.3508 29.4438 19.9978C29.294 20.6449 28.8076 21.1501 28.1846 21.3057C27.5617 21.4613 26.9074 21.2412 26.4905 20.7357C26.004 20.3028 25.7919 19.6232 25.9418 18.9761C26.0916 18.3291 26.5781 17.8239 27.201 17.6683C27.824 17.5126 28.4783 17.7328 28.8951 18.2383ZM28.4175 30.867C28.4978 30.9536 28.609 31.0016 28.7245 31H28.9718C29.2073 31 29.3982 30.8016 29.3982 30.5571V29.2287C29.3975 28.5243 29.1276 27.849 28.6478 27.3512L25.4418 24.0125L23.6342 25.8899L28.4175 30.867Z" fill="white"/>
</mask>
<g mask="url(#mask0_2273_36597)">
<path d="M33.2201 11.5508H18.3664C15.9549 11.5508 14 13.5057 14 15.9172V32.229C14 34.6405 15.9549 36.5954 18.3664 36.5954H33.2201C35.6316 36.5954 37.5865 34.6405 37.5865 32.229V15.9172C37.5865 13.5057 35.6316 11.5508 33.2201 11.5508Z" fill="white"/>
</g>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(Recull)
