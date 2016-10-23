import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router'
import { App } from './src/Components'

function handleRender(req,res) {
	// first create a context for <ServerRouter>, it's where we keep the
  // results of rendering for the second pass if necessary
  const context = createServerRenderContext()

  // render the first time
  let markup = renderToString(
    <ServerRouter
      location={req.url}
      context={context}
    >
      <App/>
    </ServerRouter>
  )

  // get the result
  const result = context.getResult()

  // the result will tell you if it redirected, if so, we ignore
  // the markup and send a proper redirect.
  if (result.redirect) {
    res.writeHead(301, {
      Location: result.redirect.pathname
    })
    res.end()
  } else {

    // the result will tell you if there were any misses, if so
    // we can send a 404 and then do a second render pass with
    // the context to clue the <Miss> components into rendering
    // this time (on the client they know from componentDidMount)
    if (result.missed) {
      res.writeHead(404)
      markup = renderToString(
        <ServerRouter
          location={req.url}
          context={context}
        >
          <App/>
        </ServerRouter>
      )
    }
    res.write(markup)
    res.end()
}
}
module.exports = handleRender