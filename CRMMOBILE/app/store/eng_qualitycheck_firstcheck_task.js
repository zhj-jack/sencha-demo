/*
 * File: app/store/eng_qualitycheck_firstcheck_task.js
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

Ext.define('liftnet.store.eng_qualitycheck_firstcheck_task', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'eng_qualitycheck_firstcheck_task',
        fields: [
            {
                name: 'jnlno'
            },
            {
                name: 'prono'
            },
            {
                name: 'projectname'
            },
            {
                name: 'r3'
            },
            {
                name: 'plandate'
            },
            {
                name: 'liftautono'
            },
            {
                name: 'status'
            },
            {
                name: 'nextstate'
            },
            {
                name: 'auditcolor'
            },
            {
                name: 'titlecolor'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm, action) {

        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/firstcheck/api/1.0/fclist';
            var userid = global.getUserId();
            var adapterParm = {
                userid:global.getUserId(),
                curpagenum:parm.curpagenum,
                pagesize:parm.pagesize,
                searchkey:parm.searchkey,
                flowstatus:parm.flowstatus
            };

            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    var info;
                    if(ret.status.code!=200){
                        onFailure('读取首检任务列表失败');
                    }else{
                        if(ret.data.length===0){
                            if(parm.curpagenum===1){
                                switch(action){

                                    case 'loadmore':
                                        break;
                                    case 'refresh':
                                    case 'search':
                                    case 'firstload':
        //                                 me.setData([]);
                                        info = '没有相关首检任务';
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
                            //先设置空值,把之前的清除
                            me.setData([]);
                            me.setData(d);
                        }else{
                            //分页用法，在原有数据上继续添加
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
                            info = '加载更多首检任务失败';
                            cutOne = true;
                            break;
                        case 'refresh':
                            info = '刷新首检任务列表失败';
                            break;
                        case 'search':
                            info = '搜索首检任务失败';
                            break;
                    }

                    onFailure(info,cutOne);
                }
            );

            // adapter取数
        //     var url = '/adapters/firstcheck/api/1.0/fclist';
        //     var userid = global.getUserId();
        //     var adapterParm = {userid:userid};

        //     callPostAdapter(
        //         url, adapterParm,
        //         function(ret) {
        //             if(ret.status.code!=200){
        //                 onFailure('读取首检任务列表失败');
        //             }else{
        //                 var d = me.decoDat(ret.data);
        //                 me.setData(d);
        //                 onSuccess();
        //             }
        //         },
        //         function() {
        //             onFailure('读取首检任务列表失败');
        //         }
        //         );
        } else {

            var me = this;
            //分页模拟
            var start = (parm.curpagenum-1) * parm.pagesize,
                end = parm.curpagenum * parm.pagesize;
            //         end = end>50?50:end;
            if(end>60){
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
                        jnlno:'jnlno'+i,
                        liftautono:i+1,
                        prono:'3110-11101-201601-0001',
                        projectname:'万科四季花园',
                        r3:'A1',
                        plandate:'2016/4/1 ~ 2016/4/5',
                        status:'新建',
                        nextstate:[
                                   {name:'删除',state:3},
                                   {name:'审核',state:1},
                                   ],
                        auditcolor:'orange',
                    }
                ]);
                this.add(d);
            }
            // 演示数据
            if(action=='refresh'||action=='search'||action=='firstload'){
        //         onSuccess(end - start + 1,true);
                onSuccess(end - start + 1,true
                );
            }else{
                onSuccess(end - start + 1,false);
            }
        }

        //     var d = this.decoDat([
        //         {
        //             liftautono:'1',
        //             prono:'3110-11101-201601-0001',
        //             projectname:'万科四季花园',
        //             r3:'A1',
        //             plandate:'2016/4/1 ~ 2016/4/5',
        //             status:'新建',
        //             nextstate:[{name:'审核',state:1},{name:'删除',state:2}],
        //             auditcolor:'orange',
        //         },
        //         {
        //             liftautono:'2',
        //             prono:'3110-11101-201601-0002',
        //             projectname:'万科四季花园',
        //             r3:'A2',
        //             plandate:'2016/4/1 ~ 2016/4/5',
        //             status:'待审',
        //             nextstate:[],
        //             auditcolor:'red',
        //         },
        //         {
        //             liftautono:'3',
        //             prono:'3110-11101-201601-0003',
        //             projectname:'万科世纪花园',
        //             r3:'A3',
        //             plandate:'2016/4/1 ~ 2016/4/5',
        //             status:'通过',
        //             nextstate:[{name:'删除',state:2}],
        //             auditcolor:'green',
        //         },
        //     ]);
        //     this.setData(d);

        //         onSuccess();
        //         }
    },

    updateDat: function(onSuccess, onFailure, parm) {

    },

    filteDat: function(parm) {
        this.clearFilter();

                if(parm!=='') {
                    this.filterBy(function(item) {
                        var s = item.get("prono") + ' ' + item.get("projectname");
                        return (s.toUpperCase().indexOf(parm.toUpperCase())>=0);
                    });
                }
    },

    decoDat: function(data) {
        if(!data) return([]);

        for(var i = 0; i < data.length; i++){
            switch(data[i].status){
                case '通过':
                    data[i].auditcolor = 'green';
                    break;
                case '待审':
                    data[i].auditcolor = 'orange';
                    break;
                case '新建':
                    data[i].auditcolor = 'red';
                    break;
            }
            data[i].titlecolor = 'blue';
        }
        return data;
    }

});