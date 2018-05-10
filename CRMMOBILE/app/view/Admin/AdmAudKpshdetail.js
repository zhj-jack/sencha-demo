/*
 * File: app/view/Admin/AdmAudKpshdetail.js
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

Ext.define('liftnet.view.Admin.AdmAudKpshdetail', {
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
        id: 'AdmAudKpshdetail',
        layout: 'vbox',
        scrollable: false,
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                title: '开票审核',
                items: [
                    {
                        xtype: 'button',
                        id: 'AdmAudKpshdetail_ButReturn',
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
                                id: 'form_aud_kpshdetail',
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
                                        label: '发票客户',
                                        labelWidth: '50%',
                                        name: 'custid',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        clearIcon: false,
                                        label: '开票金额合计',
                                        labelWidth: '50%',
                                        name: 'countprice',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        clearIcon: false,
                                        label: '录入人',
                                        labelWidth: '40%',
                                        name: 'userid1',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        clearIcon: false,
                                        label: '录入日期',
                                        labelWidth: '50%',
                                        name: 'date2',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        clearIcon: false,
                                        label: '发票类型',
                                        labelWidth: '40%',
                                        name: 'typeid',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textareafield',
                                        clearIcon: false,
                                        label: '审批意见',
                                        name: 'rem2',
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
                                id: 'AdmAudkpshdetail_ListDetailed',
                                disableSelection: true,
                                itemTpl: [
                                    '<div class="liftnet-aApprove-listConBox">',
                                    '	<div class="liftnet-aApprove-listConBox-top liftnet-font-size16 liftnet-fontColor-darkGray">',
                                    '注册码：{liftorserviceno}</div>',
                                    '    <div class="liftnet-fontColor-gray liftnet-font-size12">收费期数：{feeamt}期</div>',
                                    '    <div class="liftnet-fontColor-gray liftnet-font-size12">本次开票金额:{nowfee}元</div>',
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
                id: 'AdmAudkpsh_PnlYesNo',
                items: [
                    {
                        xtype: 'button',
                        docked: 'left',
                        id: 'AdmAudKpshdetail_BtnYes',
                        text: '同意'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'AdmAudKpshdetail_BtnNo',
                        text: '不同意'
                    }
                ]
            }
        ]
    }

});