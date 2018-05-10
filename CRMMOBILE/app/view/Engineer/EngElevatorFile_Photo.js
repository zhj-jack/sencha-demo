/*
 * File: app/view/Engineer/EngElevatorFile_Photo.js
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

Ext.define('liftnet.view.Engineer.EngElevatorFile_Photo', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.Panel',
        'Ext.field.TextArea',
        'Ext.Img',
        'Ext.field.Hidden'
    ],

    config: {
        id: 'EngElevatorFile_Photo',
        itemId: 'EngElevatorFile_Photo',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'ElevatorFile_BtnReturn',
                        iconCls: 'fa fa-chevron-left'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        cls: 'liftnet-fontColor-white',
                        id: 'ElevatorFile_PhotoSave',
                        itemId: 'ElevatorFile_PhotoSave',
                        text: '确定'
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
                        items: [
                            {
                                xtype: 'textareafield',
                                cls: [
                                    'liftnet-font-size14',
                                    'liftnet-lineHeight34'
                                ],
                                id: 'ElevatorFile_Remark',
                                itemId: 'ElevatorFile_Remark',
                                placeHolder: '描述。。。'
                            },
                            {
                                xtype: 'image',
                                height: 280,
                                id: 'ElevatorFile_Photo',
                                margin: '10 10 0 10',
                                maxHeight: 350,
                                maxWidth: 350
                            },
                            {
                                xtype: 'hiddenfield',
                                id: 'ElevatorFile_Img'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        cls: [
                            'liftnet-button',
                            'liftnet-button-one'
                        ],
                        docked: 'bottom',
                        hidden: true,
                        id: 'ElevatorFile_DelBtn',
                        itemId: 'ElevatorFile_DelBtn',
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'ElevatorFile_DelBtn',
                                text: '删除'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});