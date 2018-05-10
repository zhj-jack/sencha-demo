/*
 * File: app/view/Admin/AdmAudByhtdetail.js
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

Ext.define('liftnet.view.Admin.AdmAudByhtdetail', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.field.TextArea',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        id: 'AdmAudByhtaud',
        layout: 'vbox',
        scrollable: false,
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                title: '保养合同审核',
                items: [
                    {
                        xtype: 'button',
                        id: 'AdmAudByhtaud_ButReturn',
                        iconCls: 'fa fa-chevron-left'
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                flex: 1,
                cls: 'liftnet-tabbar-two',
                items: [
                    {
                        xtype: 'container',
                        title: '主要信息',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'formpanel',
                                flex: 1,
                                cls: [
                                    'liftnet-form-info',
                                    'liftnet-font-size14',
                                    'liftnet-lineHeight34'
                                ],
                                id: 'form_aud_byhtdetail',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        clearIcon: false,
                                        label: '合同编号',
                                        name: 'r9',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        clearIcon: false,
                                        label: '客户名称',
                                        labelWidth: '50%',
                                        name: 'custid',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        clearIcon: false,
                                        label: '地址',
                                        labelWidth: '50%',
                                        name: 'address',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        clearIcon: false,
                                        label: '开始时间',
                                        labelWidth: '50%',
                                        name: 'mugstartdate',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        clearIcon: false,
                                        label: '结束时间',
                                        labelWidth: '40%',
                                        name: 'mugenddate',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        clearIcon: false,
                                        label: '录入者',
                                        labelWidth: '50%',
                                        name: 'operid',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        clearIcon: false,
                                        label: '台数',
                                        labelWidth: '40%',
                                        name: 'allcount',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        clearIcon: false,
                                        label: '总金额',
                                        labelWidth: '40%',
                                        name: 'countprice',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textareafield',
                                        clearIcon: false,
                                        label: '审批意见',
                                        name: 'r13',
                                        placeHolder: '请输入审批意见'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: '明细列表',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'list',
                                flex: 1,
                                cls: 'liftnet-aApprove-listBox',
                                id: 'AdmAudbyhtdetail_ListDetailed',
                                disableSelection: true,
                                itemTpl: [
                                    '<div class="liftnet-aApprove-listConBox">',
                                    '	<div class="liftnet-aApprove-listConBox-top liftnet-font-size16 liftnet-fontColor-darkGray">',
                                    '注册码:{pordid}</div>',
                                    '    <div class="liftnet-fontColor-gray liftnet-font-size12">型号：{elevatorid}</div>',
                                    '    <div class="liftnet-fontColor-gray liftnet-font-size12">金额:{sumcount}元</div>',
                                    '</div>'
                                ],
                                pressedCls: ' ',
                                onItemDisclosure: true
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: [
                    'liftnet-button',
                    'liftnet-button-two'
                ],
                id: 'AdmAudbyht_PnlYesNo',
                items: [
                    {
                        xtype: 'button',
                        docked: 'left',
                        id: 'AdmAudByhtdetail_BtnYes',
                        itemId: 'mybutton7',
                        text: '同意'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'AdmAudByhtdetail_BtnNo',
                        text: '不同意'
                    }
                ]
            }
        ]
    }

});