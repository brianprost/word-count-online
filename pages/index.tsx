import type { NextPage } from 'next'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { CgWebsite } from 'react-icons/cg'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Home: NextPage = () => {
  const [text, setText] = useState<string>('')
  const [wordCount, setWordCount] = useState<number>(0)
  const minToRead = Math.ceil(wordCount / 255)

  useEffect(() => {
    const textAsArray: string[] = text.split(' ')
    const textAsArrayFiltered: string[] = textAsArray.filter(String)

    setWordCount(textAsArrayFiltered.length)
  }, [text])

  const textHandler = (content: any) => {
    setText(content.target.value)
  }

  return (
    <section className="flex h-screen flex-col justify-between bg-base-100">
      <div className="container mx-auto flex h-full flex-col items-center justify-center gap-4">
        <div className="stats stats-horizontal bg-primary-focus shadow lg:stats-horizontal">
          <div className="stat">
            <div className="stat-title text-primary-content">Words</div>
            <div className="stat-value text-accent drop-shadow-md">
              {wordCount}
            </div>
          </div>
          <div className="stat">
            <div className="stat-title text-primary-content">Time to read</div>
            <div className="stat-value text-accent-focus">
              {minToRead} Minute{minToRead < 2 ? '' : 's'}
            </div>
          </div>
        </div>
        <textarea
          className="textarea textarea-accent h-1/2 w-full"
          value={text}
          placeholder={'paste or type text here'}
          onChange={textHandler}
        />
      </div>
      <footer className="footer items-center bg-secondary p-4 font-bold text-secondary-content antialiased">
        <div className="grid-flow-col items-center">
          <img
            src="img/brian-prost-scarecrow.png"
            alt="brian-prost-scarecrow"
            className="h-9 rounded-md"
          />
          <p>
            Made by{' '}
            <a
              className="ml-1 rounded-md border-b border-primary py-2 px-1 font-brian-theme text-xl hover:border-primary-content hover:bg-primary hover:text-primary-content"
              href="https://brianprost.com"
            >
              bRIAN pRōST
            </a>
          </p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://linkedin.com/in/brianprost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="text-2xl hover:bg-primary-content hover:text-primary" />
          </a>
          <a
            href="https://github.com/brianprost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="rounded-full text-2xl hover:bg-primary-content hover:text-primary" />
          </a>
        </div>
      </footer>
    </section>
  )
}

export default Home
