/*
 * File: app/view/Admin/AdmMonitorElevatorList.js
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

Ext.define('liftnet.view.Admin.AdmMonitorElevatorList', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.field.Search',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        id: 'AdmMonitorElevatorList',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                title: '电梯列表',
                items: [
                    {
                        xtype: 'button',
                        id: 'AdmMonitorElevatorList_BtnReturn',
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
                        xtype: 'formpanel',
                        cls: 'liftnet-search-form',
                        scrollable: false,
                        items: [
                            {
                                xtype: 'searchfield',
                                cls: 'liftnet-font-size12',
                                placeHolder: '电梯注册码'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        flex: 1,
                        cls: 'liftnet-monitor-elevatorDetail-listBox',
                        id: 'AdmMonitorElevatorList_ListDetailed',
                        disableSelection: true,
                        itemTpl: [
                            '<div class="liftnet-monitor-elevatorDetail-listConBox">',
                            '	<div class="liftnet-monitor-listConBox-top">',
                            '    	<div class="liftnet-font-size16 liftnet-fontColor-darkGray liftnet-monitor-listConBox-top-left">{prodid}</div>',
                            '    	<div class="liftnet-monitor-listConBox-state liftnet-font-right liftnet-font-size12 {statusColor}">{status} <i class="fa fa-circle-o"></i></div>',
                            '    </div>',
                            '    <div class="liftnet-fontColor-gray liftnet-font-size12">{unitname}</div>',
                            '    <div class="liftnet-fontColor-gray liftnet-font-size12">{addr}</div>',
                            '    <div class="liftnet-fontColor-gray liftnet-font-size12">最近维保时间：{lastfinishtime}</div>',
                            '</div>'
                        ],
                        pressedCls: ' ',
                        store: 'ss_elesitulation',
                        onItemDisclosure: false
                    }
                ]
            }
        ]
    }

});