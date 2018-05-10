/*
 * File: app/store/eng_repaircontractquerylist.js
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

Ext.define('liftnet.store.eng_repaircontractquerylist', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'eng_repaircontractquerylist',
        fields: [
            {
                name: 'wxhtbh'
            },
            {
                name: 'khmc'
            },
            {
                name: 'xmmc'
            },
            {
                name: 'qdrq'
            },
            {
                name: 'ts'
            },
            {
                name: 'htzje'
            },
            {
                name: 'auditcolor'
            },
            {
                name: 'titleColor'
            },
            {
                name: 'gjr'
            },
            {
                name: 'zt'
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
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm, action) {
        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/wxcontract/api/1.0/wxcontractlist';
            var userid = global.getUserId();
            var adapterParm = {
                userid:global.getUserId(),
                curpagenum:parm.curpagenum,
                pagesize:parm.pagesize,
                searchkey:parm.searchkey,
                startdate:parm.startdate,
                enddate:parm.enddate,
                flowstatus:parm.flowstatus
            };

            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    var info;
                    if(ret.status.code!=200){
                        onFailure('搜索合同失败');
                    }else{
                        if(ret.data.length===0){
                            if(parm.curpagenum===1){
                                switch(action){

                                    case 'loadmore':
                                        break;
                                    case 'refresh':
                                    case 'search':
                                        info = '没有相关合同数据';
                                        break;
                                }
                                onFailure(info);
                            }else{
                                onFailure('没有更多数据！');
                            }
                            return;
                        }
                        var d = me.decoDat(ret.data);
                        //第一次加载直接设置数据
                        if(parm.curpagenum==1){
                            me.setData(d);
                        }else{
                            //分页用法，在原有数据上继续添加
        //                     var d = me.decoDat(ret.data);
                            var n = d.length;
                            for(var i=0; i<n; i++) {
                                me.add(d[i]);
                            }
                        }
                        var resetCurPage = false;
                        if(action==='loadmore'){
                            //加载更多的时候不需要重置页数
                             onSuccess(ret.data.length,resetCurPage);
                        }else{
                            //其他情况需要将页数重置为1
                             onSuccess(ret.data.length,!resetCurPage);
                        }
                    }
                },
                function() {
                    var info;
                    var cutOne = false;
                    switch(action){

                        case 'loadmore':
                            info = '加载更多合同数据失败';
                            cutOne = true;
                            break;
                        case 'refresh':
                            info = '刷新合同列表失败';
                            break;
                        case 'search':
                            info = '搜索合同失败';
                            break;
                    }

                    onFailure(info,cutOne);
                }
            );
        } else {
            var me = this;
            //分页模拟
            var start = (parm.curpagenum-1) * parm.pagesize,
                end = parm.curpagenum * parm.pagesize;
            //         end = end>50?50:end;
            if(end>40){
                onFailure('没有更多数据！',false);
                return;
            }
            if(action=='firstload'||action=='refresh'||action=='search'){
                //模拟刷新，搜索，第一次加载
                //清空数据
                this.setData([]);
            }
            for(var i=start; i<end; i++) {
                var d =me.decoDat([
                    {
                        wxhtbh:'WB1600073'+(i+1)+'---'+parm.flowstatus,
                        khmc:'佛山御景花园一期',
                        qdrq: '2015-05-01',
                        ts: i+1,
                        xmmc:'公诚管理咨询有限公司第六分公司',
                        htzje:'18,000',
                        zt:'不通过',
                        gjr:'黄林'
        //                 titleColor:'liftnet-fontColor-blue'
                    }
                ]);
                this.add(d);
            }
            // 演示数据
            if(action=='refresh'||action=='search'||action=='firstload'){
                onSuccess(end - start + 1,true);
            }else{
                onSuccess(end - start + 1,false);
            }
        }
    },

    decoDat: function(data) {
        if(!data) return([]);
        for(var i=0;i<data.length; i++) {
            data[i].titleColor = 'liftnet-fontColor-blue';
        }
        return(data);
    }

});