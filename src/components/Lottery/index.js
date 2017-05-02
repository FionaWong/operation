import './index.less'
import React, { PropTypes } from 'react'
import { autobind } from 'core-decorators'
import Draggable, {DraggableCore} from 'react-draggable'

@autobind
class Lottery extends React.Component {
  static propTypes = {
    left: PropTypes.number,
    top: PropTypes.number,
    content: PropTypes.string
  }
  state = {
    flag: false
  }
  handler() {
    this.setState({
      flag: !this.state.flag
    })
  }
  handleStart(e) {
    console.log('handle start....')
  }
  handleDrag(e) {
    const _ifram = document.getElementById("iframe").contentWindow
    const win = window
  }
  handleStop(e) {
    console.log('handle stop....')
  }
  render() {
    const { left, top, content } = this.props
    return (
    <Draggable
    is
    allowAnyClick={true}
    axis="both"
    bounds={{
      left: 100,
      right: 100,
      top: 100,
      bottom: 100
    }}
    cancel=".body"
    defaultClassName=""
    defaultPosition={{
      x: 100,
      y: 100
    }}
    disabled={false}
    grid={[20,20]}
    handle=".handle"
    onStart={this.handleStart}
    onDrag={this.handleDrag}
    onStop={this.handleStop}
    >
      <div className="lottery-container handle" style={{ left: left, top: top }}>
      <div className="button lottery-button" onClick={this.handler}>
        { content || '抽奖' }
      </div>
      {
        this.state.flag && <div className="lottery-mask"></div>
      }
      {
        this.state.flag &&
          <div className="lottery-content">
            <div className="lottery-info">
              100元投资卷<span className="lottery-close" onClick={this.handler}>关闭</span>
            </div>
          </div>
      }
    </div>
    </Draggable>
  )}
}
export default Lottery
