/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../../../typings/react/react-dom.d.ts" />
/// <reference path="../../../typings/redux/redux.d.ts" />
/// <reference path="../../../typings/react-redux/react-redux.d.ts" />

declare var require: (modulePath: string) => any;

import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import IApplicationProps from "../common/IApplicationProps";
import IApplicationState from "../common/IApplicationState";
import MasterPage from "../MasterPage";

const css = require('./index.css');

class WordTrainingPage extends React.Component<IApplicationProps, IApplicationState> {
    constructor(props: IApplicationProps) {
        super(props);
    }
    render() {
        return (
            <MasterPage>
                <div style={{display: 'none'}} className={css.page}>
                    <div className={css.searchWords}>
                        <input className={css.searchInput} type="search" />
                    </div>
                </div>
            </MasterPage>
        )
    }
}

function mapStateToProps(state): IApplicationProps {
  return {
  }
}

function mapDispatchToProps(dispatch): IApplicationProps {
  return {
      actions: bindActionCreators({}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordTrainingPage);
