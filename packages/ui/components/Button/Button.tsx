import tw from 'twin.macro'

export interface IButtonProps extends React.ComponentProps<'button'> {}
export function Button({ children, ...props }: IButtonProps) {
  return (
    <button
      type="button"
      css={{
        ...tw`inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-pink-700 bg-white border border-pink-300 rounded-md shadow-md sm:mt-0 sm:w-auto sm:text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300 hover:bg-pink-50`,
        ...(props.disabled && tw`opacity-50 hover:bg-white`),
      }}
      {...props}
    >
      {children}
    </button>
  )
}
