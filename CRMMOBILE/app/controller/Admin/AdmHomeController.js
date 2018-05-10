/*
 * File: app/controller/Admin/AdmHomeController.js
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

Ext.define('liftnet.controller.Admin.AdmHomeController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "tabpanel#AdmHome": {
                initialize: 'onAdmHomeInitialize',
                show: 'onAdmHomeShow'
            },
            "button#AdmHome_btnNav": {
                tap: 'onAdmHome_btnNavTap'
            },
            "button#AdmHome_btnRefresh": {
                tap: 'onAdmHome_btnRefreshTap'
            },
            "searchfield#AdmHome_FldSearch": {
                keyup: 'onAdmHome_FldSearchKeyup',
                clearicontap: 'onAdmHome_FldSearchClearicontap'
            },
            "dataview#AdmHome_DvList": {
                itemtap: 'onAdmHome_DvListItemTap'
            }
        }
    },

    /*
        ********** 管理首页 **********

        初始化
    */
    onAdmHomeInitialize: function(component, eOpts) {

    },

    onAdmHomeShow: function(component, eOpts) {
        if(component.getActiveItem().getId()!=='AdmHome_Home') {
            return;
        }
        this.doAdmHome_RefreshInformation();
        this.doAdmHome_RefreshCharts();
        this.doAdmHome_RefreshToDo();

    },

    /* 侧滑菜单 */
    onAdmHome_btnNavTap: function(button, e, eOpts) {
        popMenu.show('Common.ComHomeNav');
    },

    /* 刷新首页 */
    onAdmHome_btnRefreshTap: function(button, e, eOpts) {
        // 滚动回页头
        Ext.getCmp('AdmHome_Home').getScrollable().getScroller().scrollToTop(new Ext.Anim({
                duration: 1000,
                after:function(){}
            }));

        // 刷新数据
        this.doAdmHome_RefreshInformation();
        this.doAdmHome_RefreshCharts();
        this.doAdmHome_RefreshToDo();
    },

    /* 过滤待办任务 */
    onAdmHome_FldSearchKeyup: function(textfield, e, eOpts) {
        Ext.getCmp('AdmHome_DvList').getStore().filteDat(textfield.getValue());
    },

    onAdmHome_FldSearchClearicontap: function(textfield, e, eOpts) {
        Ext.getCmp('AdmHome_DvList').getStore().filteDat('');
    },

    /* 待办任务列表 */
    onAdmHome_DvListItemTap: function(dataview, index, target, record, e, eOpts) {
        var	aud = [
            {type:'0',	code:'gcbj',	view:'AdmAudGcbjdetail',	name:'工程报价联络书'},
            {type:'1',	code:'swsp',	view:'AdmAudSwspdetail',	name:'商务审批'},
            {type:'3',	code:'lksh',	view:'AdmAudLkshdetail',	name:'来款'},
            {type:'5',	code:'kpsh',	view:'AdmAudKpshdetail',	name:'开票'},
            {type:'6',	code:'byht',	view:'AdmAudByhtdetail',	name:'保养合同'},
            {type:'7',	code:'wxht',	view:'AdmAudWxhtdetail',	name:'维修合同'},
            {type:'8',	code:'byzy',	view:'AdmAudByzydetail',	name:'保养作业管理'},
            {type:'9',	code:'byjh',	view:'AdmAudByjhdetail',	name:'保养计划'},
        ];
        var type = record.get('type');
        /* android不支持find()
        var found = aud.find(function (o) {
        	return o.type === type;
        });
        */
        var found = null;
        for(var i=0; i<aud.length; i++) {
            if(aud[i].type===type) {
                found = aud[i];
                break;
            }
        }
        if(found) {
            var code = found.code;
            var taskid = record.get('taskid');
            var status = record.get('status');
            var id = record.get('id');
            viewUtil.goNext('Admin.' + found.view,
                            {
                                code: code,
                                taskid: taskid,
                                status: status,
                                id: id
                            });
        } else {
            Ext.toast('未知的审核类型：' + type);
        }
    },

    doAdmHome_RefreshInformation: function() {
        // 用户名、头像
        Ext.getCmp('AdmHome_LblUserName').setHtml('<i class="ln ln-settings"></i> ' + global.getUserName());
        Ext.getCmp('AdmHome_ImgAvator').setSrc(global.getUserAvatorSrc());

        // 总数、最新发布
        liftnet.app.getController('ComController').
            doHome_LoadStatic('mainpage_shandqs', 'approvecount', 'checkcount');
        liftnet.app.getController('ComController').
            doHome_LoadNotisfy('AdmHome_PnlNotice');
    },

    doAdmHome_RefreshCharts: function() {
        //首页-彩色框统计列表
        loadMask.show();
        Ext.getCmp('AdmHome_DvData').getStore().loadDat(
            function(n) {
                loadMask.hide();
                Ext.getCmp('AdmHome_DvData').setHidden(n===0);
            },
            function() {
                console.log('load AdmHome_DvData fail');
                loadMask.hide();
                Ext.getCmp('AdmHome_DvData').hide();
            }
        );

        //首页-饼状图列表
        loadMask.show();
        Ext.getCmp('AdmHome_DvPie').getStore().loadDat(
            function(n) {
                loadMask.hide();
                Ext.getCmp('AdmHome_DvPie').setHeight(n*60);
                Ext.getCmp('AdmHome_DvPie').setHidden(n===0);
            },
            function() {
                console.log('load AdmHome_DvPie fail');
                loadMask.hide();
                Ext.getCmp('AdmHome_DvPie').hide();
            }
        );

        //首页-条形图列表
        loadMask.show();
        Ext.getCmp('AdmHome_DvCross').getStore().loadDat(
            function(n) {
                loadMask.hide();
                Ext.getCmp('AdmHome_DvCross').setHeight(n*66 + 10); // 调整列表显示高度
                Ext.getCmp('AdmHome_DvCross').setHidden(n===0);
            },
            function() {
                console.log('load AdmHome_DvCross fail');
                loadMask.hide();
                Ext.getCmp('AdmHome_DvCross').hide();
            }
        );
    },

    doAdmHome_RefreshToDo: function() {
        //首页-待办列表
        loadMask.show();
        Ext.getCmp('AdmHome_DvList').getStore().loadDat(
            function(n) {
                loadMask.hide();
                Ext.getCmp('AdmHome_DvList').setHeight(n*64); // 调整列表显示高度
                if(n>0) {
                    Ext.getCmp('AdmHome_DvList').show();
                    Ext.getCmp('AdmHome_PnlSearch').show();
                    Ext.toast('您有' + n + '项待办任务！');
                } else {
                    Ext.getCmp('AdmHome_DvList').hide();
                    Ext.getCmp('AdmHome_PnlSearch').hide();
                }
            },
            loadMask.hide
        );
    }

});