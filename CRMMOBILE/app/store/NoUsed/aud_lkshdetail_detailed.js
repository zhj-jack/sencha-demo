/*
 * File: app/store/NoUsed/aud_lkshdetail_detailed.js
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

Ext.define('liftnet.store.NoUsed.aud_lkshdetail_detailed', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'NoUsed.aud_lkshdetail_detailed',
        fields: [
            {
                name: 'liftorserviceno',
                type: 'string'
            },
            {
                name: 'feeamt',
                type: 'string'
            },
            {
                name: 'feetype',
                type: 'string'
            },
            {
                name: 'serverdate',
                type: 'string'
            },
            {
                name: 'atm',
                type: 'string'
            },
            {
                name: 'realfee',
                type: 'string'
            },
            {
                name: 'detailrem',
                type: 'string'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/aud/api/1.0/lkshdetail/'+'流水号';
            var userid = global.getUserId();
            var adapterParm = {userid:'用户ID',billno:'来款流水号'};

            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    me.setData(ret.data);
                    onSuccess();
                },
            onFailure);
        } else {
            // 来款审核查看-明细信息-演示数据
            this.setData([
            {
                liftorserviceno: '注册码',
                feeamt: '收费期数',
                feetype: '费用项目',
                serverdate: '服务区间',
                atm: '应收金额',
                realfee: '实收金额',
                detailrem: '备注'
            }
            ]);

            onSuccess();
        }
    },

    updateDat: function(onSuccess, onFailure, parm) {

    },

    filteDat: function(parm) {

    }

});