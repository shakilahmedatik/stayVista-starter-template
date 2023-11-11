import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const HeartButton = () => {
  return (
    <div
      className='
        relative
        hover:opacity-80
        transition
        cursor-pointer
      '
    >
      <AiOutlineHeart
        size={28}
        className='
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        '
      />
      <AiFillHeart
        size={24}
        className='fill-neutral-500/70 hover:fill-rose-500'
      />
    </div>
  )
}

export default HeartButton
