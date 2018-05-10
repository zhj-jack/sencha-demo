/*
 * File: app/store/eng_projecttracking_detail_flowinfolist.js
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

Ext.define('liftnet.store.eng_projecttracking_detail_flowinfolist', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'eng_projecttracking_detail_flowinfolist',
        fields: [
            {
                name: 'flowInfo'
            },
            {
                name: 'flowuser'
            },
            {
                name: 'flowdate'
            },
            {
                name: 'todoTpl'
            }
        ]
    },

    decoDat: function(data) {
        if(data.length>0){
            for(var i=0;i<data.length;i++){
                data[i].todoTpl = '<div style="float:left;">'+
                    '<div style="line-height:18px" class="liftnet-font-size12 ">'+
                    data[i].flowuser+'</div>'+
                    '<div style="line-height:18px" class="liftnet-font-size12 ">'+
                    data[i].flowInfo+'</div>'+
                '</div>'+
                '<div style="float:right;">'+
                '<div style="line-height:18px" class="liftnet-font-size12 ">'+
                data[i].flowdate+'</div>'+
                '</div>';

            }
            return data;
        }else{
            var ds = [{
                todoTpl : '<div style="height:68px;text-align:center;padding-top:25px;" class="liftnet-font-size12 ">暂无数据!</div>'
            }];
            return ds;
        }
    }

});