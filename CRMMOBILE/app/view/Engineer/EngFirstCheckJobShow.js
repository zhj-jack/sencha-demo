/*
 * File: app/view/Engineer/EngFirstCheckJobShow.js
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

Ext.define('liftnet.view.Engineer.EngFirstCheckJobShow', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.field.TextArea',
        'Ext.field.Hidden'
    ],

    config: {
        id: 'EngFirstCheckJobShow',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                id: 'EngFirstCheckJobAdd_Tbar1',
                itemId: 'EngFirstCheckJobAdd_Tbar',
                title: '首检派工查看',
                items: [
                    {
                        xtype: 'button',
                        id: 'EngFirstCheckJobShow_ReturnButton',
                        iconCls: 'fa fa-chevron-left',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'formpanel',
                flex: 1,
                cls: [
                    'liftnet-form-info',
                    'liftnet-font-size14',
                    'liftnet-lineHeight34'
                ],
                id: 'EngFirstCheckJobAdd_Form1',
                itemId: 'EngFirstCheckJobAdd_Form1',
                scrollable: true,
                items: [
                    {
                        xtype: 'textfield',
                        label: '分派单号',
                        name: 'jnl',
                        placeHolder: '自动生成',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'EngFirstCheckJobAdd_projectname1',
                        itemId: 'EngFirstCheckJobAdd_projectname',
                        label: '项目名称',
                        name: 'projectname',
                        placeHolder: '选择',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        label: '项目地址',
                        name: 'projectaddress',
                        placeHolder: '项目地址根据项目带出',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        label: '项目台数',
                        name: 'liftnum',
                        placeHolder: '项目台数根据项目带出',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'EngFirstCheckJobAdd_checkednum1',
                        itemId: 'EngFirstCheckJobAdd_checkednum',
                        label: '已选择台数',
                        labelWidth: '40%',
                        name: 'checkednum',
                        placeHolder: '选择',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'EngFirstCheckJobAdd_startdate1',
                        itemId: 'EngFirstCheckJobAdd_startdate',
                        label: '计划开始日期',
                        labelWidth: '40%',
                        name: 'planstartdate',
                        placeHolder: '选择',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'EngFirstCheckJobAdd_enddate1',
                        itemId: 'EngFirstCheckJobAdd_enddate',
                        label: '计划结束日期',
                        labelWidth: '40%',
                        name: 'planenddate',
                        placeHolder: '选择',
                        readOnly: true
                    },
                    {
                        xtype: 'textareafield',
                        id: 'EngFirstCheckJobAdd_checkuserName1',
                        itemId: 'EngFirstCheckJobAdd_checkuserName',
                        clearIcon: false,
                        label: '检验人员',
                        labelWidth: '40%',
                        name: 'checkeduserName',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'EngFirstCheckJobAdd_checkuserName2',
                        itemId: 'EngFirstCheckJobAdd_checkuserName1',
                        clearIcon: false,
                        label: '创建人',
                        labelWidth: '40%',
                        name: 'creatorname',
                        placeHolder: '',
                        readOnly: true
                    },
                    {
                        xtype: 'textareafield',
                        label: '注意事项',
                        name: 'remark',
                        placeHolder: '输入注意事项',
                        readOnly: true
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJobAdd_status1',
                        name: 'status'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJobAdd_dispatchtype1',
                        name: 'dispatchtype'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJobAdd_projectid1',
                        name: 'projectid'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJobAdd_contractid1',
                        name: 'contractid'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJobAdd_createid1',
                        name: 'createid'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJobAdd_createdeptid1',
                        name: 'createdeptid'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJobAdd_createdept1',
                        name: 'createdept'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJobAdd_checkuser1',
                        name: 'checkuser'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFirstCheckJobAdd_elevator1',
                        name: 'elevator'
                    },
                    {
                        xtype: 'panel',
                        cls: [
                            'liftnet-button',
                            'liftnet-button-three'
                        ],
                        docked: 'bottom',
                        id: 'EngFirstCheckJobShow_BtnPanel',
                        itemId: 'EngFirstCheckJobShow_BtnPanel',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: 'liftnet-buttonColor-green',
                                id: 'EngFirstCheckJobAdd_BtnUpdate1',
                                itemId: 'EngFirstCheckJobAdd_BtnUpdate1',
                                text: ''
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: 'liftnet-buttonColor-red',
                                id: 'EngFirstCheckJobAdd_BtnSave1',
                                itemId: 'EngFirstCheckJobAdd_BtnSave1',
                                text: ''
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                id: 'EngFirstCheckJobAdd_BtnCommit1',
                                itemId: 'EngFirstCheckJobAdd_BtnCommit1',
                                text: ''
                            }
                        ]
                    }
                ]
            }
        ]
    }

});