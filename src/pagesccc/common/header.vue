<template>
    <aside id="header">
        <ul class="left-menu tool-panel">
            <li class="logo-icon"> </li>

        </ul>
        <ul class="right-menu">

            
            <li>
            <span id="shr-buttons" class="btn-double green">
                <a class="btn ui-dropdown-button download" data-id="download" title="下载" data-charlimit="10"><i
                        class="icon-cloud-download"></i>下载</a>
<div class="btn" id="ik-download-notification"><div class="spinnerWrapper" style="display: inline;"><div
        class="spinner small"><circle class="path"></circle></div></div><span
        style="display: inline; padding-left: 5px; vertical-align: text-top;" title="请稍等" data-charlimit="10">请稍等</span></div>
                <a class="btn ui-dropdown-button shr" data-id="share" title="分享" data-charlimit="10"><i
                        class="icon-export"></i>分享</a>
                <a class="btn ui-dropdown-button print" data-charlimit="10"><i class="fa fa-print"></i>Print</a>
            </span>
            </li>
            <li>
                <a class="btn black close" title="退出" data-charlimit="10">退出<i class="icon-remove"></i></a>
            </li>
        </ul>


    </aside>
</template>

<script>

    export default{
        data(){
            return {

            }
        }
    }
</script>
