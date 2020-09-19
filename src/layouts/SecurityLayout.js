import React from 'react'
import { connect } from 'dva'
import { Spin } from 'antd'

class SecurityLayout extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props
        if (dispatch) {
            dispatch({
                type: 'user/getUserInfo'
            })
        }
    }

    render() {
        const { user, loading, children } = this.props
        const isGetUserInfoLoading = loading.effects['user/getUserInfo']
        return isGetUserInfoLoading ? <Spin /> : <div>{children}</div>
    }
}


export default connect(({ user, loading }) => ({ user, loading }))(SecurityLayout)