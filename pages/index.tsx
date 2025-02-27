import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { NewsFeed } from "@/components/news-feed"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { FeedFilter } from "@/components/feed-filter"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Your Climate Update</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <TailwindIndicator></TailwindIndicator>
      </div>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Your source for the latest news in <br className="hidden sm:inline" />
             Climate.
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            An ongoing project to provide a tasteful and accesible news experience to those interested in the Climate Crisis.
          </p>
        </div>
        <div className="flex gap-4">
          <FeedFilter></FeedFilter>
          {/* <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link> */}
        </div>
      </section>
      <section>
      <NewsFeed></NewsFeed>
      </section>
    
    </Layout>
  )
}
