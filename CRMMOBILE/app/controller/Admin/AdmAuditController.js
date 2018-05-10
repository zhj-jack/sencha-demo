/*
 * File: app/controller/Admin/AdmAuditController.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('liftnet.controller.Admin.AdmAuditController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "panel#AdmAudGcbjdetail": {
                initialize: 'onAdmAudGcbjdetailInitialize'
            },
            "panel#AdmAudByhtaud": {
                initialize: 'onAdmAudByhtaudInitialize'
            },
            "panel#AdmAudKpshdetail": {
                initialize: 'onAdmAudKpshdetailInitialize'
            },
            "panel#AdmAudLkshdetail": {
                initialize: 'onAdmAudLkshdetailInitialize'
            },
            "panel#AdmAudByzydetail": {
                initialize: 'onAdmAudByzydetailInitialize'
            },
            "panel#AdmAudWxhtdetail": {
                initialize: 'onAdmAudWxhtdetailInitialize'
            },
            "panel#AdmAudByjhdetail": {
                initialize: 'onAdmAudByjhdetailInitialize'
            },
            "panel#AdmAudSwspdetail": {
                initialize: 'onAdmAudSwspdetailInitialize'
            },
            "list#AdmAudgcbjdetail_ListDetailed": {
                itemtap: 'onAdmAudgcbjdetail_ListDetailedItemTap'
            },
            "list#AdmAudbyhtdetail_ListDetailed": {
                itemtap: 'onAdmAudbyhtdetail_ListDetailedItemTap'
            },
            "list#AdmAudbyjhdetail_ListDetailed": {
                itemtap: 'onAdmAudbyjhdetail_ListDetailedItemTap'
            },
            "list#AdmAudbyzydetail_ListDetailed": {
                itemtap: 'onAdmAudbyzydetail_ListDetailedItemTap'
            },
            "list#AdmAudkpshdetail_ListDetailed": {
                itemtap: 'onAdmAudkpshdetail_ListDetailedItemTap'
            },
            "list#AdmAudlkshdetail_ListDetailed": {
                itemtap: 'onAdmAudlkshdetail_ListDetailedItemTap'
            },
            "list#AdmAudswspdetail_ListDetailed": {
                itemtap: 'onAdmAudswspdetail_ListDetailedItemTap'
            },
            "list#AdmAudwxhtdetail_ListDetailed": {
                itemtap: 'onAdmAudwxhtdetail_ListDetailedItemTap'
            },
            "button#AdmAudByhtaud_ButReturn": {
                tap: 'onAdmAudByhtaud_ButReturnTap'
            },
            "button#AdmAudByhtaudCon_ButReturn": {
                tap: 'onAdmAudByhtaudCon_ButReturnTap'
            },
            "button#AdmAudByjhdetail_ButReturn": {
                tap: 'onAdmAudByjhdetail_ButReturnTap'
            },
            "button#AdmAudByjhdetailCon_ButReturn": {
                tap: 'onAdmAudByjhdetailCon_ButReturnTap'
            },
            "button#AdmAudByzydetail_ButReturn": {
                tap: 'onAdmAudByzydetail_ButReturnTap'
            },
            "button#AdmAudByzydetailCon_ButReturn": {
                tap: 'onAdmAudByzydetailCon_ButReturnTap'
            },
            "button#AdmAudGcbjdetail_ButReturn": {
                tap: 'onAdmAudGcbjdetail_ButReturnTap'
            },
            "button#AdmAudGcbjdetailCom_ButReturn": {
                tap: 'onAdmAudGcbjdetailCom_ButReturnTap'
            },
            "button#AdmAudKpshdetail_ButReturn": {
                tap: 'onAdmAudKpshdetail_ButReturnTap'
            },
            "button#AdmAudKpshdetailCon_ButReturn": {
                tap: 'onAdmAudKpshdetailCon_ButReturnTap'
            },
            "button#AdmAudLkshdetail_ButReturn": {
                tap: 'onAdmAudLkshdetail_ButReturnTap'
            },
            "button#AdmAudLkshdetailCon_ButReturn": {
                tap: 'onAdmAudLkshdetailCon_ButReturnTap'
            },
            "button#AdmAudSwspdetail_ButReturn": {
                tap: 'onAdmAudSwspdetail_ButReturnTap'
            },
            "button#AdmAudSwspdetailCon_ButReturn": {
                tap: 'onAdmAudSwspdetailCon_ButReturnTap'
            },
            "button#AdmAudWxhtdetail_ButReturn": {
                tap: 'onAdmAudWxhtdetail_ButReturnTap'
            },
            "button#AdmAudWxhtdetailCon_ButReturn": {
                tap: 'onAdmAudWxhtdetailCon_ButReturnTap'
            },
            "button#AdmFormStatementReason_BtnReturn": {
                tap: 'onAdmFormStatementReason_BtnReturnTap'
            },
            "panel#AdmAudGcbjdetailCon": {
                show: 'onAdmAudGcbjdetailConShow'
            },
            "panel#AdmAudWxhtdetailCon": {
                show: 'onAdmAudWxhtdetailConShow'
            },
            "panel#AdmAudSwspdetailCon": {
                show: 'onAdmAudSwspdetailConShow'
            },
            "panel#AdmAudLkshdetailCon": {
                show: 'onAdmAudLkshdetailConShow'
            },
            "panel#AdmAudKpshdetailCon": {
                show: 'onAdmAudKpshdetailConShow'
            },
            "panel#AdmAudByzydetailCon": {
                show: 'onAdmAudByzydetailConShow'
            },
            "panel#AdmAudByjhdetailCon": {
                show: 'onAdmAudByjhdetailConShow'
            },
            "panel#AdmAudByhtdetailCon": {
                show: 'onAdmAudByhtdetailConShow'
            },
            "button#AdmAudByhtdetail_BtnYes": {
                tap: 'onAdmAudByhtdetail_BtnYesTap'
            },
            "button#AdmAudByhtdetail_BtnNo": {
                tap: 'onAdmAudByhtdetail_BtnNoTap'
            },
            "button#AdmAudByjhdetail_BtnYes": {
                tap: 'onAdmAudByjhdetail_BtnYesTap'
            },
            "button#AdmAudByjhdetail_BtnNo": {
                tap: 'onAdmAudByjhdetail_BtnNoTap'
            },
            "button#AdmAudByzydetail_BtnYes": {
                tap: 'onAdmAudByzydetail_BtnYesTap'
            },
            "button#AdmAudByzydetail_BtnNo": {
                tap: 'onAdmAudByzydetail_BtnNoTap'
            },
            "button#AdmAudGcbjdetail_BtnYes": {
                tap: 'onAdmAudGcbjdetail_BtnYesTap'
            },
            "button#AdmAudGcbjdetail_BtnNo": {
                tap: 'onAdmAudGcbjdetail_BtnNoTap'
            },
            "button#AdmAudKpshdetail_BtnYes": {
                tap: 'onAdmAudKpshdetail_BtnYesTap'
            },
            "button#AdmAudKpshdetail_BtnNo": {
                tap: 'onAdmAudKpshdetail_BtnNoTap'
            },
            "button#AdmAudLkshdetail_BtnYes": {
                tap: 'onAdmAudLkshdetail_BtnYesTap'
            },
            "button#AdmAudLkshdetail_BtnNo": {
                tap: 'onAdmAudLkshdetail_BtnNoTap'
            },
            "button#AdmAudSwspdetail_BtnYes": {
                tap: 'onAdmAudSwspdetail_BtnYesTap'
            },
            "button#AdmAudSwspdetail_BtnNo": {
                tap: 'onAdmAudSwspdetail_BtnNoTap'
            },
            "button#AdmAudWxhtdetail_BtnYes": {
                tap: 'onAdmAudWxhtdetail_BtnYesTap'
            },
            "button#AdmAudWxhtdetail_BtnNo": {
                tap: 'onAdmAudWxhtdetail_BtnNoTap'
            }
        }
    },

    /* ********** 审核页面数据初始化 ********** */
    onAdmAudGcbjdetailInitialize: function(component, eOpts) {
        // 工程报价联络书审核
        this.doAdmAud_FormInitialize(component.initialConfig.parm);
    },

    onAdmAudByhtaudInitialize: function(component, eOpts) {
        // 保养合同审批
        this.doAdmAud_FormInitialize(component.initialConfig.parm);
    },

    onAdmAudKpshdetailInitialize: function(component, eOpts) {
        //开票审核
        this.doAdmAud_FormInitialize(component.initialConfig.parm);
    },

    onAdmAudLkshdetailInitialize: function(component, eOpts) {
        //来款审核
        this.doAdmAud_FormInitialize(component.initialConfig.parm);
    },

    onAdmAudByzydetailInitialize: function(component, eOpts) {
        // 保养合同审批
        this.doAdmAud_FormInitialize(component.initialConfig.parm);
    },

    onAdmAudWxhtdetailInitialize: function(component, eOpts) {
        // 维修合同审批
        this.doAdmAud_FormInitialize(component.initialConfig.parm);
    },

    onAdmAudByjhdetailInitialize: function(component, eOpts) {
        // 保养计划审核
        this.doAdmAud_FormInitialize(component.initialConfig.parm);
    },

    onAdmAudSwspdetailInitialize: function(component, eOpts) {
        // 商务审批
        this.doAdmAud_FormInitialize(component.initialConfig.parm);
    },

    /* 审核页面-查看明细 */
    onAdmAudgcbjdetail_ListDetailedItemTap: function(dataview, index, target, record, e, eOpts) {
        //工程报价联络书审核-跳转-明细内容
        viewUtil.goNext('Admin.AdmAudGcbjdetailCon', {record:record});
    },

    onAdmAudbyhtdetail_ListDetailedItemTap: function(dataview, index, target, record, e, eOpts) {
        //保养合同审批-跳转-明细内容
        viewUtil.goNext('Admin.AdmAudByhtdetailCon', {record:record});
    },

    onAdmAudbyjhdetail_ListDetailedItemTap: function(dataview, index, target, record, e, eOpts) {
        //保养计划审核-跳转-明细内容
        viewUtil.goNext('Admin.AdmAudByjhdetailCon', {record:record});
    },

    onAdmAudbyzydetail_ListDetailedItemTap: function(dataview, index, target, record, e, eOpts) {
        //保养计划审核-跳转-明细内容
        viewUtil.goNext('Admin.AdmAudByzydetailCon', {record:record});
    },

    onAdmAudkpshdetail_ListDetailedItemTap: function(dataview, index, target, record, e, eOpts) {
        //开票审核-跳转-明细内容
        viewUtil.goNext('Admin.AdmAudKpshdetailCon', {record:record});
    },

    onAdmAudlkshdetail_ListDetailedItemTap: function(dataview, index, target, record, e, eOpts) {
        //来款审核-跳转-明细内容
        viewUtil.goNext('Admin.AdmAudLkshdetailCon', {record:record});
    },

    onAdmAudswspdetail_ListDetailedItemTap: function(dataview, index, target, record, e, eOpts) {
        //商务审批-跳转-明细内容
        viewUtil.goNext('Admin.AdmAudSwspdetailCon', {record:record});
    },

    onAdmAudwxhtdetail_ListDetailedItemTap: function(dataview, index, target, record, e, eOpts) {
        //维修合同审批-跳转-明细内容
        viewUtil.goNext('Admin.AdmAudWxhtdetailCon', {record:record});
    },

    /* ********** 各页面"返回"按钮 ********** */
    onAdmAudByhtaud_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmAudByhtaudCon_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmAudByjhdetail_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmAudByjhdetailCon_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmAudByzydetail_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmAudByzydetailCon_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmAudGcbjdetail_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmAudGcbjdetailCom_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmAudKpshdetail_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmAudKpshdetailCon_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmAudLkshdetail_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmAudLkshdetailCon_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmAudSwspdetail_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmAudSwspdetailCon_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmAudWxhtdetail_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmAudWxhtdetailCon_ButReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    onAdmFormStatementReason_BtnReturnTap: function(button, e, eOpts) {
        viewUtil.goLast();
    },

    /* 审核明细的详细资料 */
    onAdmAudGcbjdetailConShow: function(component, eOpts) {
        Ext.getCmp('form_aud_gcbjdetail_detailed').setRecord(component.initialConfig.parm.record);
    },

    onAdmAudWxhtdetailConShow: function(component, eOpts) {
        Ext.getCmp('form_aud_wxhtdetail_detailed').setRecord(component.initialConfig.parm.record);
    },

    onAdmAudSwspdetailConShow: function(component, eOpts) {
        Ext.getCmp('form_aud_swspdetail_detailed').setRecord(component.initialConfig.parm.record);
    },

    onAdmAudLkshdetailConShow: function(component, eOpts) {
        Ext.getCmp('form_aud_lkshdetail_detailed').setRecord(component.initialConfig.parm.record);
    },

    onAdmAudKpshdetailConShow: function(component, eOpts) {
        Ext.getCmp('form_aud_kpshdetail_detailed').setRecord(component.initialConfig.parm.record);
    },

    onAdmAudByzydetailConShow: function(component, eOpts) {
        Ext.getCmp('form_aud_byzydetail_detailed').setRecord(component.initialConfig.parm.record);
    },

    onAdmAudByjhdetailConShow: function(component, eOpts) {
        Ext.getCmp('form_aud_byjhdetail_detailed').setRecord(component.initialConfig.parm.record);
    },

    onAdmAudByhtdetailConShow: function(component, eOpts) {
        Ext.getCmp('form_aud_byhtdetail_detailed').setRecord(component.initialConfig.parm.record);
    },

    /* 保养合同审核-同意 */
    onAdmAudByhtdetail_BtnYesTap: function(button, e, eOpts) {
        this.doAdmAud('同意', button.up().up().initialConfig.parm, 'r13');
    },

    /* 保养合同审核-不同意 */
    onAdmAudByhtdetail_BtnNoTap: function(button, e, eOpts) {
        this.doAdmAud('不同意', button.up().up().initialConfig.parm, 'r13');
    },

    /* 保养计划审核-同意 */
    onAdmAudByjhdetail_BtnYesTap: function(button, e, eOpts) {
        this.doAdmAud('同意', button.up().up().initialConfig.parm, 'r11');
    },

    /* 保养计划审核-不同意 */
    onAdmAudByjhdetail_BtnNoTap: function(button, e, eOpts) {
        this.doAdmAud('不同意', button.up().up().initialConfig.parm, 'r11');
    },

    /* 保养作业管理-同意 */
    onAdmAudByzydetail_BtnYesTap: function(button, e, eOpts) {
        this.doAdmAud('同意', button.up().up().initialConfig.parm, 'r13');
    },

    /* 保养作业管理-不同意 */
    onAdmAudByzydetail_BtnNoTap: function(button, e, eOpts) {
        this.doAdmAud('不同意', button.up().up().initialConfig.parm, 'r13');
    },

    /* 工程报价联络书审核-同意 */
    onAdmAudGcbjdetail_BtnYesTap: function(button, e, eOpts) {
        this.doAdmAud('同意', button.up().up().initialConfig.parm, 'audrem');
    },

    /* 工程报价联络书审核-不同意 */
    onAdmAudGcbjdetail_BtnNoTap: function(button, e, eOpts) {
        this.doAdmAud('不同意', button.up().up().initialConfig.parm, 'audrem');
    },

    /* 开票审核-同意 */
    onAdmAudKpshdetail_BtnYesTap: function(button, e, eOpts) {
        this.doAdmAud('同意', button.up().up().initialConfig.parm, 'rem2');
    },

    /* 开票审核-不同意 */
    onAdmAudKpshdetail_BtnNoTap: function(button, e, eOpts) {
        this.doAdmAud('不同意', button.up().up().initialConfig.parm, 'rem2');
    },

    /* 来款审核-同意 */
    onAdmAudLkshdetail_BtnYesTap: function(button, e, eOpts) {
        this.doAdmAud('同意', button.up().up().initialConfig.parm, 'auditingidea');
    },

    /* 来款审核-不同意 */
    onAdmAudLkshdetail_BtnNoTap: function(button, e, eOpts) {
        this.doAdmAud('不同意', button.up().up().initialConfig.parm, 'auditingidea');
    },

    /* 商务审批审核-同意 */
    onAdmAudSwspdetail_BtnYesTap: function(button, e, eOpts) {
        this.doAdmAud('同意', button.up().up().initialConfig.parm, 'audrem');
    },

    /* 商务审批审核-不同意 */
    onAdmAudSwspdetail_BtnNoTap: function(button, e, eOpts) {
        this.doAdmAud('不同意', button.up().up().initialConfig.parm, 'audrem');
    },

    /* 维修合同审核-同意 */
    onAdmAudWxhtdetail_BtnYesTap: function(button, e, eOpts) {
        this.doAdmAud('同意', button.up().up().initialConfig.parm, 'r13');
    },

    /* 维修合同审核-不同意 */
    onAdmAudWxhtdetail_BtnNoTap: function(button, e, eOpts) {
        this.doAdmAud('不同意', button.up().up().initialConfig.parm, 'r13');
    },

    /* 审核表单取数 */
    doAdmAud_FormInitialize: function(parm) {
        var code = parm.code;
        var taskid = parm.taskid;
        var status = parm.status;
        var storeid = 'aud_' + code + 'detail';
        var formid = 'form_aud_' + code + 'detail';
        var listid = 'AdmAud' + code + 'detail_ListDetailed';

        var store = dataUtil.createStore(storeid);
        store.loadDat(
            function() {
                var data = store.getAt(0);
                Ext.getCmp(formid).setRecord(data);

                //console.log(data.get('detaillist'));
                Ext.getCmp(listid).setData(data.get('detaillist'));

                var pnl = Ext.getCmp('AdmAud' + code + '_PnlYesNo');
                if(pnl) {
                    pnl.setHidden(status==='已完成');
                }
            },
            function() {
                Ext.toast('读取审核数据出现错误！');
            },
            taskid
        );
    },

    /* 审批 - 同意 */
    doAdmAud: function(action, parm, remarkFieldName) {
        var taskid = parm.taskid;
        var code = parm.code;
        var formid = 'form_aud_' + code + 'detail';

        var remark = Ext.getCmp(formid).getValues()[remarkFieldName];
        if(!remark || remark.trim()==='') {
            if(action==='同意') {
                remark = '同意';
            } else {
                Ext.Msg.alert('注意', '请填写审批意见！', Ext.emptyFn);
                return;
            }
        }

        var adapterParm = {
            userid: global.getUserId(),
            taskid: taskid,
            audflag: action,
        };
        adapterParm[remarkFieldName] = remark;

        console.log(adapterParm);
        if(global.isWorklight()) {
            var url = '/adapters/aud/api/1.0/' + code + 'aud';
            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    Ext.toast('审批操作已完成！');
                    viewUtil.goLast();
                    liftnet.app.getController('Admin.AdmHomeController').doAdmHome_RefreshToDo();
                },
                function() {
                    Ext.Msg.alert('注意', '暂时未能完成审批操作，请稍后再试！', Ext.emptyFn);
                });
        } else {
            Ext.toast('审批操作已完成！');
            viewUtil.goLast();
            liftnet.app.getController('Admin.AdmHomeController').doAdmHome_RefreshToDo();
        }

        /* 附: 删除首页待办的方法
        var r = Ext.getCmp('AdmHome_DvList').getStore().getById(parm.id);
        Ext.getCmp('AdmHome_DvList').getStore().remove(r);
        */
    }

});