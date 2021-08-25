import React from 'react'
import { Component } from 'react'

export class Navbar extends Component {
    render(){
    return (
        <div className="web_nav mt-4">
        <a href="/Financial/statements" className="ml-3" style={{fontSize:"19px"}}>財務報表</a>
        <a href="/Financial/records" className="ml-3" style={{fontSize:"19px"}}>收支紀錄</a>
        <a href="/Financial/management" className="ml-3" style={{fontSize:"19px"}}>預算管理</a>

        </div>
    )
}
}
