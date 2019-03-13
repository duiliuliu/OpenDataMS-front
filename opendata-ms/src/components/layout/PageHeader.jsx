import React from 'react';
import PageHeader from 'ant-design-pro/lib/PageHeader';
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';
import NativeIcon from '../icons/NativeIcon';

export default class PagesHeader extends React.Component {
  state = { msgCount: 0 }
  render() {
    const title = <span className="header-title">{this.props.title}</span>;
    const action = (
      <div className="header-left" >
        <NoticeIcon className="notice" count={this.state.msgCount} />
        <NativeIcon className="photo"
            height={35}
            type="interesting2"
            width={35}
        />
      </div>
    );
    return (
      <div>
        <PageHeader
            action={action}
            className="pageheader"
            logo={
                <NativeIcon className="App-logo"
                    height={30}
                    type="spider"
                    width={30}
                />
            }
            title={title}
        />
      </div>
    );
  }
}
