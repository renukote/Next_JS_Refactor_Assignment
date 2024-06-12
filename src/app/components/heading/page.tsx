import React from 'react'

const HeadingText = (props: { title: string }) => {
    const title = props.title;
  return (
    <h1 className="text-white text-[50px] sm:text-[80px]  font-[600] uppercase leading-none">
      {title}
    </h1>
  )
}

export default HeadingText
