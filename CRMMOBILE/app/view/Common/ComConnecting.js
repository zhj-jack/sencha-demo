/*
 * File: app/view/Common/ComConnecting.js
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

Ext.define('liftnet.view.Common.ComConnecting', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Img',
        'Ext.Panel',
        'Ext.Button'
    ],

    config: {
        cls: 'liftnet-start',
        id: 'ComConnecting',
        items: [
            {
                xtype: 'image',
                cls: 'liftnet-start-logo',
                height: 201,
                src: 'resources/images/login_logo.png'
            },
            {
                xtype: 'panel',
                height: 40,
                html: '<center style=\'color:#00abab\'><i class=\'fa fa-spinner fa-spin fa-2x\'></i></center>',
                id: 'ComConnecting_Loading',
                margin: '0 auto',
                width: 40
            },
            {
                xtype: 'button',
                cls: 'liftnet-buttonColor-green',
                hidden: true,
                id: 'ComConnecting_Reload',
                itemId: 'ComConnecting_Reload',
                margin: '20 auto',
                width: 180,
                iconCls: 'fa fa-refresh liftnet-fontColor-white',
                labelCls: 'liftnet-fontColor-white x-button-label ',
                text: '重新连接服务器'
            }
        ],
        listeners: [
            {
                fn: 'onComConnection_ReloadTap',
                event: 'tap',
                delegate: '#ComConnecting_Reload'
            }
        ]
    },

    onComConnection_ReloadTap: function(button, e, eOpts) {
        WL.Client.reloadApp();
    }

});