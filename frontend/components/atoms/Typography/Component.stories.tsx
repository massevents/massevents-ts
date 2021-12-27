import React from 'react'
import styles from '@components/atoms/Grid/styles.module.css'

export default {
  title: 'Atoms/Typography',
}

const cellStyle = {
  display: 'flex',
  gridColumn: "2 / -2",
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '2rem'
} as React.CSSProperties

const avantGarde = {
  fontFamily: 'var(--font-family-secondary-bold)'
}

const Template = () => (
  <div className={styles.grid}>
    <div style={cellStyle}>
      <h4>Avant Garde</h4>
      <p style={avantGarde}>the crazy fox jumps over the lazy dog</p>
      <p style={avantGarde}>1234567890 !@#$%ˆ&*()-+=</p>
    </div>
    <div style={cellStyle}>
      <h4>Assistant</h4>
      <p>the crazy fox jumps over the lazy dog</p>
      <p>1234567890 !@#$%ˆ&*()-+=</p>
    </div>
    <div style={cellStyle}>
      <h4>Heading 1</h4>
      <h1>the crazy fox jumps over the lazy dog</h1>
    </div>
    <div style={cellStyle}>
      <h4>Heading 2</h4>
      <h2>the crazy fox jumps over the lazy dog</h2>
    </div>
    <div style={cellStyle}>
      <h4>Heading 3</h4>
      <h3>the crazy fox jumps over the lazy dog</h3>
    </div>
    <div style={cellStyle}>
      <h4>Heading 4</h4>
      <h4>the crazy fox jumps over the lazy dog</h4>
    </div>
    <div style={cellStyle}>
      <h4>Heading 5</h4>
      <h5>the crazy fox jumps over the lazy dog</h5>
    </div>
    <div style={cellStyle}>
      <h4>Button label</h4>
      <span className="button-label">the crazy fox jumps over the lazy dog</span>
    </div>
    <div style={cellStyle}>
      <h4>Paragraph</h4>
      <p>the crazy fox jumps over the lazy dog</p>
    </div>
  </div>
)

export const Default = Template.bind({})
