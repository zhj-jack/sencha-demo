/*
 * File: app/view/Engineer/EngFirstCheckCheckUser.js
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

Ext.define('liftnet.view.Engineer.EngFirstCheckCheckUser', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.Panel'
    ],

    config: {
        id: 'EngFirstCheckCheckUser',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                cls: 'liftnet-toolbar-other',
                docked: 'top',
                title: '检验人员',
                items: [
                    {
                        xtype: 'button',
                        id: 'EngFirstCheckCheckUser_BtnReturn',
                        iconCls: 'fa fa-chevron-left',
                        text: ''
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        hidden: false,
                        id: 'EngFirstCheckCheckUser_BtnSave',
                        iconCls: 'fa fa-check',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'list',
                flex: 1,
                id: 'EngFirstCheckCheckUser_List',
                itemId: 'EngFirstCheckCheckUser_List',
                disableSelection: true,
                itemTpl: [
                    '<div class="liftnet-font-size14 liftnet-fontColor-darkGray">{username}</div>',
                    '<div class="liftnet-font-size14 liftnet-fontColor-gray">{usertypename}</div>'
                ],
                store: 'eng_firstcheck_checkuser'
            },
            {
                xtype: 'panel',
                cls: [
                    'liftnet-button',
                    'liftnet-button-one'
                ],
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        cls: [
                            'x-buttonColor-white',
                            'liftnet-no-border'
                        ],
                        html: '<i class=\'fa fa-plus\'></i>&nbsp;&nbsp;增加',
                        id: 'EngFirstCheckCheckUser_BtnAdd',
                        itemId: 'EngFirstCheckCheckUser_BtnAdd',
                        text: ''
                    }
                ]
            }
        ]
    }

});