import React, {Component} from 'react';
import './index.less'
import {goBackToTop} from "../../api/utils"

export default class BackToTop extends Component {
    constructor() {
        super()
        this.state = {show: false}
    }

    handleClick = () => {
        //console.log(this.isScrolling)
        if (this.isScrolling) return
        this.isScrolling = true;
        goBackToTop(() => {
            this.isScrolling = false;
        })
    }
    handleScroll = (e) => {
        if (this.count == undefined) this.count = 0
        if (++this.count < 20) return
        else {
            this.count = 0;
            let fs = window.config.htmlfontSize;
            /*定死为13rem*/
            //console.log(document.documentElement.scrollTop > 13 * fs);
            let shouldShow = document.documentElement.scrollTop > 13 * fs
            if (shouldShow && this.state.show == false) {
                //console.log('set true')
                this.setState({show: true})
            } else if (!shouldShow && this.state.show === true) {
                //console.log('set false')
                this.setState({show: false})
            }
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll)
        clearInterval(this.timer)
    }

    render() {
        let style = this.state.show ? {display: 'block'} : {display: 'none'}
        return (
            <div className="backTop" onClick={this.handleClick} style={style}>
                <i className="iconfont icon-up"></i>
            </div>
        )
    }
}