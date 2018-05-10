/*
 * File: app/view/Engineer/EngFaultReportStatus.js
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

Ext.define('liftnet.view.Engineer.EngFaultReportStatus', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Button'
    ],

    config: {
        centered: true,
        hidden: true,
        id: 'EngFaultReportState',
        itemId: 'EngFaultReportState',
        padding: '5 10',
        hideOnMaskTap: true,
        modal: true,
        items: [
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngFaultReportStatus_0',
                itemId: 'EngFaultReportStatus_0',
                text: '全部'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngFaultReportStatus_4',
                itemId: 'EngFaultReportStatus_4',
                text: '新建'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngFaultReportStatus_1',
                itemId: 'EngFaultReportStatus_1',
                text: '待审'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngFaultReportStatus_2',
                itemId: 'EngFaultReportStatus_2',
                text: '通过'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngFaultReportStatus_3',
                itemId: 'EngFaultReportStatus_3',
                text: '不通过'
            }
        ]
    }

});