/*
 * File: app/view/Admin/AdmAudSwspdetailCon.js
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

Ext.define('liftnet.view.Admin.AdmAudSwspdetailCon', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.field.Text'
    ],

    config: {
        id: 'AdmAudSwspdetailCon',
        layout: 'vbox',
        scrollable: false,
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                title: '明细信息',
                items: [
                    {
                        xtype: 'button',
                        id: 'AdmAudSwspdetailCon_ButReturn',
                        iconCls: 'fa fa-chevron-left'
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
                id: 'form_aud_swspdetail_detailed',
                scrollable: false,
                items: [
                    {
                        xtype: 'textfield',
                        clearIcon: false,
                        label: '电梯类型',
                        name: 'eletype',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        clearIcon: false,
                        label: '单价',
                        labelWidth: '50%',
                        name: 'sprice',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        clearIcon: false,
                        label: '台数',
                        labelWidth: '50%',
                        name: 'num',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        clearIcon: false,
                        label: '开始日期',
                        labelWidth: '40%',
                        name: 'mugstartdate',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        clearIcon: false,
                        label: '结束日期',
                        labelWidth: '50%',
                        name: 'mugenddate',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        clearIcon: false,
                        label: '总月数',
                        labelWidth: '50%',
                        name: 'countmonth',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        clearIcon: false,
                        label: '合计',
                        labelWidth: '50%',
                        name: 'countprice',
                        readOnly: true
                    }
                ]
            }
        ]
    }

});