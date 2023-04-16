import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import Head from 'next/head'

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
    <>
      <Head>
        <title>Online Word Counter</title>
        <meta name="theme-color" content="#efb192" />
        {/* For old IEs */}
        <link rel="shortcut icon" href="/favicon/favicon.ico" />

        {/* For new browsers - multisize ico  */}
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16 32x32"
          href="/favicon/favicon.ico"
        />

        {/* For iPad with high-resolution Retina display running iOS ≥ 7: */}
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/favicon-152-precomposed.png"
        />

        {/* For iPad with high-resolution Retina display running iOS ≤ 6: */}
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/favicon-144-precomposed.png"
        />

        {/* For iPhone with high-resolution Retina display running iOS ≥ 7: */}
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/favicon-120-precomposed.png"
        />

        {/* For iPhone with high-resolution Retina display running iOS ≤ 6: */}
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/favicon-114-precomposed.png"
        />

        {/* For iPhone 6+ */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/favicon-180-precomposed.png"
        />

        {/* For first- and second-generation iPad: */}
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/favicon-72-precomposed.png"
        />

        {/* For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/favicon-57.png"
        />

        {/* For Old Chrome */}
        <link rel="icon" sizes="32x32" href="/favicon/favicon-32.png" />

        {/* For IE10 Metro */}
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="favicon-144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Chrome for Android */}
        <link rel="manifest" href="manifest.json" />
        <link rel="icon" sizes="192x192" href="/favicon/favicon-192.png"></link>
      </Head>
      <section className="flex h-screen flex-col justify-between bg-primary">
        <div className="container mx-auto flex h-full flex-col items-center justify-center gap-4">
          <div className="stats stats-horizontal bg-secondary text-secondary-content shadow lg:stats-horizontal">
            <div className="stat">
              <div className="stat-title ">Words</div>
              <div className="stat-value drop-shadow-md">{wordCount}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Time to read</div>
              <div className="stat-value">
                {minToRead} Minute{minToRead < 2 ? '' : 's'}
              </div>
            </div>
          </div>
          <textarea
            className="textarea textarea-bordered textarea-secondary h-1/2 w-full bg-primary bg-opacity-10 placeholder:tracking-widest placeholder:text-primary-focus"
            value={text}
            placeholder={'Paste or type text here...'}
            onChange={textHandler}
          />
        </div>
        <footer className="footer items-center bg-secondary p-3 font-bold text-secondary-content antialiased">
          <div className="grid-flow-col items-center place-self-center md:place-self-auto">
            <img
              src="img/brian-prost-scarecrow.png"
              alt="brian-prost-scarecrow"
              className="h-9 rounded-md"
            />
            <p>
              Made by
              <a
                className="ml-2 rounded-md border-b border-primary py-2 px-1 font-brian-theme text-xl hover:border-primary-content hover:bg-primary hover:text-primary-content"
                href="https://brianprost.com"
              >
                bRIAN pRōST
              </a>
            </p>
          </div>
          <div className="mr-2 hidden grid-flow-col gap-4 place-self-center justify-self-end md:inline-flex">
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
    </>
  )
}

export default Home
