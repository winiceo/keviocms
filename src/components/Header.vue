<template>
    <aside id="header">
        <ul class="left-menu tool-panel">
            <li class="logo-icon"><img src="https://desygner.com/assets/img/favicon.png"></li>        <li class="full-size"><input class="name editor-header-title" id="ik-project-name-header" name="name" title="点击此处重命名你的项目"></li>
        </ul>
        <ul class="right-menu">
            <li style="float: left;">
              <span class="btn-double undo-redo">
                  <a class="btn action disabled" data-action="on_undo" data-popover="tooltip" data-original-title="上一步"><i class="icon-reply"></i></a>
                  <a class="btn action disabled" data-action="on_redo" data-popover="tooltip" data-original-title="下一步"><i class="icon-forward"></i></a>
              </span>
            </li>
            <li style="float: right;">
                <a class="btn black close" title="退出" data-charlimit="10">退出<i class="icon-remove"></i></a>
            </li>
            <li style="float: right;">
              <span id="shr-buttons" class="btn-double green">
                  <a class="btn save" title="存档" data-charlimit="10"><i class="icon-save"></i>存档</a>
                  <div class="save-notification"><div class="spinnerWrapper" style="top: 3px; display: inline;"><div class="spinner small"><circle class="path"></circle></div></div><span style="display: inline; padding-left: 5px;">保存中,,,</span></div>
                  <a class="btn ui-dropdown-button versions" data-id="versions"><i class="icon-chevron-down"></i></a>
                  <a class="btn ui-dropdown-button download" data-id="download" title="Download" data-charlimit="10"><i class="icon-cloud-download"></i>Download</a>
  <div class="btn" id="ik-download-notification"><div class="spinnerWrapper" style="display: inline;"><div class="spinner small"><circle class="path"></circle></div></div><span style="display: inline; padding-left: 5px; vertical-align: text-top;" title="请稍等" data-charlimit="10">请稍等</span></div>
                  <a class="btn ui-dropdown-button shr" data-id="share" title="分享" data-charlimit="10"><i class="icon-export"></i>分享</a>
                  <a class="btn ui-dropdown-button print" data-charlimit="10"><i class="fa fa-print"></i>Print</a>
              </span>
            </li>
        </ul>

        <div class="ui-dropdown-content" data-id="download">
            <div class="tabs">
                <ul>
                    <li><a href="#tabs-1"><i class="icon-jpg"></i><span>Get JPEG</span></a></li>
                    <li><a href="#tabs-2"><i class="icon-png"></i><span>Get PNG</span></a></li>
                    <li><a href="#tabs-3"><i class="icon-pdf"></i><span>Get PDF</span></a></li>
                </ul>
                <div id="tabs-1" data-type="jpeg">
                    <h3>完美的网页和图像</h3>
                    <section id="quality-section">
                        <span>改变存储画质</span>

                        <div style="height: 40px; padding: 5px 30px;"><div class="quality-slider"></div></div>
                        <span style="display: block; float:left; margin-top: -30px;">低</span>
                        <span style="display: block; float:right; margin-top: -30px;">高</span>

                    </section>

                    <div class="expand-panel">
                        <a class="expand-button"><span>还包括</span><i class="icon-chevron-right"></i></a>
                        <div class="expand-content">
                            <div class="checkbox"><input type="checkbox" name="isThumb" value="1">
                                <label for="isThumb" style="width: 90px;">缩略图</label>
                                <input type="number" style="margin: 0 3px; position:relative;" class="form-control small disabled thumbDimensions" data-type="width" placeholder="宽度"><span>X</span>
                                <input type="number" style="margin: 0 3px; position:relative;" class="form-control small disabled thumbDimensions" data-type="height" placeholder="高度"><span>px</span>
                            </div>

                            <div class="checkbox"><input type="checkbox" name="isWeb" value="1">
                                <label for="isWeb" style="width: 90px;">网站</label>
                                <input type="number" style="margin: 0 3px; position:relative;" class="form-control small disabled webDimensions" data-type="width" placeholder="宽度"><span>X</span>
                                <input type="number" style="margin: 0 3px; position:relative;" class="form-control small disabled webDimensions" data-type="height" placeholder="高度"><span>px</span>
                            </div>

                            <div class="checkbox"><input type="checkbox" name="isMobile" value="1">
                                <label for="isMobile" style="width: 90px;">手机</label>
                                <input type="number" style="margin: 0 3px; position:relative;" class="form-control small disabled mobileDimensions" data-type="width" placeholder="宽度"><span>X</span>
                                <input type="number" style="margin: 0 3px; position:relative;" class="form-control small disabled mobileDimensions" data-type="height" placeholder="高度"><span>px</span>
                            </div>

                            <div class="checkbox">
                                <input type="checkbox" name="isZip" value="1">
                                <label for="isZip">下载为ZIP文件</label>
                            </div>
                        </div>
                    </div>
                    <div class="expand-panel">
                        <a class="expand-button"><span>发布设置</span><i class="icon-chevron-right"></i></a>
                        <div class="expand-content">
                            <div class="checkbox">
                                <input type="checkbox" name="isBleed" value="1">
                                <label for="isBleed">出线发布</label>
                            </div>

                            <div class="checkbox">
                                <input type="checkbox" name="isZip" value="1">
                                <label for="isZip">下载为ZIP文件</label>
                            </div>
                        </div>
                    </div>

                    <div class="buttons column">
                        <a href="#" role="custom" class="btn btn-yellow action" data-action="downloadnew" data-type="jpeg">开始下载</a>
                    </div>
                    <div class="estimated-size" style="text-align: right;">
                        <span>预计的文件大小是</span> <b><span class="value"></span></b>
                    </div>
                </div>

                <div id="tabs-2" data-type="png">
                    <h3>完美的高质量图像和透明的背景</h3>

                    <div class="checkbox"><input type="checkbox" name="isForcedTransparency" id="isForcedTransparency" value="1">
                        <label for="isForcedTransparency">Transparent background</label></div>

                    <div class="expand-panel">
                        <a class="expand-button"><span>还包括</span><i class="icon-chevron-right"></i></a>
                        <div class="expand-content">
                            <div class="checkbox"><input type="checkbox" name="isThumb" value="1">
                                <label for="isThumb" style="width: 90px;">缩略图</label>
                                <input type="number" style="margin: 0 3px; position:relative;" class="form-control small disabled thumbDimensions" data-type="width" placeholder="宽度"><span>X</span>
                                <input type="number" style="margin: 0 3px; position:relative;" class="form-control small disabled thumbDimensions" data-type="height" placeholder="高度"><span>px</span>
                            </div>

                            <div class="checkbox"><input type="checkbox" name="isWeb" value="1">
                                <label for="isWeb" style="width: 90px;">网站</label>
                                <input type="number" style="margin: 0 3px; position:relative;" class="form-control small disabled webDimensions" data-type="width" placeholder="宽度"><span>X</span>
                                <input type="number" style="margin: 0 3px; position:relative;" class="form-control small disabled webDimensions" data-type="height" placeholder="高度"><span>px</span>
                            </div>

                            <div class="checkbox"><input type="checkbox" name="isMobile" value="1">
                                <label for="isMobile" style="width: 90px;">手机</label>
                                <input type="number" style="margin: 0 3px; position:relative;" class="form-control small disabled mobileDimensions" data-type="width" placeholder="宽度"><span>X</span>
                                <input type="number" style="margin: 0 3px; position:relative;" class="form-control small disabled mobileDimensions" data-type="height" placeholder="高度"><span>px</span>
                            </div>

                            <div class="checkbox">
                                <input type="checkbox" name="isZip" value="1">
                                <label for="isZip">下载为ZIP文件</label>
                            </div>
                        </div>
                    </div>
                    <div class="expand-panel">
                        <a class="expand-button"><span>发布设置</span><i class="icon-chevron-right"></i></a>
                        <div class="expand-content">
                            <div class="checkbox">
                                <input type="checkbox" name="isBleed" value="1">
                                <label for="isBleed">出线发布</label>
                            </div>

                            <div class="checkbox">
                                <input type="checkbox" name="isZip" value="1">
                                <label for="isZip">下载为ZIP文件</label>
                            </div>
                        </div>
                    </div>

                    <div class="buttons column">
                        <a href="#" role="custom" class="btn btn-yellow action" data-action="downloadnew" data-type="png">开始下载</a>
                    </div>
                    <div class="estimated-size" style="text-align: right;">
                        <span>预计的文件大小是</span> <b><span class="value"></span></b>
                    </div>
                </div>

                <div id="tabs-3" data-type="pdf">
                    <h3>理想的文件打印</h3>

                    <div class="checkbox"><input type="radio" name="isRange" id="isRangeAll" checked="">
                        <label for="isRangeAll">所有设计作品</label></div>

                    <div class="checkbox"><input type="radio" name="isRange" id="isRangeCurrent">
                        <label for="isRangeCurrent">目前的设计</label></div>

                    <div class="checkbox"><input type="radio" name="isRange" id="isRangeSelected">
                        <label for="isRangeSelected">下载范围：</label>
                        <div class="ui-dropdown disabled" style="padding: 0 5px;display: table-cell;"><div class="input-icon small"><div id="page_from">从</div><i class="icon-unfold_more"></i></div>
                            <ul id="page_from_options" class="ui-dropdown-items"></ul><input name="page_from" type="hidden"></div>
                        <div class="ui-dropdown disabled" style="display: table-cell;"><div class="input-icon small"><div id="page_to">到</div><i class="icon-unfold_more"></i></div>
                            <ul id="page_to_options" class="ui-dropdown-items"></ul><input name="page_to" type="hidden"></div>
                    </div>

                    <div class="expand-panel">
                        <a class="expand-button"><span>发布设置</span><i class="icon-chevron-right"></i></a>
                        <div class="expand-content">
                            <div class="checkbox">
                                <input type="checkbox" name="isBleed" value="1">
                                <label for="isBleed">出线发布</label>
                            </div>

                            <div class="checkbox">
                                <input type="checkbox" name="isZip" value="1">
                                <label for="isZip">下载为ZIP文件</label>
                            </div>
                        </div>
                    </div>

                    <div class="buttons column">
                        <a href="#" role="custom" class="btn btn-yellow action" data-action="downloadnew" data-type="pdf">开始下载</a>
                    </div>
                </div>

            </div>
        </div>
        <div class="ui-dropdown-content" data-id="versions">
            <div class="content">
                <h3>Previous Versions</h3>

                <div class="antiscroll-wrap">
                    <div class="antiscroll-inner">
                        <div class="tab-content">
                        </div>
                    </div>
                </div>
            </div>

        </div>    <div class="ui-dropdown-content" data-id="share"></div>
    </aside>
</template>
<script>

export default {
  data () {
    return {
       }
  },

  methods: {

  },
  created () {

  }
}
</script>
<style lang="stylus">
    #stats {
        position: absolute;
        left: 1px;
        bottom: 41px;
        z-index: 2;
    }
    #header {
        color: #01adb6;
        height: 50px;
        width: 100%;
        background-color: #ffffff;
        text-align: center;
    }

    #header hr {
        clear: both;
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(200, 200, 200, 0.75), rgba(0, 0, 0, 0));
    }

    #header ul.left-menu li {
        display: inline;
    }

    #header ul.right-menu li {
        display: block;
    }

    #header ul.left-menu li,
    #header ul.right-menu li {
        height: 100%;
        line-height: 100%;
        vertical-align: middle;
    }

    #header .left-menu {
        position: absolute;
        top: 0;
        left: 0;
    }

    #header li.logo-icon {
        line-height: 45px !important;
    }

    #header li.logo-icon img {
        height: 100%;
        background: #25d5e5;
        padding: 0 15px;
    }

    #header li.name-icon i {
        margin: 13px 15px 0 20px;
        font-size: 2.2em;
    }

    #header .name {
        vertical-align: top;
        overflow: hidden;
        line-height: 50px;
        font-size: 24px;
    }

    #header .name.editor-header-title {
        border: none;
        line-height: 48px;
        height: 50px;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        padding: 0px 15px;
        position: relative;
        left: -3px;
    }

    #header .name.editor-header-title:focus {
        -webkit-box-shadow: inset 0px 0px 6px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: inset 0px 0px 6px 0px rgba(0,0,0,0.3);
        box-shadow: inset 0px 0px 6px 0px rgba(0,0,0,0.2);
    }

    #header .right-menu {
        position: absolute;
        min-width: 650px;
        top: 0;
        right: 0;
        left: 395px;
        text-align: left;
        background-color: white;
    }

    #header .right-menu .btn {
        float: left;
        color: #01adb6;
        height: 100%;
        padding: 18px 20px;
    }

    #header .right-menu .btn i {
        margin: 0 5px;
    }

    #header .right-menu .btn.active,
    #header .right-menu .btn:hover,
    #header .right-menu .btn:focus {
        background-color: #2b3031 !important;
        color: #ffdd17 !important;
    }

    #header .save-notification,
    #header .right-menu .btn-double.green .btn {
        background-color: #01adb6;
        color: #FFF;
        padding: 19px 15px;
        font-weight: 400;
    }

    #header .right-menu .btn.black {
        color: #595959;
        padding-right: 0px;
    }

    #header .right-menu .btn.black i {
        margin: 0 10px 0 5px;
    }

    .ui-dropdown-content select {
        color: #333;
    }

    #bottom-submenu .ui-dropdown-content,
    #header .ui-dropdown-content {
        display: none;
        position: absolute;
        width: 300px;
        background-color: #2b3031;
        font-size: 14px;
        color: white;
        line-height: 20px;
        padding: 10px;
        z-index: 102;
        box-shadow: 3px 3px 5px rgba(0,0,0,.3);
        -moz-box-shadow: 3px 3px 5px rgba(0,0,0,.3);
    }

    #header .ui-dropdown-content h3 {
        color: white;
        padding: 10px 0;
        letter-spacing: 0.5px;
    }

    #header .ui-dropdown-content h3 > span {
        color: #01ADB6;
    }

    #bottom-submenu .ui-dropdown-content {
        bottom: 40px;
        padding: 20px;
        box-shadow: 3px -3px 5px rgba(0,0,0,.3);
        -moz-box-shadow: 3px -3px 5px rgba(0,0,0,.3);
    }

    #bottom-submenu .ui-dropdown-content.custom-zoom {
        width: 70px;
        padding: 15px;
    }

    #bottom-submenu .ui-dropdown-content.custom-zoom ul {
        list-style: none;
    }

    #bottom-submenu .ui-dropdown-content.custom-zoom li {
        display: block;
        cursor: pointer;
        text-align: right;
    }

    #header .ui-dropdown-content {
        top: 50px;
    }

    #bottom-submenu .ui-dropdown-content .buttons,
    #header .ui-dropdown-content .buttons {
        display: inline-block;
        width: 100%;
    }

    #header .ui-dropdown-content .buttons.row .btn {
        width: 48%;
        display: block;
        float: left;
        margin: 2px;
    }

    #header .ui-dropdown-content .buttons.column .btn {
        margin: 5px auto;
    }

    #header .ui-dropdown-content .link {
        font-size: 0.8em;
        margin-top: 15px;
    }

    #header .ui-dropdown-content .link .design-link,
    #header .ui-dropdown-content .link .project-link {
        background: 0 0;
        border: 1px solid #EEE;
        color: #EEE;
        text-align: center;
        padding: 4px;
        font-size: 1em;
        word-break: break-word;
    }



    #header .ui-dropdown-content .image-container img.empty {
        width: 124px;
        height: 84px;
    }

    #header .ui-dropdown-content .image-container img {
        max-width: 100px;
        max-height: 100px;
    }

    .save-notification,
    .download-notification,
    #ik-save-notification,
    #ik-download-notification {
        display: none;
        float: left;
        padding: 14px 20px;
    }

    #header .save-notification {
        padding: 15px 20px;
    }
</style>
