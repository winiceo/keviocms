<template>
    <div class="tool-content">

        <div role="tabpanel" class="tab legacy" id="tabTutorial">
            <div class="antiscroll-wrap">
                <div class="antiscroll-inner">
                    <div class="tab-content">
                        <section>
                            <h3>欢迎使用</h3>
                            <h1>Desygner 编辑</h1>
                            <p>This is your live project and you can edit in many different ways.</p>
                            <p>
                                <a href="#tabExtra" data-toggle="tab" data-popover="popover" data-container="body" data-placement="right" data-content="Change <b>backgrounds</b>, add <b>stickers</b>, and <b>draw</b> on the design.<br />Write notes, comments or detailed stories" data-original-title="" title="">
                                    Customise                        </a>
                                并添加新的                        <a class="pageOrderShow" data-popover="popover" data-container="body" data-placement="right" data-content="View, rearrange, add, delete and duplicate design from <b>Designs Order</b>.<br />You can also use the shortcut icons on each design to add, duplicate and delete design." data-original-title="" title="">
                                designs                        </a> 任何时间</p>
                            <p>
                                设计选择不同                        <a href="#tabLayouts" data-toggle="tab" data-popover="popover" data-container="body" data-placement="right" data-content="Choose from a variety of <b>templates</b> and make each design look great!<br />Drag and drop photos in to the placeholders.<br />Reposition the photos within the placeholders by double-clicking on the image and dragging the crop box to the part of the photo you would like to show." data-original-title="" title="">templates</a>
                                for each design. Add more                        <a href="#tabImages" data-toggle="tab" data-popover="popover" data-container="body" data-placement="right" data-content="Add photos from <b>Facebook</b>, <b>Instagram</b>, <b>Flickr</b>, <b>Google+</b>, <b>Picasa</b> or <b>upload</b>.<br />Find the images uploaded to this project under <b>&quot;This project &quot;</b> and images used in other projects under <b>&quot;Other projects &quot;</b>." data-original-title="" title="">图片</a>
                                and                        <a class="addText" data-popover="popover" data-font-family="Allerta" data-font-size="32" data-container="body" data-placement="right" data-content="Add <b>Text</b> to each design.<br />Choose from a multitude of fonts.<br />Change size &amp; colour. Make it bold or italic." data-original-title="" title="">文字</a>.
                            </p>
                            <p>
                                更换                        <a href="#tabExtra" data-toggle="tab" data-popover="popover" data-container="body" data-placement="right" data-content="Select a <b>Background</b> from hundreds of free options.<br />You can apply the background to the design you're currently editing, or to all designs of your project." data-original-title="" title="">背景</a>，加                        <a href="#tabExtra" data-toggle="tab" data-popover="popover" data-container="body" data-placement="right" data-content="Choose from a multitude of <b>Stickers</b> and <b>Banners</b> to personalize your project.<br />Drag and drop them in to the design.<br />Click on the stickers to change colours and more." data-original-title="" title="">贴纸</a>
                                and                        <a href="#tabExtra" data-toggle="tab" data-popover="popover" data-container="body" data-placement="right" data-content="添加圆圈，方格和线。免费-<b>涂鸦</b>.<br />用形状为图片添加边框或横幅" data-original-title="" title="">画</a>
                                on the design.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>

        <div role="tabpanel" class="tab legacy" id="tabSearch">
            <div class="tool-search">
                <form action="/" autocomplete="on">
                    <input name="search" type="text" data-mode="" data-filter="" placeholder="寻找内容" autocomplete="off" tabindex="1">
                    <button type="submit" name="go"><i class="icon-magnifying-glass"></i><span>Go</span></button>
                </form>
            </div>
            <div class="tool-static-block tabs mini">
                <ul>
                    <li><a href="#tabs-1" data-id="image">Images</a></li>
                    <li><a href="#tabs-2" data-id="background">Backgrounds</a></li>
                    <li><a href="#tabs-3" data-id="sticker">Stickers</a></li>
                    <li><a href="#tabs-4" data-id="layout">Templates</a></li>
                </ul>

                <div id="tabs-1" data-type="images">
                    <div class="checkbox"><input type="radio" name="searchImages" id="searchImagesGoogle" value="google">
                        <label for="searchImagesGoogle">Google Images <a data-popover="popover" data-container="body" data-placement="right" data-content="Labeled for reuse" data-original-title="" title="">(?)</a></label>
                    </div>
                    <div class="checkbox"><input type="radio" name="searchImages" id="searchImagesFree" value="free">
                        <label for="searchImagesFree">100% Royalty Free <a data-popover="popover" data-container="body" data-placement="right" data-content="From our partners Pixabay &amp; Unsplash" data-original-title="" title="">(?)</a></label>
                    </div>
                    <div class="checkbox"><input type="radio" name="searchImages" id="searchImagesAll" value="" checked="">
                        <label for="searchImagesAll">All Images Available</label>
                    </div>
                </div>

                <div id="tabs-2" data-type="background">
                </div>

                <div id="tabs-3" data-type="stickers">
                </div>

                <div id="tabs-4" data-type="templates">
                    <div class="checkbox"><input type="radio" name="searchTemplates" id="searchTmplThis" value="this">
                        <label for="searchTmplThis">This format</label>
                    </div>
                    <div class="checkbox"><input type="radio" name="searchTemplates" id="searchTmplProp" value="prop">
                        <label for="searchTmplProp">Proportional to this format</label>
                    </div>
                    <div class="checkbox"><input type="radio" name="searchTemplates" id="searchTmplAny" value="" checked="">
                        <label for="searchTmplAny">Any format</label>
                    </div>
                </div>
            </div>

            <div class="antiscroll-wrap">
                <div class="antiscroll-inner">
                    <ul class="btnWrapper" style="display: none;"></ul>
                    <div class="tab-content"></div>
                </div>
            </div>
        </div>

        <div role="tabpanel" class="tab" id="tabLibrary"></div>
        <div role="tabpanel" class="tab active" id="tabLayouts"><div class="antiscroll-wrap">
            <div class="antiscroll-inner" style="overflow: hidden; width: 295px; height: 480px;">
                <div class="tab-content sub-category template accordion active">
                    <div class="wrapper" style="top: -320px;">
                        <dt>
                            <a class="btn btn-accordion" data-key="socialposts" data-type="">
                                <i class="fa fa-ellipsis-v main"></i>

                                <i class="collapse fa fa-chevron-up hidden"></i>
                                <i class="back fa fa-chevron-left hidden"></i>
                                <span class="name">Social Media Posts</span>
                            </a>
                        </dt>
                        <dt>
                            <a class="btn btn-accordion" data-key="socialhdrs" data-type="">
                                <i class="fa fa-ellipsis-v main"></i>

                                <i class="collapse fa fa-chevron-up hidden"></i>
                                <i class="back fa fa-chevron-left hidden"></i>
                                <span class="name">社交头标</span>
                            </a>
                        </dt>
                        <dt>
                            <a class="btn btn-accordion" data-key="webadvert" data-type="">
                                <i class="fa fa-ellipsis-v main"></i>

                                <i class="collapse fa fa-chevron-up hidden"></i>
                                <i class="back fa fa-chevron-left hidden"></i>
                                <span class="name">网页广告</span>
                            </a>
                        </dt>
                        <dt>
                            <a class="btn btn-accordion" data-key="emailblogs" data-type="">
                                <i class="fa fa-ellipsis-v main"></i>

                                <i class="collapse fa fa-chevron-up hidden"></i>
                                <i class="back fa fa-chevron-left hidden"></i>
                                <span class="name">电子邮件和博客</span>
                            </a>
                        </dt>
                        <dt>
                            <a class="btn btn-accordion" data-key="marketing" data-type="">
                                <i class="fa fa-ellipsis-v main"></i>

                                <i class="collapse fa fa-chevron-up hidden"></i>
                                <i class="back fa fa-chevron-left hidden"></i>
                                <span class="name">市场营销材料</span>
                            </a>
                        </dt>
                        <dt>
                            <a class="btn btn-accordion" data-key="docs" data-type="">
                                <i class="fa fa-ellipsis-v main"></i>

                                <i class="collapse fa fa-chevron-up hidden"></i>
                                <i class="back fa fa-chevron-left hidden"></i>
                                <span class="name">文件和企业</span>
                            </a>
                        </dt>
                        <dt>
                            <a class="btn btn-accordion" data-key="eventcards" data-type="">
                                <i class="fa fa-ellipsis-v main"></i>

                                <i class="collapse fa fa-chevron-up hidden"></i>
                                <i class="back fa fa-chevron-left hidden"></i>
                                <span class="name">活动与卡片</span>
                            </a>
                        </dt>
                        <dt>
                            <a class="btn btn-accordion" data-key="fun" data-type="">
                                <i class="fa fa-ellipsis-v main"></i>

                                <i class="collapse fa fa-chevron-up hidden"></i>
                                <i class="back fa fa-chevron-left hidden"></i>
                                <span class="name">乐趣和季节性</span>
                            </a>
                        </dt>
                        <dt class="active" style="height: 590px;">
                            <a class="btn btn-accordion" data-key="custom" data-type="">
                                <i class="fa fa-ellipsis-v main hidden"></i>

                                <i class="collapse fa fa-chevron-up"></i>
                                <i class="back fa fa-chevron-left hidden"></i>
                                <span class="name">Custom</span>
                            </a><div class="image-list content custom"><div class="antiscroll-wrap">
                        <div class="antiscroll-inner" style="width: 295px; height: 440px;">
                            <ul class="thumbnail-wrapper"><li class="thumbnail image custom" style="width: 275px; height: 275px;"><img data-src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/CeTTABXw2l9tTZmCEwI3.jpg" data-popover="tooltip" height="275" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/CeTTABXw2l9tTZmCEwI3.jpg">
                                <span class="overlay"></span>

                            </li><li class="thumbnail image custom" style="width: 275px; height: 275px;"><img data-src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/cHdHABXw2lOErngBKMJQ.jpg" data-popover="tooltip" height="275" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/cHdHABXw2lOErngBKMJQ.jpg">
                                <span class="overlay"></span>

                            </li><li class="thumbnail image custom" style="width: 275px; height: 275px;"><img data-src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/JBa1ABXw2mbHNYCASJfT.jpg" data-popover="tooltip" height="275" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/JBa1ABXw2mbHNYCASJfT.jpg">
                                <span class="overlay"></span>

                            </li><li class="thumbnail image custom" style="width: 275px; height: 275px;"><img data-src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/WdbqABXw2nYSSuHB4Jm9.jpg" data-popover="tooltip" height="275" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/WdbqABXw2nYSSuHB4Jm9.jpg">
                                <span class="overlay"></span>

                            </li><li class="thumbnail image custom" style="width: 275px; height: 275px;"><img data-src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/DY20ABXw2oyD788A8L43.jpg" data-popover="tooltip" height="275" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/DY20ABXw2oyD788A8L43.jpg">
                                <span class="overlay"></span>

                            </li><li class="thumbnail image custom" style="width: 275px; height: 275px;"><img data-src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/C5yqABXw2piTUhWBrqi3.jpg" data-popover="tooltip" height="275" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/C5yqABXw2piTUhWBrqi3.jpg">
                                <span class="overlay"></span>

                            </li><li class="thumbnail image custom" style="width: 275px; height: 275px;"><img data-src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/8nxpABXw2ogNJXkBaYjr.jpg" data-popover="tooltip" height="275" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/8nxpABXw2ogNJXkBaYjr.jpg">
                                <span class="overlay"></span>

                            </li><li class="thumbnail image custom" style="width: 275px; height: 275px;"><img data-src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/_5BRABXw2qgebBwBpyXz.jpg" data-popover="tooltip" height="275" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/_5BRABXw2qgebBwBpyXz.jpg">
                                <span class="overlay"></span>

                            </li><li class="thumbnail image custom" style="width: 275px; height: 275px;"><img data-src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/UjXiABXn66OTjrCCUcWE.jpg" data-popover="tooltip" height="275" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/UjXiABXn66OTjrCCUcWE.jpg">
                                <span class="overlay"></span>

                            </li><li class="thumbnail image custom" style="width: 275px; height: 275px;"><img data-src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/uA4IABXn67RjlPsBp_dO.jpg" data-popover="tooltip" height="275" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/layouts/uA4IABXn67RjlPsBp_dO.jpg">
                                <span class="overlay"></span>

                            </li><div class="scrollDetect hide"></div></ul>
                            <div class="spinnerWrapper">
                                <div class="spinner"><circle class="path"></circle></div>
                            </div></div>
                        <div class="antiscroll-scrollbar antiscroll-scrollbar-vertical antiscroll-scrollbar-shown" style="height: 100.738px; top: 0px;"></div></div>
                    </div>
                        </dt>
                    </div>
                </div>
            </div>
            <div class="antiscroll-scrollbar antiscroll-scrollbar-vertical antiscroll-scrollbar-shown" style="height: 387.254px; top: 0px;"></div></div>
        </div>
        <div role="tabpanel" class="tab" id="tabText"></div>
        <div role="tabpanel" class="tab" id="tabImages"></div>
        <div role="tabpanel" class="tab" id="tabImport"></div>
        <div role="tabpanel" class="tab" id="tabExtra"></div>

        <div role="tabpanel" class="tab legacy" id="tabSettings">
            <div class="antiscroll-wrap">
                <div class="antiscroll-inner">
                    <div class="tab-content accordion">
                        <dt><a class="btn btn-accordion accordion-section-title" title="Name Your project" data-charlimit="18" tag="Name Your project">
                            <img src="https://desygner.com/assets/img/favicon-editor.png">
                        </a></dt>

                        <dd>
                            <section><input id="ik-project-name" name="name" type="text" placeholder="Name your project" autocomplete="off"></section>
                            <section class="ui-dropdown"><div class="input-icon" id="ik-project-category">
                                <div id="ik-project-category-txt">类别·</div>
                                <i class="icon-unfold_more"></i>
                            </div>
                                <ul id="ik-project-category-items" class="ui-dropdown-items" style="height: 400px;"></ul>
                                <input id="ik-project-category-value" name="category" type="hidden" value="3">
                            </section>
                            <section><label for="description">描述</label><textarea name="description" id="ik-project-description" placeholder="简介您的 Project （自选）"></textarea></section>
                        </dd>

                        <dt><a class="btn btn-accordion" title="Team" data-charlimit="18" tag="Team"><i class="icon-group"></i></a></dt>
                        <dd id="tabProjectTeam">
                            <section class="empty" id="ik-project-team-creators">
                                <a class="btn btn-black" data-type="admins">合作设计师</a>
                                <div class="listContainer">
                                    <div class="spinnerWrapper"><div class="spinner small"><circle class="path"></circle></div></div>
                                    <div class="emptyText">他们可编辑或加照片。</div>
                                    <ul class="admins-list"><li><a class="btn btn-yellow small" data-type="admins"><i class="icon-plus"></i></a></li></ul>
                                </div>
                            </section>


                            <section class="empty" id="ik-project-team-tag" style="display: none;">
                                <a class="btn btn-black" data-type="tagged">圈人</a>
                                <div class="listContainer">
                                    <div class="spinnerWrapper"><div class="spinner small"><circle class="path"></circle></div></div>
                                    <div class="emptyText">他们会收到新通知</div>
                                    <ul class="tagged-list"><li><a class="btn btn-yellow small" data-type="tagged"><i class="icon-plus"></i></a></li></ul>
                                </div>
                            </section>
                        </dd>

                        <dt><a class="btn btn-accordion" title="Privacy Settings" data-charlimit="18" tag="Privacy Settings"><i class="icon-locked"></i></a></dt>
                        <dd>
                            <ul class="btnWrapper" id="ik-project-privacy">
                                <li><a class="btn btn-squire btn-tag make-public" data-id="90" tag="公共"><div class="iconWrapper"><i class="icon-earth"></i></div></a></li>
                                <li><a class="btn btn-squire btn-tag" data-id="60" tag="关注者"><div class="iconWrapper"><i class="icon-group"></i></div></a></li>
                                <li><a class="btn btn-squire btn-tag active" data-id="10" tag="私人"><div class="iconWrapper"><i class="icon-locked"></i></div></a></li>
                                <li><a class="btn btn-squire btn-tag" data-id="30" tag="Team"><div class="iconWrapper"><i class="icon-bullseye"></i></div></a></li>
                            </ul>
                            <input id="ik-project-privacy-value" name="security" type="hidden" value="10">
                        </dd>

                        <div style="border-bottom: 1px solid #566263;"><a class="btn btn-accordion autosave" title="Autosave" data-charlimit="18" tag="Autosave"><i class="fa fa-check-square check"></i><i class="fa fa-square uncheck hidden"></i></a></div>

                        <div><a class="btn btn-accordion lock" title="Lock Page" data-charlimit="18" tag="Lock Page"><i class="fa fa-check-square check"></i><i class="fa fa-square uncheck hidden"></i></a></div>

                    </div>
                </div>
            </div>
        </div>

        <div role="tabpanel" class="tab" id="tabRestrictions"></div>
    </div>
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
    @import "../../assets/css/variable"
    .header-enter-active
    .header-leave-active
        transition all .5s
    .header-enter
    .header-leave-active
        margin-top -($header-height)
    #header
        display flex
        flex-direction row
        align-items center
        justify-content space-between
        padding 0 1rem
        background-color #e7e7e7
        h1
            float left
            height $header-height
            line-height @height
            margin 0
            font-weight normal
            > a
                color #fff
        .nav
            float right
            margin 0
            padding 0
</style>
