/*
 * File: app/view/Engineer/EngHomeTodoStatus.js
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

Ext.define('liftnet.view.Engineer.EngHomeTodoStatus', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.Button'
    ],

    config: {
        centered: true,
        hidden: true,
        id: 'EngNavMenuProcessingState2',
        padding: '5 10',
        hideOnMaskTap: true,
        layout: 'vbox',
        modal: true,
        items: [
            {
                xtype: 'list',
                flex: 1,
                id: 'EngHomeTodoTypeList',
                itemId: 'EngHomeTodoTypeList',
                itemTpl: [
                    '<div>{type}</div>'
                ],
                store: 'eng_todotype'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                hidden: false,
                id: 'EngHomeTodoStatus_0',
                itemId: 'EngHomeTodoStatus_0',
                text: '全部'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                hidden: false,
                id: 'EngHomeTodoStatus_1',
                itemId: 'EngHomeTodoStatus_1',
                text: '保养计划'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                hidden: false,
                id: 'EngHomeTodoStatus_2',
                itemId: 'EngHomeTodoStatus_2',
                text: '维修任务'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                hidden: false,
                id: 'EngHomeTodoStatus_3',
                itemId: 'EngHomeTodoStatus_3',
                text: '故障报告'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                hidden: false,
                id: 'EngHomeTodoStatus_4',
                itemId: 'EngHomeTodoStatus_4',
                text: '首检任务'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                hidden: false,
                id: 'EngHomeTodoStatus_5',
                itemId: 'EngHomeTodoStatus_5',
                text: '保养任务'
            }
        ]
    }

});