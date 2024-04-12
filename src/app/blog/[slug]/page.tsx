import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./page.module.css";
import Link from "next/link";
import { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  link: (props: any) => (
    <Link href={props.href} target="_blank">
      {props.children}
    </Link>
  ),
  a: (props: any) => (
    <Link href={props.href} target="_blank">
      {props.children}
    </Link>
  ),
};

const BlogPost = async () => {
  return (
    <div className={styles.container}>
      <MDXRemote
        {...components}
        options={{
          mdxOptions: {
            remarkRehypeOptions: {
              allowDangerousHtml: true,
            },
          },
        }}
        source={`
        # Simple NextJS 14 scraper with cheerio and redis using Vercel KV
        *Learn how to use react server components and next's ssr to create a simple scraped application.*
        ![nextjs 14 scraper flow chart](https://cdn-images-1.medium.com/v2/resize:fit:2400/1*qFGfIMidEhU0elshMHOmAg.png)

        Before we start with the implementation, let's discuss the general idea of the app below.
        ## What are we building?
        We're scraping data from my city's local parking service website in order to build simplified and intuitive UI representing available parking spaces of public parking lots across the city.
        ## Tech stack and tools
        - NextJS 14.1.4
        - Vercel KV for configuring our redis db
        - Redis for caching scraped data
        - cheerio for scraping

        ## Flow of the app
        This is the visual representation of what are we going to build:
        ![nextjs 14 scraper flow chart](https://cdn-images-1.medium.com/v2/resize:fit:2400/1*qFGfIMidEhU0elshMHOmAg.png)

        ### Let's go with the flow:

        > When a user first lands on our app we're gonna check our redis DB for data and return that data if available.

        <aside>*It's worh mentioning that I am using <a href="https://vercel.com/docs/storage/vercel-kv" target="_blank">Vercel's KV</a> to setup a Redis db, which is pretty forward to use and get started. Howerver you can use whatever you like for this exercise, there are multiple free options on the web
        like <a href="https://redis.io/try-free/" target="_blank">Redis cloud</a> that allows you to set up and configure your redis db for free*</aside>

        The purpose of doing this step is to avoid overloading the server we want to scrape with requests. Some websites have different layers of protection and could potentially block our IP address if we're to constantly send out requests to scrape data. 
        Thus using Redis as an extra layer makes sure we do not overload the parking service website's server but instead return the cached data.
        `}
      />
    </div>
  );
};

export default BlogPost;
