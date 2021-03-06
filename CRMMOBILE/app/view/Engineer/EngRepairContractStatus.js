/*
 * File: app/view/Engineer/EngRepairContractStatus.js
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

Ext.define('liftnet.view.Engineer.EngRepairContractStatus', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Button'
    ],

    config: {
        centered: true,
        hidden: true,
        id: 'EngRepairContractStatus',
        itemId: 'EngRepairContractStatus',
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
                id: 'EngRepairContractStatus_0',
                itemId: 'EngRepairContractStatus_0',
                text: '全部'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngRepairContractStatus_1',
                itemId: 'EngRepairContractStatus_1',
                text: '新建'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngRepairContractStatus_2',
                itemId: 'EngRepairContractStatus_2',
                text: '待审'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngRepairContractStatus_3',
                itemId: 'EngRepairContractStatus_3',
                text: '审批中'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngRepairContractStatus_4',
                itemId: 'EngRepairContractStatus_4',
                text: '通过'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngRepairContractStatus_5',
                itemId: 'EngRepairContractStatus_5',
                text: '不通过'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'EngRepairContractStatus_6',
                itemId: 'EngRepairContractStatus_6',
                text: '作废'
            }
        ]
    }

});