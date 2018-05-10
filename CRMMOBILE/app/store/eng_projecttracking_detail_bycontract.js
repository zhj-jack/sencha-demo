/*
 * File: app/store/eng_projecttracking_detail_bycontract.js
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

Ext.define('liftnet.store.eng_projecttracking_detail_bycontract', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'eng_projecttracking_detail_bycontract',
        fields: [
            {
                name: 'billno'
            },
            {
                name: 'r9'
            },
            {
                name: 'contractstatus'
            },
            {
                name: 'maid'
            },
            {
                name: 'mugstartdate'
            },
            {
                name: 'mugenddate'
            },
            {
                name: 'custid'
            },
            {
                name: 'mprojectname'
            },
            {
                name: 'r15'
            },
            {
                name: 'flowusername'
            },
            {
                name: 'flowstatus'
            },
            {
                name: 'contractypename'
            },
            {
                name: 'countnum'
            },
            {
                name: 'lotdate'
            },
            {
                name: 'todoTpl'
            }
        ]
    },

    decoDat: function(data) {
        if(data.length>0){
            for(var i=0;i<data.length;i++){
                data[i].todoTpl = '<div class="liftnet-Maintenance-TaskRecList" style="height:100px">'+
                  '<div class="liftnet-Maintenance-TaskRecList-left" style="left:14px" >'+
                  '<div class="liftnet-font-size16 liftnet-fontColor-blue">'+data[i].r9+'&nbsp;</div>'+
                  '<div class="liftnet-font-size12 liftnet-fontColor-darkGray">'+data[i].mprojectname+'&nbsp;</div>'+
                  '<div class="liftnet-font-size12 liftnet-fontColor-darkGray">'+data[i].mugstartdate+' ~ '+data[i].mugenddate+'&nbsp;</div>'+
                  '<div class="liftnet-font-size12 liftnet-fontColor-darkGray">'+data[i].custid+'&nbsp;</div>'+
                  '</div>'+
                  '<div class="liftnet-Maintenance-TaskRecList-right" style="padding-top:0px;right:14px">'+
                  '<div class="liftnet-font-size12 liftnet-fontColor-darkGray liftnet-font-right">'+data[i].countnum+'台&nbsp;</div>'+
                  '<div class="liftnet-font-size12 liftnet-font-right liftnet-fontColor-darkGray">¥'+data[i].r15+'&nbsp;</div>'+
                  '<div class="liftnet-font-size12 liftnet-font-right liftnet-fontColor-darkGray">'+data[i].flowstatus+'&nbsp;</div>'+
                  '<div class="liftnet-font-size12 liftnet-font-right liftnet-fontColor-darkGray">'+data[i].contractypename+'&nbsp;</div>'+
                  '</div></div>';

            }
            return data;
        }else{
            var ds = [{
                todoTpl : '<div style="height:100px;text-align:center;padding-top:40px;" class="liftnet-font-size12 ">暂无数据!</div>'
            }];
            return ds;
        }
    }

});