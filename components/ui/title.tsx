import { createElement } from "react"

type TitleProps = {
  primaryColor: string
  secondaryColor: string
  text: string
  as?: string
  invert?: boolean
}

export const Title = ({ as = 'h3', invert, primaryColor, secondaryColor, text }: TitleProps) => {
  const classNames = `mb-4 font-extrabold text-2xl sm:text-4xl scroll-m-4 ${invert ? 'dark:invert' : ''}`
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => createElement(as, props, text)

  return (
    <Heading className={classNames} style={{
      backgroundImage: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 50%)`,
      backgroundSize: '100%',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      MozBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      WebkitBoxDecorationBreak: 'clone',
    }} id={text.split(' ')[0].toLowerCase()}>{text}</Heading>
  )
}