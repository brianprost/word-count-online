import type { NextPage } from 'next'
import { useState, useEffect } from 'react'

const Home: NextPage = () => {
  const [text, setText] = useState<string>('')
  const [wordCount, setWordCount] = useState<number>(0)

  useEffect(() => {
    const textAsArray: string[] = text.split(' ')
    const textAsArrayFiltered: string[] = textAsArray.filter(String)

    setWordCount(textAsArrayFiltered.length)
  }, [text])

  const textHandler = (content: any) => {
    setText(content.target.value)
  }

  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center">
      <input className="" value={text} onChange={textHandler} />

      <h2>{wordCount}</h2>
    </div>
  )
}

export default Home
