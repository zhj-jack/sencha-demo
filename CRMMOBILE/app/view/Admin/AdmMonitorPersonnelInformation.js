/*
 * File: app/view/Admin/AdmMonitorPersonnelInformation.js
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

Ext.define('liftnet.view.Admin.AdmMonitorPersonnelInformation', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Panel',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        id: 'AdmMonitorPersonnelInformation',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                title: '人员信息',
                items: [
                    {
                        xtype: 'button',
                        id: 'AdmMonitorPersonnelInformation_BtnReturn',
                        iconCls: 'fa fa-chevron-left'
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'panel',
                        height: 80,
                        margin: '15 12',
                        items: [
                            {
                                xtype: 'panel',
                                docked: 'top',
                                height: 32,
                                items: [
                                    {
                                        xtype: 'panel',
                                        docked: 'left',
                                        width: '78%',
                                        items: [
                                            {
                                                xtype: 'label',
                                                html: '陆志炫 15023215532',
                                                id: 'AdmMonitorPersonalInfo_LblNamePhone'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        docked: 'right',
                                        width: '22%',
                                        items: [
                                            {
                                                xtype: 'label',
                                                cls: [
                                                    'liftnet-font-right',
                                                    'liftnet-font-size12'
                                                ],
                                                html: '路途中 <i class="fa fa-circle-o"></i>',
                                                id: 'AdmMonitorPersonalInfo_LblStatus',
                                                margin: '3 0 0 0'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                cls: [
                                    'liftnet-font-size12',
                                    'liftnet-fontColor-gray'
                                ],
                                docked: 'bottom',
                                items: [
                                    {
                                        xtype: 'label',
                                        html: '广州市凯旋大酒店有限公司凯旋华美达大酒店',
                                        id: 'AdmMonitorPersonalInfo_LblAddr'
                                    },
                                    {
                                        xtype: 'label',
                                        html: '2015-07-29 17:20',
                                        id: 'AdmMonitorPersonalInfo_LblTime'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        cls: 'liftnet-con-title',
                        items: [
                            {
                                xtype: 'label',
                                html: '详细'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        flex: 1,
                        cls: 'liftnet-monitor-track',
                        id: 'AdmMonitorPersonnelInformation_ListDetailed',
                        padding: 10,
                        disableSelection: true,
                        itemTpl: [
                            '    <div class="liftnet-monitor-trackListBox">',
                            '        <h1><img src="{statusicon}" />{status}</h1>',
                            '        <div class="liftnet-font-size12 liftnet-fontColor-gray"><span></span>{addr}</div>',
                            '        <div class="liftnet-font-size12 liftnet-fontColor-gray"><span></span>{time}</div>',
                            '    </div>'
                        ],
                        pressedCls: ' ',
                        store: 'ss_guserlist'
                    }
                ]
            }
        ]
    }

});