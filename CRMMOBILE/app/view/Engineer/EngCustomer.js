/*
 * File: app/view/Engineer/EngCustomer.js
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

Ext.define('liftnet.view.Engineer.EngCustomer', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.Panel',
        'Ext.field.Search',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'container',
                flex: 1,
                id: 'Customer',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'toolbar',
                        cls: 'liftnet-toolbar-other',
                        docked: 'top',
                        title: '客户维护',
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'Customer_ReturnButton',
                                icon: '',
                                iconCls: 'fa fa-chevron-left'
                            },
                            {
                                xtype: 'spacer'
                            },
                            {
                                xtype: 'button',
                                hidden: true,
                                id: 'Customer_Add',
                                itemId: 'Customer_Add',
                                iconCls: 'ln ln-new'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'liftnet-tabbar-one',
                        id: 'Customer_list',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'container',
                                flex: 1,
                                id: 'Customer_CtnList',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'formpanel',
                                        cls: 'liftnet-search-form',
                                        height: 52,
                                        id: 'Customer_SearchForm',
                                        scrollable: false,
                                        items: [
                                            {
                                                xtype: 'searchfield',
                                                cls: 'liftnet-font-size12',
                                                id: 'Customer_searchkey',
                                                itemId: 'Customer_searchkey',
                                                placeHolder: '客户名称、跟进人'
                                            },
                                            {
                                                xtype: 'button',
                                                cls: [
                                                    'liftnet-font-size12',
                                                    'liftnet-no-border',
                                                    'liftnet-fontColor-darkGray'
                                                ],
                                                docked: 'right',
                                                id: 'Customer_Btn',
                                                itemId: 'Customer_Btn',
                                                margin: '16 0',
                                                width: 110,
                                                iconAlign: 'right',
                                                iconCls: 'fa fa-angle-down',
                                                text: '全部'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'list',
                                        flex: 1,
                                        cls: 'liftnet-home-listBox',
                                        id: 'Customer_ListHotline',
                                        itemId: 'Customer_ListHotline',
                                        disableSelection: true,
                                        itemTpl: [
                                            '<div class="liftnet-Maintenance-TaskRecList" style="height:100px">',
                                            '	<div class="liftnet-Maintenance-TaskRecList-left" style="left:14px" >',
                                            '    	<div class="liftnet-font-size12">{custname}</div>',
                                            '    	<div class="liftnet-font-size12 liftnet-fontColor-gray">{r1name}</div>',
                                            '        <div class="liftnet-font-size12 liftnet-fontColor-gray">{flowusername}</div>',
                                            '    	<div class="liftnet-font-size12 liftnet-fontColor-gray">{address}</div>',
                                            '    </div>',
                                            '	<div class="liftnet-Maintenance-TaskRecList-right" style="padding-top:0px;right:14px">',
                                            '    	<div class="liftnet-home-listConBox-state liftnet-font-right liftnet-font-size12">{r2} </div>',
                                            '    	<div class="liftnet-home-listConBox-state liftnet-font-right liftnet-font-size12">{r4}</div>',
                                            '    	<div class="liftnet-home-listConBox-state liftnet-font-right liftnet-font-size12">{r5}</div>',
                                            '    </div>',
                                            '</div>'
                                        ],
                                        store: 'cu_culist'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

});