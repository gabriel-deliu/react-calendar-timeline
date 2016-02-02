import React, { Component } from 'react'

export default class HorizontalLines extends Component {
  constructor (props) {
    super(props)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return !(nextProps.canvasWidth === this.props.canvasWidth &&
             nextProps.lineHeight === this.props.lineHeight &&
             nextProps.lineCount === this.props.lineCount &&
             nextProps.groupHeights === this.props.groupHeights)
  }

  render () {
    const { lineCount, lineHeight, canvasWidth, groups, groupHeights, headerHeight } = this.props;
    let lines = []

    var totalHeight = headerHeight;
    for (let i = 0; i < lineCount; i++) {
      lines.push(
        <div key={`horizontal-line-${i}`}
             className={i % 2 === 0 ? 'rct-hl-even' : 'rct-hl-odd'}
             style={{
               top: `${totalHeight}px`,
               left: `0px`,
               width: `${canvasWidth}px`,
               height: `${groupHeights[i] - 1}px`
             }} />)
      totalHeight += groupHeights[i];
    }

    return (
      <div className='rct-horizontal-lines'>
        {lines}
      </div>
    )
  }
}

HorizontalLines.propTypes = {
  canvasWidth: React.PropTypes.number.isRequired,
  lineHeight: React.PropTypes.number.isRequired,
  lineCount: React.PropTypes.number.isRequired
}
HorizontalLines.defaultProps = {
  borderWidth: 1
}
