import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 实时消息窗口组件
 */
export default class MessageWindow extends Component {

  /**
   * 组件构成参数：
   * message 实时消息
   */
  static propTypes = {
    message: PropTypes.array
  };
  static defaultProps = {
    message: []
  };
  render() {
    /**
     * info message 浅白
     * warn message red
     * command green
     * success message green
     */
    return (
      <div className="message-window">
        <pre className="build-trace"
            id="build-trace"
        >
          <code className="bash js-build-output">
            Running with gitlab-ci-multi-runner 9.5.0 (413da38)
            <br /> on kubernetes-runner-1.8 (c6a86aad)
            <span className="term-fg-l-green term-bold">
              Cloning repository...
            </span>
            <br />
      
            [INFO] Total time: 22.362 s<br />
            [INFO] Finished at: 2019-02-12T18:21:50+08:00
            <br />
            [INFO] Final Memory: 151M/1958M
            <br />
            [INFO]
            ------------------------------------------------------------------------ 
            Uploading cache.zip to
            http://ci-storage-minio:9000/ci-cache/runner/c6a86aad/project/3555/default-1{' '} 
            <span className="term-fg-l-green term-bold">
              Job succeeded
              <br />
            </span>
          </code>
        </pre>
      </div>
    );
  }
}
