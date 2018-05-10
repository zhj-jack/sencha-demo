/*
 * File: app/view/Engineer/EngFaultPhoto.js
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

Ext.define('liftnet.view.Engineer.EngFaultPhoto', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.Panel',
        'Ext.Img',
        'Ext.field.Hidden'
    ],

    config: {
        id: 'EngFaultPhoto',
        autoDestroy: false,
        hideOnMaskTap: false,
        layout: 'vbox',
        modal: false,
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        id: 'FaultPhoto_BtnReturn',
                        iconCls: 'fa fa-chevron-left'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        id: 'FaultPhoto_BtnDel',
                        itemId: 'FaultPhoto_BtnDel',
                        iconAlign: 'right',
                        iconCls: 'delete'
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'panel',
                        flex: 1,
                        id: 'FaultPhoto_Panel',
                        itemId: 'FaultPhoto_Panel',
                        items: [
                            {
                                xtype: 'image',
                                docked: 'top',
                                height: 280,
                                id: 'EngFaultPhoto_show',
                                margin: '100 10 0 10',
                                maxHeight: 350,
                                maxWidth: 350
                            }
                        ]
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'EngFaultPhoto_ImgID'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'NextImgId'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'fcname'
                    }
                ]
            }
        ]
    }

});