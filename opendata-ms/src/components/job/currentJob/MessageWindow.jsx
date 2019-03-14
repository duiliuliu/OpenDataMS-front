import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MessageWindow extends Component {
  static propTypes = {
    message: PropTypes.array
  };
  static defaultProps = {
    message: []
  };
  render() {
    return (
      <div className="message-window">
        <pre className="build-trace"
            id="build-trace"
        >
          <code className="bash js-build-output">
            Running with gitlab-ci-multi-runner 9.5.0 (413da38)
            <br /> on kubernetes-runner-1.8 (c6a86aad)
            <br />
            Using Kubernetes namespace: gitlab
            <br />
            Using Kubernetes executor with image
            registry.qunhequnhe.com/datax/udf_upload:v1 ...
            <br />
            Waiting for pod
            gitlab/runner-c6a86aad-project-3555-concurrent-0ksvll to be running,
            status is Pending
            <br />
            Running on runner-c6a86aad-project-3555-concurrent-0ksvll via
            kubernetes-runner-protected-79c67d8677-ckvft...
            <br />
            Cloning into '/exabrain/bigdata/customizedudf'...
            <br />
            <span className="term-fg-l-green term-bold">
              Cloning repository...
            </span>
            <br />
            <span className="term-fg-l-green term-bold">
              Checking out a65c743d as master...
            </span>
            <br />
            <span className="term-fg-l-green term-bold">
              Skipping Git submodules setup
            </span>
            <br />
            <span className="term-fg-l-green term-bold">
              Checking cache for default-1...
            </span>
            <br />
            Downloading cache.zip from
            http://ci-storage-minio:9000/ci-cache/runner/c6a86aad/project/3555/default-1{' '}
            <br />
            <span className="term-fg-l-green term-bold">
              Successfully extracted cache
            </span>
            <br />
            <span className="term-fg-l-green term-bold">
              $ source /etc/profile
            </span>
            <br />
            <span className="term-fg-l-green term-bold">$ cd $MOUDLE_NAME</span>
            <br />
            <span className="term-fg-l-green term-bold">
              $ mvn clean package
            </span>
            <br />
            [WARNING] <br />
            [WARNING] Some problems were encountered while building the
            effective settings
            <br />
            [WARNING] Unrecognised tag: 'updatePolicy' (position: START_TAG seen
            ...&lt;/servers&gt;\n &lt;updatePolicy&gt;... @55:17) @
            /usr/local/webserver/conf/settings.xml, line 55, column 17
            <br />
            [WARNING] <br />
            [INFO] Scanning for projects...
            <br />
            [INFO]
            <br />
            [INFO]
            ------------------------------------------------------------------------
            <br />
            [INFO] Building FirstModule 1.0-SNAPSHOT
            <br />
            [INFO]
            ------------------------------------------------------------------------
            <br />
            [WARNING] The POM for commons-io:commons-io:jar:2.5-SNAPSHOT is
            missing, no dependency information available
            <br />
            [INFO] <br />
            [INFO] --- maven-clean-plugin:2.5:clean (default-clean) @
            FirstModule ---
            <br />
            [INFO] Deleting /exabrain/bigdata/customizedudf/FirstModule/target
            <br />
            [INFO] <br />
            [INFO] --- maven-resources-plugin:2.6:resources (default-resources)
            @ FirstModule ---
            <br />
            [WARNING] Using platform encoding (ANSI_X3.4-1968 actually) to copy
            filtered resources, i.e. build is platform dependent!
            <br />
            [INFO] skip non existing resourceDirectory
            /exabrain/bigdata/customizedudf/FirstModule/src/main/resources
            <br />
            [INFO] <br />
            [INFO] --- maven-compiler-plugin:3.1:compile (default-compile) @
            FirstModule ---
            <br />
            [INFO] Changes detected - recompiling the module!
            <br />
            [WARNING] File encoding has not been set, using platform encoding
            ANSI_X3.4-1968, i.e. build is platform dependent!
            <br />
            [INFO] Compiling 1 source file to
            /exabrain/bigdata/customizedudf/FirstModule/target/classNamees
            <br />
            [WARNING]
            /exabrain/bigdata/customizedudf/FirstModule/src/main/java/com/qunhe/UDFTest.java:[20,16]
            unmappable character for encoding ASCII
            <br />
            [WARNING]
            /exabrain/bigdata/customizedudf/FirstModule/src/main/java/com/qunhe/UDFTest.java:[20,17]
            unmappable character for encoding ASCII
            <br />
            [WARNING]
            /exabrain/bigdata/customizedudf/FirstModule/src/main/java/com/qunhe/UDFTest.java:[20,18]
            unmappable character for encoding ASCII
            <br />
            [WARNING]
            /exabrain/bigdata/customizedudf/FirstModule/src/main/java/com/qunhe/UDFTest.java:[20,19]
            unmappable character for encoding ASCII
            <br />
            [WARNING]
            /exabrain/bigdata/customizedudf/FirstModule/src/main/java/com/qunhe/UDFTest.java:[20,20]
            unmappable character for encoding ASCII
            <br />
            [WARNING]
            /exabrain/bigdata/customizedudf/FirstModule/src/main/java/com/qunhe/UDFTest.java:[20,21]
            unmappable character for encoding ASCII
            <br />
            [WARNING]
            /exabrain/bigdata/customizedudf/FirstModule/src/main/java/com/qunhe/UDFTest.java:[20,22]
            unmappable character for encoding ASCII
            <br />
            [WARNING]
            /exabrain/bigdata/customizedudf/FirstModule/src/main/java/com/qunhe/UDFTest.java:[20,23]
            unmappable character for encoding ASCII
            <br />
            [WARNING]
            /exabrain/bigdata/customizedudf/FirstModule/src/main/java/com/qunhe/UDFTest.java:[20,24]
            unmappable character for encoding ASCII
            <br />
            [WARNING]
            /exabrain/bigdata/customizedudf/FirstModule/src/main/java/com/qunhe/UDFTest.java:[20,25]
            unmappable character for encoding ASCII
            <br />
            [WARNING]
            /exabrain/bigdata/customizedudf/FirstModule/src/main/java/com/qunhe/UDFTest.java:[21,31]
            unmappable character for encoding ASCII
            <br />
            [WARNING]
            /exabrain/bigdata/customizedudf/FirstModule/src/main/java/com/qunhe/UDFTest.java:[21,38]
            unmappable character for encoding ASCII
            <br />
            [INFO] <br />
            [INFO] --- maven-resources-plugin:2.6:testResources
            (default-testResources) @ FirstModule ---
            <br />
            [WARNING] Using platform encoding (ANSI_X3.4-1968 actually) to copy
            filtered resources, i.e. build is platform dependent!
            <br />
            [INFO] skip non existing resourceDirectory
            /exabrain/bigdata/customizedudf/FirstModule/src/test/resources
            <br />
            [INFO] <br />
            [INFO] --- maven-compiler-plugin:3.1:testCompile
            (default-testCompile) @ FirstModule ---
            <br />
            [INFO] No sources to compile
            <br />
            [INFO]
            <br />
            [INFO] --- maven-surefire-plugin:2.12.4:test (default-test) @
            FirstModule ---
            <br />
            [INFO] No tests to run.
            <br />
            [INFO]
            <br />
            [INFO] --- maven-jar-plugin:2.4:jar (default-jar) @ FirstModule ---
            <br />
            [INFO] Building jar:
            /exabrain/bigdata/customizedudf/FirstModule/target/FirstModule-1.0-SNAPSHOT.jar
            <br />
            [INFO] <br />
            [INFO] --- maven-assembly-plugin:2.5.3:single (make-assembly) @
            FirstModule ---
            <br />
            [WARNING] Missing POM for commons-io:commons-io:jar:2.5-SNAPSHOT
            <br />
            [INFO] Building jar:
            /exabrain/bigdata/customizedudf/FirstModule/target/FirstModule-1.0-SNAPSHOT-jar-with-dependencies.jar
            <br />
            [INFO]
            ------------------------------------------------------------------------
            <br />
            [INFO] BUILD SUCCESS
            <br />
            [INFO]
            ------------------------------------------------------------------------
            <br />
            [INFO] Total time: 22.362 s<br />
            [INFO] Finished at: 2019-02-12T18:21:50+08:00
            <br />
            [INFO] Final Memory: 151M/1958M
            <br />
            [INFO]
            ------------------------------------------------------------------------
            <br />
            <span className="term-fg-l-green term-bold">
              Creating cache default-1...
            </span>
            <br />
            ./*/target/*-jar-with-dependencies.jar: found 1 matching files{' '}
            <br />
            Uploading cache.zip to
            http://ci-storage-minio:9000/ci-cache/runner/c6a86aad/project/3555/default-1{' '}
            <br />
            <span className="term-fg-l-green term-bold">Created cache</span>
            <br />
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
