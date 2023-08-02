import React, { useEffect, useRef } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import theme, { SECONDARY_COLOR } from 'src/styles/theme'
import ReactDOMServer from 'react-dom/server'

const html = ReactDOMServer.renderToString(
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
      stroke="#191816"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const useStyles = makeStyles(() => ({
  test: {},
}))

function WYSIWYG(props) {
  const classes = useStyles()
  const svgRef = useRef()

  useEffect(() => {
    const svgElement = svgRef.current
    if (svgElement) {
      const paths = svgElement.querySelectorAll('path')
      paths.forEach((path) => {
        path.setAttribute('stroke', 'green')
      })
    }
  }, [html])

  return (
    <span
      ref={svgRef}
      className={classes.test}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default WYSIWYG
