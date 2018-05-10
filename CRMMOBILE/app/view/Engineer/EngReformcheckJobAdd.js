/*
 * File: app/view/Engineer/EngReformcheckJobAdd.js
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

Ext.define('liftnet.view.Engineer.EngReformcheckJobAdd', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.field.TextArea',
        'Ext.field.Hidden'
    ],

    config: {
        id: 'EngReformcheckJobAdd',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                id: 'EngReformcheckJobAdd_Tbar',
                itemId: 'EngReformcheckJobAdd_Tbar',
                title: '整改派工',
                items: [
                    {
                        xtype: 'button',
                        id: 'EngReformcheckJobAdd_ReturnButton',
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
                id: 'EngReformcheckJobAdd_Form',
                itemId: 'EngReformcheckJobAdd_Form',
                scrollable: true,
                items: [
                    {
                        xtype: 'textfield',
                        label: '分派单号',
                        name: 'jnl',
                        required: true,
                        placeHolder: '自动生成',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'EngReformcheckJobAdd_projectname',
                        itemId: 'EngReformcheckJobAdd_projectname',
                        label: '项目名称',
                        name: 'projectname',
                        required: true,
                        placeHolder: '选择',
                        readOnly: true,
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    var me = this;
                                    me.element.on('tap', function(e, t) { me.fireEvent('tap', me, e, t); }, me);
                                },
                                event: 'initialize'
                            }
                        ]
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
                        id: 'EngFirstCheckJobAdd_checkednum2',
                        itemId: 'EngReformcheckJobAdd_checkednum',
                        label: '已选择台数',
                        labelWidth: '40%',
                        name: 'checkednum',
                        required: true,
                        placeHolder: '选择',
                        readOnly: true,
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    var me = this;
                                    me.element.on('tap', function(e, t) { me.fireEvent('tap', me, e, t); }, me);
                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'datepickerfield',
                        label: '计划开始日期',
                        labelWidth: '40%',
                        name: 'planstartdate',
                        required: true,
                        dateFormat: 'Y-m-d',
                        picker: {
                            slotOrder: [
                                'year',
                                'month',
                                'day'
                            ],
                            yearTo: 2200,
                            doneButton: '确定',
                            cancelButton: '取消'
                        }
                    },
                    {
                        xtype: 'datepickerfield',
                        label: '计划结束日期',
                        labelWidth: '40%',
                        name: 'planenddate',
                        required: true,
                        dateFormat: 'Y-m-d',
                        picker: {
                            slotOrder: [
                                'year',
                                'month',
                                'day'
                            ],
                            yearTo: 2200,
                            doneButton: '确定',
                            cancelButton: '取消'
                        }
                    },
                    {
                        xtype: 'textareafield',
                        id: 'EngReformcheckJobAdd_checkuserName',
                        itemId: 'EngReformcheckJobAdd_checkuserName',
                        clearIcon: false,
                        label: '检验人员',
                        labelWidth: '40%',
                        name: 'checkeduserName',
                        required: true,
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    var me = this;
                                    me.element.on('tap', function(e, t) { me.fireEvent('tap', me, e, t); }, me);
                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'selectfield',
                        id: 'EngReformcheckJobAdd_createdeptid',
                        label: '创建人部门',
                        labelWidth: '40%',
                        name: 'createdeptid',
                        displayField: 'storagename',
                        store: 'first_check_job_add_deptid',
                        valueField: 'storageid'
                    },
                    {
                        xtype: 'textfield',
                        id: 'EngReformcheckJobAdd_creatorname',
                        label: '创建人',
                        labelWidth: '40%',
                        name: 'creatorname',
                        readOnly: true
                    },
                    {
                        xtype: 'textareafield',
                        label: '注意事项',
                        name: 'remark',
                        placeHolder: '输入注意事项'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngReformcheckJobAdd_status',
                        name: 'status'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngReformcheckJobAdd_dispatchtype',
                        name: 'dispatchtype'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngReformcheckJobAdd_projectid',
                        name: 'projectid'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngReformcheckJobAdd_contractid',
                        name: 'contractid'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngReformcheckJobAdd_createid',
                        name: 'createid'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngReformcheckJobAdd_elevator',
                        name: 'elevator'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngReformcheckJobAdd_checkuser',
                        name: 'checkuser'
                    },
                    {
                        xtype: 'panel',
                        cls: [
                            'liftnet-button',
                            'liftnet-button-three'
                        ],
                        docked: 'bottom',
                        id: 'EngReformcheckJobAdd_BtnPanel',
                        itemId: 'EngReformcheckJobAdd_BtnPanel',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: 'liftnet-buttonColor-green',
                                id: 'EngReformcheckJobAdd_BtnUpdate',
                                itemId: 'EngReformcheckJobAdd_BtnUpdate',
                                text: ''
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                id: 'EngReformcheckJobAdd_BtnSave',
                                itemId: 'EngReformcheckJobAdd_BtnSave',
                                text: ''
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                id: 'EngReformcheckJobAdd_BtnCommit',
                                itemId: 'EngReformcheckJobAdd_BtnCommit',
                                text: ''
                            }
                        ]
                    }
                ]
            }
        ]
    }

});