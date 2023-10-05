import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Corporate Solutions Executive</title>
          <meta
            property="og:title"
            content="test-page - Corporate Solutions Executive"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_jvwjyq) => (
            <>
              <h1>{context_jvwjyq?.Name}</h1>
            </>
          )}
          initialData={props.contextJvwjyqProp}
          persistDataDuringLoading={true}
          key={props?.contextJvwjyqProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextJvwjyqProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextJvwjyqProp: contextJvwjyqProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
