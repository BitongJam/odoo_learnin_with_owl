/** @odoo-module **/
import {registry} from "@web/core/registry"
import {loadJS} from "@web/core/assets"
import {useService} from "@web/core/utils/hooks"
const { Component, useState,onWillStart} = owl

export class OwlCustomDashboard extends Component {
    setup(){
        this.state = useState({
            taskList:[],
            
        })

        this.orm = useService("orm")

        onWillStart(async ()=>{
            this.state.taskList = await this.orm.searchRead("res.partner",[],["id","name"])
        })

    }
}

OwlCustomDashboard.template = "custom.dashboard1"
// OwlCustomDashboard.Component 

registry.category("actions").add("owl.CustomDashboard",OwlCustomDashboard)