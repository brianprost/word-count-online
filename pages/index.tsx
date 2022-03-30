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
      <input
        className="input input-bordered input-lg w-full max-w-xs"
        value={text}
        onChange={textHandler}
      />
      <div className="stats stats-vertical shadow lg:stats-horizontal">
        <div className="stat">
          <div className="stat-title">Words</div>
          <div className="stat-value">{wordCount}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Time to read</div>
          <div className="stat-value">{Math.ceil(wordCount / 255)} Minutes</div>
        </div>
      </div>
    </div>
  )
}

export default Home
