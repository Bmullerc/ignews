import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>10 de setembro de 2022</time>
            <strong>Creating a new way to Learn!</strong>
            <p>In this tutorial you will learn everything you need to know to learn even more!!!</p>
          </a>
          <a href='#'>
            <time>10 de setembro de 2022</time>
            <strong>Creating a new way to Learn!</strong>
            <p>In this tutorial you will learn everything you need to know to learn even more!!!</p>
          </a>
          <a href='#'>
            <time>10 de setembro de 2022</time>
            <strong>Creating a new way to Learn!</strong>
            <p>In this tutorial you will learn everything you need to know to learn even more!!!</p>
          </a>
          <a href='#'>
            <time>10 de setembro de 2022</time>
            <strong>Creating a new way to Learn!</strong>
            <p>In this tutorial you will learn everything you need to know to learn even more!!!</p>
          </a>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const prismic = getPrismicClient()

  const posts = await prismic.getByType("post", {
    pageSize: 100,
  });

  console.log(posts);
  
  return {
    props: { posts },
  };
}