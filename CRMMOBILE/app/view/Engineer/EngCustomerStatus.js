/*
 * File: app/view/Engineer/EngCustomerStatus.js
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

Ext.define('liftnet.view.Engineer.EngCustomerStatus', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Button'
    ],

    config: {
        centered: true,
        hidden: true,
        id: 'CustomerStatus',
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
                id: 'CustomerStatus_0',
                itemId: 'CustomerStatus_0',
                text: '全部'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'CustomerStatus_1',
                itemId: 'CustomerStatus_1',
                text: '重点客户'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'CustomerStatus_2',
                itemId: 'CustomerStatus_2',
                text: '普通客户'
            },
            {
                xtype: 'button',
                cls: [
                    'liftnet-no-border',
                    'liftnet-font-size14'
                ],
                id: 'CustomerStatus_3',
                itemId: 'CustomerStatus_3',
                text: '非优先客户'
            }
        ]
    }

});