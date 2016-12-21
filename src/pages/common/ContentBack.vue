<template>

    <!--<div id="tool-panel">-->


        <!--&lt;!&ndash;<m-tabs type="card" @tab-click="handleClick">&ndash;&gt;-->
            <!--&lt;!&ndash;<m-tab-pane label="模板" icon="search">&ndash;&gt;-->
                <!--&lt;!&ndash;<Layout></Layout>&ndash;&gt;-->

            <!--&lt;!&ndash;</m-tab-pane>&ndash;&gt;-->
            <!--&lt;!&ndash;<m-tab-pane label="设置" icon="search">&ndash;&gt;-->
                <!--&lt;!&ndash;<Setting></Setting>&ndash;&gt;-->

            <!--&lt;!&ndash;</m-tab-pane>&ndash;&gt;-->
            <!--&lt;!&ndash;<m-tab-pane label="数据" icon="search">&ndash;&gt;-->
                <!--&lt;!&ndash;<Data-form></Data-form>&ndash;&gt;-->
            <!--&lt;!&ndash;</m-tab-pane>&ndash;&gt;-->
            <!--&lt;!&ndash;<m-tab-pane label="统计" icon="search">&ndash;&gt;-->
                <!--&lt;!&ndash;<Statistics></Statistics>&ndash;&gt;-->
            <!--&lt;!&ndash;</m-tab-pane>&ndash;&gt;-->
        <!--&lt;!&ndash;</m-tabs>&ndash;&gt;-->


    <!--</div>-->

    <div id="tool-panel">
        <div class="tool-menu">
            <ul>
                <li class="hide">
                    <a class="btn btn-menu btn-tag" title="教学指示" data-charlimit="10" tag="教学指示" role="tab" data-toggle="tab" href="#tabTutorial">
                        <div class="iconWrapper"><i class="ik k-search"></i></div>
                    </a>
                </li>

                <li>
                    <a class="btn btn-menu btn-tag" title="Search" data-charlimit="10" tag="Search" role="tab" data-toggle="tab" href="#tabSearch">
                        <div class="iconWrapper"><i class="icon-magnifying-glass"></i></div>
                    </a>
                </li>

                <li class="">
                    <a class="btn btn-menu btn-tag" title="文库" data-charlimit="10" tag="文库" role="tab" data-toggle="tab" href="#tabLibrary" aria-expanded="false">
                        <div class="iconWrapper"><i class="icon-books"></i></div>
                    </a>
                </li>

                <li class="active">
                    <a class="btn btn-menu btn-tag" title="Templates" data-charlimit="10" tag="Templates" role="tab" data-toggle="tab" href="#tabLayouts" aria-expanded="true">
                        <div class="iconWrapper"><i class="icon-news"></i></div>
                    </a>
                </li>

                <li class="">
                    <a class="btn btn-menu btn-tag" title="Images" data-charlimit="10" tag="Images" role="tab" data-toggle="tab" href="#tabImages" aria-expanded="false">
                        <div class="iconWrapper"><i class="icon-camera"></i></div>
                    </a>
                </li>

                <li class="">
                    <a class="btn btn-menu btn-tag" title="Text" data-charlimit="10" tag="Text" role="tab" data-toggle="tab" href="#tabText" aria-expanded="false">
                        <div class="iconWrapper"><i class="icon-text-height"></i></div>
                    </a>
                </li>

                <li class="">
                    <a class="btn btn-menu btn-tag" title="Customise" data-charlimit="10" tag="Customise" role="tab" data-toggle="tab" href="#tabExtra" aria-expanded="false">
                        <div class="iconWrapper"><i class="icon-round-brush"></i></div>
                    </a>
                </li>

                <li>
                    <a class="btn btn-menu btn-tag" title="导入" data-charlimit="10" tag="导入" role="tab" data-toggle="tab" href="#tabImport">
                        <div class="iconWrapper"><i class="icon-note_add"></i></div>
                    </a>
                </li>

                <li>
                    <a class="btn btn-menu btn-tag" title="设置" data-charlimit="10" tag="设置" role="tab" data-toggle="tab" href="#tabSettings">
                        <div class="iconWrapper"><i class="icon-sound-mix"></i></div>
                    </a>
                </li>


            </ul>

            <div class="help-menu">
                <a class="btn btn-menu btn-tag" title="帮助" data-charlimit="10" tag="帮助" id="help" href="#">
                    <div class="iconWrapper"><i class="icon-help"></i></div>
                </a>
            </div>

        </div>

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

            <div role="tabpanel" class="tab" id="tabLibrary"><div class="tab-content library accordion active">
                <div class="wrapper">
                    <dt>
                        <a class="btn btn-accordion" data-key="text" data-type="">
                            <i class="fa fa-font main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">Text</span>
                        </a>
                    </dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="logos" data-type="">
                            <i class="fa fa-certificate main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">标志</span>
                        </a>
                    </dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="colors" data-type="">
                            <i class="fa fa-paint-brush main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">颜色</span>
                        </a>
                    </dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="images" data-type="">
                            <i class="fa fa-picture-o main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">Images</span>
                        </a>
                    </dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="backgrounds" data-type="">
                            <i class="fa fa-th main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">Backgrounds</span>
                        </a>
                    </dt>
                </div>
            </div>
            </div>
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
                            <div class="antiscroll-inner" style="width: 295px; height: 480px;">
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
            <div role="tabpanel" class="tab" id="tabText"><div class="tab-content text accordion active">
                <div class="text">
                    <div class="thumbnail-wrapper"><div class="thumbnail" style="height: 0px;"><div class="line-container">
                        <a id="" class="item" data-popover="tooltip" data-original-title="Lato: 45px" style="font-size: 45px; font-family: Lato; height: 64px;"><span class="content avoid-shortcuts" style="height: 64px;">标题</span><span class="cursor" style="display: none;">|</span></a>

                        <input type="text">
                        <a href="#" class="toggle-options show"><i class="icon-sound-mix"></i></a>
                    </div>

                        <div class="menu options">
                            <ul>
                                <li class="fonts-list">
                                    <a class="btn btn-onmenu toggle">
                                        <i class="icon-font"></i>
                                        <span class="ui-dropdown-title">Lato</span>
                                        <i class="icon-unfold_more"></i>
                                    </a>
                                    <div class="ui-dropdown-items ui-dropdown-div" style="display: none;">
                                        <a style="font-family: Abril Fatface;" data-fontid="0">Abril Fatface</a>
                                        <a style="font-family: Alegreya SC;" data-fontid="1">Alegreya SC</a>
                                        <a style="font-family: Alfa Slab One;" data-fontid="2">Alfa Slab One</a>
                                        <a style="font-family: Alike;" data-fontid="3">Alike</a>
                                        <a style="font-family: Allerta Stencil;" data-fontid="4">Allerta Stencil</a>
                                        <a style="font-family: Allura;" data-fontid="5">Allura</a>
                                        <a style="font-family: Amaranth;" data-fontid="6">Amaranth</a>
                                        <a style="font-family: Antic;" data-fontid="7">Antic</a>
                                        <a style="font-family: Anton;" data-fontid="8">Anton</a>
                                        <a style="font-family: Architects Daughter;" data-fontid="9">Architects Daughter</a>
                                        <a style="font-family: Archivo Narrow;" data-fontid="10">Archivo Narrow</a>
                                        <a style="font-family: Arimo;" data-fontid="11">Arimo</a>
                                        <a style="font-family: Arvo;" data-fontid="12">Arvo</a>
                                        <a style="font-family: Autour One;" data-fontid="13">Autour One</a>
                                        <a style="font-family: Belleza;" data-fontid="14">Belleza</a>
                                        <a style="font-family: Berkshire Swash;" data-fontid="15">Berkshire Swash</a>
                                        <a style="font-family: Bigelow Rules;" data-fontid="16">Bigelow Rules</a>
                                        <a style="font-family: Black Ops One;" data-fontid="17">Black Ops One</a>
                                        <a style="font-family: Butcherman;" data-fontid="18">Butcherman</a>
                                        <a style="font-family: Cabin Sketch;" data-fontid="19">Cabin Sketch</a>
                                        <a style="font-family: Cantata One;" data-fontid="20">Cantata One</a>
                                        <a style="font-family: Cantora One;" data-fontid="21">Cantora One</a>
                                        <a style="font-family: Carter One;" data-fontid="22">Carter One</a>
                                        <a style="font-family: Chelsea Market;" data-fontid="23">Chelsea Market</a>
                                        <a style="font-family: Cherry Swash;" data-fontid="24">Cherry Swash</a>
                                        <a style="font-family: Chewy;" data-fontid="25">Chewy</a>
                                        <a style="font-family: Cinzel;" data-fontid="26">Cinzel</a>
                                        <a style="font-family: Clicker Script;" data-fontid="27">Clicker Script</a>
                                        <a style="font-family: Coda Caption;" data-fontid="28">Coda Caption</a>
                                        <a style="font-family: Codystar;" data-fontid="29">Codystar</a>
                                        <a style="font-family: Coming Soon;" data-fontid="30">Coming Soon</a>
                                        <a style="font-family: Courgette;" data-fontid="31">Courgette</a>
                                        <a style="font-family: Coustard;" data-fontid="32">Coustard</a>
                                        <a style="font-family: Crafty Girls;" data-fontid="33">Crafty Girls</a>
                                        <a style="font-family: Creepster;" data-fontid="34">Creepster</a>
                                        <a style="font-family: Crushed;" data-fontid="35">Crushed</a>
                                        <a style="font-family: Dancing Script;" data-fontid="36">Dancing Script</a>
                                        <a style="font-family: Devonshire;" data-fontid="37">Devonshire</a>
                                        <a style="font-family: Diplomata SC;" data-fontid="38">Diplomata SC</a>
                                        <a style="font-family: Dr Sugiyama;" data-fontid="39">Dr Sugiyama</a>
                                        <a style="font-family: Droid Serif;" data-fontid="40">Droid Serif</a>
                                        <a style="font-family: Economica;" data-fontid="41">Economica</a>
                                        <a style="font-family: Emilys Candy;" data-fontid="42">Emilys Candy</a>
                                        <a style="font-family: Engagement;" data-fontid="43">Engagement</a>
                                        <a style="font-family: Euphoria Script;" data-fontid="44">Euphoria Script</a>
                                        <a style="font-family: Fenix;" data-fontid="45">Fenix</a>
                                        <a style="font-family: Flamenco;" data-fontid="46">Flamenco</a>
                                        <a style="font-family: Fondamento;" data-fontid="47">Fondamento</a>
                                        <a style="font-family: Freckle Face;" data-fontid="48">Freckle Face</a>
                                        <a style="font-family: Fredoka One;" data-fontid="49">Fredoka One</a>
                                        <a style="font-family: Frijole;" data-fontid="50">Frijole</a>
                                        <a style="font-family: Germania One;" data-fontid="51">Germania One</a>
                                        <a style="font-family: Glass Antiqua;" data-fontid="52">Glass Antiqua</a>
                                        <a style="font-family: Glegoo;" data-fontid="53">Glegoo</a>
                                        <a style="font-family: Gochi Hand;" data-fontid="54">Gochi Hand</a>
                                        <a style="font-family: Graduate;" data-fontid="55">Graduate</a>
                                        <a style="font-family: Grand Hotel;" data-fontid="56">Grand Hotel</a>
                                        <a style="font-family: Great Vibes;" data-fontid="57">Great Vibes</a>
                                        <a style="font-family: Gruppo;" data-fontid="58">Gruppo</a>
                                        <a style="font-family: Gudea;" data-fontid="59">Gudea</a>
                                        <a style="font-family: Hammersmith One;" data-fontid="60">Hammersmith One</a>
                                        <a style="font-family: Hanuman;" data-fontid="61">Hanuman</a>
                                        <a style="font-family: IM Fell English SC;" data-fontid="62">IM Fell English SC</a>
                                        <a style="font-family: Joti One;" data-fontid="63">Joti One</a>
                                        <a style="font-family: Julius Sans One;" data-fontid="64">Julius Sans One</a>
                                        <a style="font-family: Kite One;" data-fontid="65">Kite One</a>
                                        <a style="font-family: Knewave;" data-fontid="66">Knewave</a>
                                        <a style="font-family: Lato;" data-fontid="67">Lato</a>
                                        <a style="font-family: Lemon;" data-fontid="68">Lemon</a>
                                        <a style="font-family: Libre Baskerville;" data-fontid="69">Libre Baskerville</a>
                                        <a style="font-family: Lilita One;" data-fontid="70">Lilita One</a>
                                        <a style="font-family: Lily Script One;" data-fontid="71">Lily Script One</a>
                                        <a style="font-family: Limelight;" data-fontid="72">Limelight</a>
                                        <a style="font-family: Lobster;" data-fontid="73">Lobster</a>
                                        <a style="font-family: Londrina Outline;" data-fontid="74">Londrina Outline</a>
                                        <a style="font-family: Londrina Shadow;" data-fontid="75">Londrina Shadow</a>
                                        <a style="font-family: Londrina Sketch;" data-fontid="76">Londrina Sketch</a>
                                        <a style="font-family: Lora;" data-fontid="77">Lora</a>
                                        <a style="font-family: Love Ya Like A Sister;" data-fontid="78">Love Ya Like A Sister</a>
                                        <a style="font-family: Lustria;" data-fontid="79">Lustria</a>
                                        <a style="font-family: Megrim;" data-fontid="80">Megrim</a>
                                        <a style="font-family: Miltonian Tattoo;" data-fontid="81">Miltonian Tattoo</a>
                                        <a style="font-family: Mr Dafoe;" data-fontid="82">Mr Dafoe</a>
                                        <a style="font-family: Mystery Quest;" data-fontid="83">Mystery Quest</a>
                                        <a style="font-family: Niconne;" data-fontid="84">Niconne</a>
                                        <a style="font-family: Nixie One;" data-fontid="85">Nixie One</a>
                                        <a style="font-family: Nunito;" data-fontid="86">Nunito</a>
                                        <a style="font-family: Open Sans;" data-fontid="87">Open Sans</a>
                                        <a style="font-family: Oregano;" data-fontid="88">Oregano</a>
                                        <a style="font-family: Over the Rainbow;" data-fontid="89">Over the Rainbow</a>
                                        <a style="font-family: PT Sans;" data-fontid="90">PT Sans</a>
                                        <a style="font-family: PT Serif;" data-fontid="91">PT Serif</a>
                                        <a style="font-family: Pacifico;" data-fontid="92">Pacifico</a>
                                        <a style="font-family: Parisienne;" data-fontid="93">Parisienne</a>
                                        <a style="font-family: Permanent Marker;" data-fontid="94">Permanent Marker</a>
                                        <a style="font-family: Pinyon Script;" data-fontid="95">Pinyon Script</a>
                                        <a style="font-family: Playfair Display SC;" data-fontid="96">Playfair Display SC</a>
                                        <a style="font-family: Prata;" data-fontid="97">Prata</a>
                                        <a style="font-family: Princess Sofia;" data-fontid="98">Princess Sofia</a>
                                        <a style="font-family: Prosto One;" data-fontid="99">Prosto One</a>
                                        <a style="font-family: Quando;" data-fontid="100">Quando</a>
                                        <a style="font-family: Quattrocento;" data-fontid="101">Quattrocento</a>
                                        <a style="font-family: Qwigley;" data-fontid="102">Qwigley</a>
                                        <a style="font-family: Racing Sans One;" data-fontid="103">Racing Sans One</a>
                                        <a style="font-family: Raleway;" data-fontid="104">Raleway</a>
                                        <a style="font-family: Ribeye;" data-fontid="105">Ribeye</a>
                                        <a style="font-family: Ribeye Marrow;" data-fontid="106">Ribeye Marrow</a>
                                        <a style="font-family: Roboto;" data-fontid="107">Roboto</a>
                                        <a style="font-family: Roboto Condensed;" data-fontid="108">Roboto Condensed</a>
                                        <a style="font-family: Rock Salt;" data-fontid="109">Rock Salt</a>
                                        <a style="font-family: Rokkitt;" data-fontid="110">Rokkitt</a>
                                        <a style="font-family: Rosario;" data-fontid="111">Rosario</a>
                                        <a style="font-family: Rum Raisin;" data-fontid="112">Rum Raisin</a>
                                        <a style="font-family: Ruthie;" data-fontid="113">Ruthie</a>
                                        <a style="font-family: Rye;" data-fontid="114">Rye</a>
                                        <a style="font-family: Sacramento;" data-fontid="115">Sacramento</a>
                                        <a style="font-family: Sanchez;" data-fontid="116">Sanchez</a>
                                        <a style="font-family: Satisfy;" data-fontid="117">Satisfy</a>
                                        <a style="font-family: Schoolbell;" data-fontid="118">Schoolbell</a>
                                        <a style="font-family: Shadows Into Light;" data-fontid="119">Shadows Into Light</a>
                                        <a style="font-family: Share Tech;" data-fontid="120">Share Tech</a>
                                        <a style="font-family: Share Tech Mono;" data-fontid="121">Share Tech Mono</a>
                                        <a style="font-family: Six Caps;" data-fontid="122">Six Caps</a>
                                        <a style="font-family: Sniglet;" data-fontid="123">Sniglet</a>
                                        <a style="font-family: Special Elite;" data-fontid="124">Special Elite</a>
                                        <a style="font-family: Stalemate;" data-fontid="125">Stalemate</a>
                                        <a style="font-family: Stint Ultra Expanded;" data-fontid="126">Stint Ultra Expanded</a>
                                        <a style="font-family: Stoke;" data-fontid="127">Stoke</a>
                                        <a style="font-family: Tangerine;" data-fontid="128">Tangerine</a>
                                        <a style="font-family: Text Me One;" data-fontid="129">Text Me One</a>
                                        <a style="font-family: The Girl Next Door;" data-fontid="130">The Girl Next Door</a>
                                        <a style="font-family: Trocchi;" data-fontid="131">Trocchi</a>
                                        <a style="font-family: Trykker;" data-fontid="132">Trykker</a>
                                        <a style="font-family: Ultra;" data-fontid="133">Ultra</a>
                                        <a style="font-family: UnifrakturMaguntia;" data-fontid="134">UnifrakturMaguntia</a>
                                        <a style="font-family: VT323;" data-fontid="135">VT323</a>
                                        <a style="font-family: Vampiro One;" data-fontid="136">Vampiro One</a>
                                        <a style="font-family: Vast Shadow;" data-fontid="137">Vast Shadow</a>
                                        <a style="font-family: Vidaloka;" data-fontid="138">Vidaloka</a>
                                        <a style="font-family: Volkhov;" data-fontid="139">Volkhov</a>
                                        <a style="font-family: Yellowtail;" data-fontid="140">Yellowtail</a>
                                        <a style="font-family: cwTeXFangSong;" data-fontid="141">cwTeXFangSong</a>
                                        <a style="font-family: cwTeXHei;" data-fontid="142">cwTeXHei</a>
                                        <a style="font-family: cwTeXKai;" data-fontid="143">cwTeXKai</a>
                                        <a style="font-family: cwTeXMing;" data-fontid="144">cwTeXMing</a>
                                        <a style="font-family: cwTeXYen;" data-fontid="145">cwTeXYen</a>
                                    </div>
                                </li>

                                <li class="bold-font">
                                    <a class="btn btn-onmenu" data-original-title="Bold" data-title="Bold">
                                        <i class="icon-bold2"></i>
                                    </a>
                                </li>

                                <li class="italic-font">
                                    <a class="btn btn-onmenu" data-original-title="Italic" data-title="Italic">
                                        <i class="icon-italic2"></i>
                                    </a>
                                </li>

                                <li class="underline-font">
                                    <a class="btn btn-onmenu" data-popover="tooltip" data-original-title="Underline" data-title="Underline">
                                        <i class="icon-underline2"></i>
                                    </a>
                                </li>

                                <li>
                                    <a class="btn btn-onmenu begin-edit" data-popover="tooltip" data-original-title="popupmenu.text_begin_edit.dropdown_title" data-title="popupmenu.text_begin_edit.dropdown_title">
                                        <i class="icon-edit"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div><div class="thumbnail" style="height: 0px;"><div class="line-container">
                        <a id="" class="item" data-popover="tooltip" data-original-title="Lato: 30px" style="font-size: 30px; font-family: Lato; height: 42px;"><span class="content avoid-shortcuts" style="height: 42px;">小标题</span><span class="cursor" style="display: none;">|</span></a>

                        <input type="text">
                        <a href="#" class="toggle-options show"><i class="icon-sound-mix"></i></a>
                    </div>

                        <div class="menu options">
                            <ul>
                                <li class="fonts-list">
                                    <a class="btn btn-onmenu toggle">
                                        <i class="icon-font"></i>
                                        <span class="ui-dropdown-title">Lato</span>
                                        <i class="icon-unfold_more"></i>
                                    </a>
                                    <div class="ui-dropdown-items ui-dropdown-div" style="display: none;">
                                        <a style="font-family: Abril Fatface;" data-fontid="0">Abril Fatface</a>
                                        <a style="font-family: Alegreya SC;" data-fontid="1">Alegreya SC</a>
                                        <a style="font-family: Alfa Slab One;" data-fontid="2">Alfa Slab One</a>
                                        <a style="font-family: Alike;" data-fontid="3">Alike</a>
                                        <a style="font-family: Allerta Stencil;" data-fontid="4">Allerta Stencil</a>
                                        <a style="font-family: Allura;" data-fontid="5">Allura</a>
                                        <a style="font-family: Amaranth;" data-fontid="6">Amaranth</a>
                                        <a style="font-family: Antic;" data-fontid="7">Antic</a>
                                        <a style="font-family: Anton;" data-fontid="8">Anton</a>
                                        <a style="font-family: Architects Daughter;" data-fontid="9">Architects Daughter</a>
                                        <a style="font-family: Archivo Narrow;" data-fontid="10">Archivo Narrow</a>
                                        <a style="font-family: Arimo;" data-fontid="11">Arimo</a>
                                        <a style="font-family: Arvo;" data-fontid="12">Arvo</a>
                                        <a style="font-family: Autour One;" data-fontid="13">Autour One</a>
                                        <a style="font-family: Belleza;" data-fontid="14">Belleza</a>
                                        <a style="font-family: Berkshire Swash;" data-fontid="15">Berkshire Swash</a>
                                        <a style="font-family: Bigelow Rules;" data-fontid="16">Bigelow Rules</a>
                                        <a style="font-family: Black Ops One;" data-fontid="17">Black Ops One</a>
                                        <a style="font-family: Butcherman;" data-fontid="18">Butcherman</a>
                                        <a style="font-family: Cabin Sketch;" data-fontid="19">Cabin Sketch</a>
                                        <a style="font-family: Cantata One;" data-fontid="20">Cantata One</a>
                                        <a style="font-family: Cantora One;" data-fontid="21">Cantora One</a>
                                        <a style="font-family: Carter One;" data-fontid="22">Carter One</a>
                                        <a style="font-family: Chelsea Market;" data-fontid="23">Chelsea Market</a>
                                        <a style="font-family: Cherry Swash;" data-fontid="24">Cherry Swash</a>
                                        <a style="font-family: Chewy;" data-fontid="25">Chewy</a>
                                        <a style="font-family: Cinzel;" data-fontid="26">Cinzel</a>
                                        <a style="font-family: Clicker Script;" data-fontid="27">Clicker Script</a>
                                        <a style="font-family: Coda Caption;" data-fontid="28">Coda Caption</a>
                                        <a style="font-family: Codystar;" data-fontid="29">Codystar</a>
                                        <a style="font-family: Coming Soon;" data-fontid="30">Coming Soon</a>
                                        <a style="font-family: Courgette;" data-fontid="31">Courgette</a>
                                        <a style="font-family: Coustard;" data-fontid="32">Coustard</a>
                                        <a style="font-family: Crafty Girls;" data-fontid="33">Crafty Girls</a>
                                        <a style="font-family: Creepster;" data-fontid="34">Creepster</a>
                                        <a style="font-family: Crushed;" data-fontid="35">Crushed</a>
                                        <a style="font-family: Dancing Script;" data-fontid="36">Dancing Script</a>
                                        <a style="font-family: Devonshire;" data-fontid="37">Devonshire</a>
                                        <a style="font-family: Diplomata SC;" data-fontid="38">Diplomata SC</a>
                                        <a style="font-family: Dr Sugiyama;" data-fontid="39">Dr Sugiyama</a>
                                        <a style="font-family: Droid Serif;" data-fontid="40">Droid Serif</a>
                                        <a style="font-family: Economica;" data-fontid="41">Economica</a>
                                        <a style="font-family: Emilys Candy;" data-fontid="42">Emilys Candy</a>
                                        <a style="font-family: Engagement;" data-fontid="43">Engagement</a>
                                        <a style="font-family: Euphoria Script;" data-fontid="44">Euphoria Script</a>
                                        <a style="font-family: Fenix;" data-fontid="45">Fenix</a>
                                        <a style="font-family: Flamenco;" data-fontid="46">Flamenco</a>
                                        <a style="font-family: Fondamento;" data-fontid="47">Fondamento</a>
                                        <a style="font-family: Freckle Face;" data-fontid="48">Freckle Face</a>
                                        <a style="font-family: Fredoka One;" data-fontid="49">Fredoka One</a>
                                        <a style="font-family: Frijole;" data-fontid="50">Frijole</a>
                                        <a style="font-family: Germania One;" data-fontid="51">Germania One</a>
                                        <a style="font-family: Glass Antiqua;" data-fontid="52">Glass Antiqua</a>
                                        <a style="font-family: Glegoo;" data-fontid="53">Glegoo</a>
                                        <a style="font-family: Gochi Hand;" data-fontid="54">Gochi Hand</a>
                                        <a style="font-family: Graduate;" data-fontid="55">Graduate</a>
                                        <a style="font-family: Grand Hotel;" data-fontid="56">Grand Hotel</a>
                                        <a style="font-family: Great Vibes;" data-fontid="57">Great Vibes</a>
                                        <a style="font-family: Gruppo;" data-fontid="58">Gruppo</a>
                                        <a style="font-family: Gudea;" data-fontid="59">Gudea</a>
                                        <a style="font-family: Hammersmith One;" data-fontid="60">Hammersmith One</a>
                                        <a style="font-family: Hanuman;" data-fontid="61">Hanuman</a>
                                        <a style="font-family: IM Fell English SC;" data-fontid="62">IM Fell English SC</a>
                                        <a style="font-family: Joti One;" data-fontid="63">Joti One</a>
                                        <a style="font-family: Julius Sans One;" data-fontid="64">Julius Sans One</a>
                                        <a style="font-family: Kite One;" data-fontid="65">Kite One</a>
                                        <a style="font-family: Knewave;" data-fontid="66">Knewave</a>
                                        <a style="font-family: Lato;" data-fontid="67">Lato</a>
                                        <a style="font-family: Lemon;" data-fontid="68">Lemon</a>
                                        <a style="font-family: Libre Baskerville;" data-fontid="69">Libre Baskerville</a>
                                        <a style="font-family: Lilita One;" data-fontid="70">Lilita One</a>
                                        <a style="font-family: Lily Script One;" data-fontid="71">Lily Script One</a>
                                        <a style="font-family: Limelight;" data-fontid="72">Limelight</a>
                                        <a style="font-family: Lobster;" data-fontid="73">Lobster</a>
                                        <a style="font-family: Londrina Outline;" data-fontid="74">Londrina Outline</a>
                                        <a style="font-family: Londrina Shadow;" data-fontid="75">Londrina Shadow</a>
                                        <a style="font-family: Londrina Sketch;" data-fontid="76">Londrina Sketch</a>
                                        <a style="font-family: Lora;" data-fontid="77">Lora</a>
                                        <a style="font-family: Love Ya Like A Sister;" data-fontid="78">Love Ya Like A Sister</a>
                                        <a style="font-family: Lustria;" data-fontid="79">Lustria</a>
                                        <a style="font-family: Megrim;" data-fontid="80">Megrim</a>
                                        <a style="font-family: Miltonian Tattoo;" data-fontid="81">Miltonian Tattoo</a>
                                        <a style="font-family: Mr Dafoe;" data-fontid="82">Mr Dafoe</a>
                                        <a style="font-family: Mystery Quest;" data-fontid="83">Mystery Quest</a>
                                        <a style="font-family: Niconne;" data-fontid="84">Niconne</a>
                                        <a style="font-family: Nixie One;" data-fontid="85">Nixie One</a>
                                        <a style="font-family: Nunito;" data-fontid="86">Nunito</a>
                                        <a style="font-family: Open Sans;" data-fontid="87">Open Sans</a>
                                        <a style="font-family: Oregano;" data-fontid="88">Oregano</a>
                                        <a style="font-family: Over the Rainbow;" data-fontid="89">Over the Rainbow</a>
                                        <a style="font-family: PT Sans;" data-fontid="90">PT Sans</a>
                                        <a style="font-family: PT Serif;" data-fontid="91">PT Serif</a>
                                        <a style="font-family: Pacifico;" data-fontid="92">Pacifico</a>
                                        <a style="font-family: Parisienne;" data-fontid="93">Parisienne</a>
                                        <a style="font-family: Permanent Marker;" data-fontid="94">Permanent Marker</a>
                                        <a style="font-family: Pinyon Script;" data-fontid="95">Pinyon Script</a>
                                        <a style="font-family: Playfair Display SC;" data-fontid="96">Playfair Display SC</a>
                                        <a style="font-family: Prata;" data-fontid="97">Prata</a>
                                        <a style="font-family: Princess Sofia;" data-fontid="98">Princess Sofia</a>
                                        <a style="font-family: Prosto One;" data-fontid="99">Prosto One</a>
                                        <a style="font-family: Quando;" data-fontid="100">Quando</a>
                                        <a style="font-family: Quattrocento;" data-fontid="101">Quattrocento</a>
                                        <a style="font-family: Qwigley;" data-fontid="102">Qwigley</a>
                                        <a style="font-family: Racing Sans One;" data-fontid="103">Racing Sans One</a>
                                        <a style="font-family: Raleway;" data-fontid="104">Raleway</a>
                                        <a style="font-family: Ribeye;" data-fontid="105">Ribeye</a>
                                        <a style="font-family: Ribeye Marrow;" data-fontid="106">Ribeye Marrow</a>
                                        <a style="font-family: Roboto;" data-fontid="107">Roboto</a>
                                        <a style="font-family: Roboto Condensed;" data-fontid="108">Roboto Condensed</a>
                                        <a style="font-family: Rock Salt;" data-fontid="109">Rock Salt</a>
                                        <a style="font-family: Rokkitt;" data-fontid="110">Rokkitt</a>
                                        <a style="font-family: Rosario;" data-fontid="111">Rosario</a>
                                        <a style="font-family: Rum Raisin;" data-fontid="112">Rum Raisin</a>
                                        <a style="font-family: Ruthie;" data-fontid="113">Ruthie</a>
                                        <a style="font-family: Rye;" data-fontid="114">Rye</a>
                                        <a style="font-family: Sacramento;" data-fontid="115">Sacramento</a>
                                        <a style="font-family: Sanchez;" data-fontid="116">Sanchez</a>
                                        <a style="font-family: Satisfy;" data-fontid="117">Satisfy</a>
                                        <a style="font-family: Schoolbell;" data-fontid="118">Schoolbell</a>
                                        <a style="font-family: Shadows Into Light;" data-fontid="119">Shadows Into Light</a>
                                        <a style="font-family: Share Tech;" data-fontid="120">Share Tech</a>
                                        <a style="font-family: Share Tech Mono;" data-fontid="121">Share Tech Mono</a>
                                        <a style="font-family: Six Caps;" data-fontid="122">Six Caps</a>
                                        <a style="font-family: Sniglet;" data-fontid="123">Sniglet</a>
                                        <a style="font-family: Special Elite;" data-fontid="124">Special Elite</a>
                                        <a style="font-family: Stalemate;" data-fontid="125">Stalemate</a>
                                        <a style="font-family: Stint Ultra Expanded;" data-fontid="126">Stint Ultra Expanded</a>
                                        <a style="font-family: Stoke;" data-fontid="127">Stoke</a>
                                        <a style="font-family: Tangerine;" data-fontid="128">Tangerine</a>
                                        <a style="font-family: Text Me One;" data-fontid="129">Text Me One</a>
                                        <a style="font-family: The Girl Next Door;" data-fontid="130">The Girl Next Door</a>
                                        <a style="font-family: Trocchi;" data-fontid="131">Trocchi</a>
                                        <a style="font-family: Trykker;" data-fontid="132">Trykker</a>
                                        <a style="font-family: Ultra;" data-fontid="133">Ultra</a>
                                        <a style="font-family: UnifrakturMaguntia;" data-fontid="134">UnifrakturMaguntia</a>
                                        <a style="font-family: VT323;" data-fontid="135">VT323</a>
                                        <a style="font-family: Vampiro One;" data-fontid="136">Vampiro One</a>
                                        <a style="font-family: Vast Shadow;" data-fontid="137">Vast Shadow</a>
                                        <a style="font-family: Vidaloka;" data-fontid="138">Vidaloka</a>
                                        <a style="font-family: Volkhov;" data-fontid="139">Volkhov</a>
                                        <a style="font-family: Yellowtail;" data-fontid="140">Yellowtail</a>
                                        <a style="font-family: cwTeXFangSong;" data-fontid="141">cwTeXFangSong</a>
                                        <a style="font-family: cwTeXHei;" data-fontid="142">cwTeXHei</a>
                                        <a style="font-family: cwTeXKai;" data-fontid="143">cwTeXKai</a>
                                        <a style="font-family: cwTeXMing;" data-fontid="144">cwTeXMing</a>
                                        <a style="font-family: cwTeXYen;" data-fontid="145">cwTeXYen</a>
                                    </div>
                                </li>

                                <li class="bold-font">
                                    <a class="btn btn-onmenu" data-original-title="Bold" data-title="Bold">
                                        <i class="icon-bold2"></i>
                                    </a>
                                </li>

                                <li class="italic-font">
                                    <a class="btn btn-onmenu" data-original-title="Italic" data-title="Italic">
                                        <i class="icon-italic2"></i>
                                    </a>
                                </li>

                                <li class="underline-font">
                                    <a class="btn btn-onmenu" data-popover="tooltip" data-original-title="Underline" data-title="Underline">
                                        <i class="icon-underline2"></i>
                                    </a>
                                </li>

                                <li>
                                    <a class="btn btn-onmenu begin-edit" data-popover="tooltip" data-original-title="popupmenu.text_begin_edit.dropdown_title" data-title="popupmenu.text_begin_edit.dropdown_title">
                                        <i class="icon-edit"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div><div class="thumbnail" style="height: 0px;"><div class="line-container">
                        <a id="" class="item" data-popover="tooltip" data-original-title="Lato: 20px" style="font-size: 20px; font-family: Lato; height: 28px;"><span class="content avoid-shortcuts" style="height: 28px;">正文文本</span><span class="cursor" style="display: none;">|</span></a>

                        <input type="text">
                        <a href="#" class="toggle-options show"><i class="icon-sound-mix"></i></a>
                    </div>

                        <div class="menu options">
                            <ul>
                                <li class="fonts-list">
                                    <a class="btn btn-onmenu toggle">
                                        <i class="icon-font"></i>
                                        <span class="ui-dropdown-title">Lato</span>
                                        <i class="icon-unfold_more"></i>
                                    </a>
                                    <div class="ui-dropdown-items ui-dropdown-div" style="display: none;">
                                        <a style="font-family: Abril Fatface;" data-fontid="0">Abril Fatface</a>
                                        <a style="font-family: Alegreya SC;" data-fontid="1">Alegreya SC</a>
                                        <a style="font-family: Alfa Slab One;" data-fontid="2">Alfa Slab One</a>
                                        <a style="font-family: Alike;" data-fontid="3">Alike</a>
                                        <a style="font-family: Allerta Stencil;" data-fontid="4">Allerta Stencil</a>
                                        <a style="font-family: Allura;" data-fontid="5">Allura</a>
                                        <a style="font-family: Amaranth;" data-fontid="6">Amaranth</a>
                                        <a style="font-family: Antic;" data-fontid="7">Antic</a>
                                        <a style="font-family: Anton;" data-fontid="8">Anton</a>
                                        <a style="font-family: Architects Daughter;" data-fontid="9">Architects Daughter</a>
                                        <a style="font-family: Archivo Narrow;" data-fontid="10">Archivo Narrow</a>
                                        <a style="font-family: Arimo;" data-fontid="11">Arimo</a>
                                        <a style="font-family: Arvo;" data-fontid="12">Arvo</a>
                                        <a style="font-family: Autour One;" data-fontid="13">Autour One</a>
                                        <a style="font-family: Belleza;" data-fontid="14">Belleza</a>
                                        <a style="font-family: Berkshire Swash;" data-fontid="15">Berkshire Swash</a>
                                        <a style="font-family: Bigelow Rules;" data-fontid="16">Bigelow Rules</a>
                                        <a style="font-family: Black Ops One;" data-fontid="17">Black Ops One</a>
                                        <a style="font-family: Butcherman;" data-fontid="18">Butcherman</a>
                                        <a style="font-family: Cabin Sketch;" data-fontid="19">Cabin Sketch</a>
                                        <a style="font-family: Cantata One;" data-fontid="20">Cantata One</a>
                                        <a style="font-family: Cantora One;" data-fontid="21">Cantora One</a>
                                        <a style="font-family: Carter One;" data-fontid="22">Carter One</a>
                                        <a style="font-family: Chelsea Market;" data-fontid="23">Chelsea Market</a>
                                        <a style="font-family: Cherry Swash;" data-fontid="24">Cherry Swash</a>
                                        <a style="font-family: Chewy;" data-fontid="25">Chewy</a>
                                        <a style="font-family: Cinzel;" data-fontid="26">Cinzel</a>
                                        <a style="font-family: Clicker Script;" data-fontid="27">Clicker Script</a>
                                        <a style="font-family: Coda Caption;" data-fontid="28">Coda Caption</a>
                                        <a style="font-family: Codystar;" data-fontid="29">Codystar</a>
                                        <a style="font-family: Coming Soon;" data-fontid="30">Coming Soon</a>
                                        <a style="font-family: Courgette;" data-fontid="31">Courgette</a>
                                        <a style="font-family: Coustard;" data-fontid="32">Coustard</a>
                                        <a style="font-family: Crafty Girls;" data-fontid="33">Crafty Girls</a>
                                        <a style="font-family: Creepster;" data-fontid="34">Creepster</a>
                                        <a style="font-family: Crushed;" data-fontid="35">Crushed</a>
                                        <a style="font-family: Dancing Script;" data-fontid="36">Dancing Script</a>
                                        <a style="font-family: Devonshire;" data-fontid="37">Devonshire</a>
                                        <a style="font-family: Diplomata SC;" data-fontid="38">Diplomata SC</a>
                                        <a style="font-family: Dr Sugiyama;" data-fontid="39">Dr Sugiyama</a>
                                        <a style="font-family: Droid Serif;" data-fontid="40">Droid Serif</a>
                                        <a style="font-family: Economica;" data-fontid="41">Economica</a>
                                        <a style="font-family: Emilys Candy;" data-fontid="42">Emilys Candy</a>
                                        <a style="font-family: Engagement;" data-fontid="43">Engagement</a>
                                        <a style="font-family: Euphoria Script;" data-fontid="44">Euphoria Script</a>
                                        <a style="font-family: Fenix;" data-fontid="45">Fenix</a>
                                        <a style="font-family: Flamenco;" data-fontid="46">Flamenco</a>
                                        <a style="font-family: Fondamento;" data-fontid="47">Fondamento</a>
                                        <a style="font-family: Freckle Face;" data-fontid="48">Freckle Face</a>
                                        <a style="font-family: Fredoka One;" data-fontid="49">Fredoka One</a>
                                        <a style="font-family: Frijole;" data-fontid="50">Frijole</a>
                                        <a style="font-family: Germania One;" data-fontid="51">Germania One</a>
                                        <a style="font-family: Glass Antiqua;" data-fontid="52">Glass Antiqua</a>
                                        <a style="font-family: Glegoo;" data-fontid="53">Glegoo</a>
                                        <a style="font-family: Gochi Hand;" data-fontid="54">Gochi Hand</a>
                                        <a style="font-family: Graduate;" data-fontid="55">Graduate</a>
                                        <a style="font-family: Grand Hotel;" data-fontid="56">Grand Hotel</a>
                                        <a style="font-family: Great Vibes;" data-fontid="57">Great Vibes</a>
                                        <a style="font-family: Gruppo;" data-fontid="58">Gruppo</a>
                                        <a style="font-family: Gudea;" data-fontid="59">Gudea</a>
                                        <a style="font-family: Hammersmith One;" data-fontid="60">Hammersmith One</a>
                                        <a style="font-family: Hanuman;" data-fontid="61">Hanuman</a>
                                        <a style="font-family: IM Fell English SC;" data-fontid="62">IM Fell English SC</a>
                                        <a style="font-family: Joti One;" data-fontid="63">Joti One</a>
                                        <a style="font-family: Julius Sans One;" data-fontid="64">Julius Sans One</a>
                                        <a style="font-family: Kite One;" data-fontid="65">Kite One</a>
                                        <a style="font-family: Knewave;" data-fontid="66">Knewave</a>
                                        <a style="font-family: Lato;" data-fontid="67">Lato</a>
                                        <a style="font-family: Lemon;" data-fontid="68">Lemon</a>
                                        <a style="font-family: Libre Baskerville;" data-fontid="69">Libre Baskerville</a>
                                        <a style="font-family: Lilita One;" data-fontid="70">Lilita One</a>
                                        <a style="font-family: Lily Script One;" data-fontid="71">Lily Script One</a>
                                        <a style="font-family: Limelight;" data-fontid="72">Limelight</a>
                                        <a style="font-family: Lobster;" data-fontid="73">Lobster</a>
                                        <a style="font-family: Londrina Outline;" data-fontid="74">Londrina Outline</a>
                                        <a style="font-family: Londrina Shadow;" data-fontid="75">Londrina Shadow</a>
                                        <a style="font-family: Londrina Sketch;" data-fontid="76">Londrina Sketch</a>
                                        <a style="font-family: Lora;" data-fontid="77">Lora</a>
                                        <a style="font-family: Love Ya Like A Sister;" data-fontid="78">Love Ya Like A Sister</a>
                                        <a style="font-family: Lustria;" data-fontid="79">Lustria</a>
                                        <a style="font-family: Megrim;" data-fontid="80">Megrim</a>
                                        <a style="font-family: Miltonian Tattoo;" data-fontid="81">Miltonian Tattoo</a>
                                        <a style="font-family: Mr Dafoe;" data-fontid="82">Mr Dafoe</a>
                                        <a style="font-family: Mystery Quest;" data-fontid="83">Mystery Quest</a>
                                        <a style="font-family: Niconne;" data-fontid="84">Niconne</a>
                                        <a style="font-family: Nixie One;" data-fontid="85">Nixie One</a>
                                        <a style="font-family: Nunito;" data-fontid="86">Nunito</a>
                                        <a style="font-family: Open Sans;" data-fontid="87">Open Sans</a>
                                        <a style="font-family: Oregano;" data-fontid="88">Oregano</a>
                                        <a style="font-family: Over the Rainbow;" data-fontid="89">Over the Rainbow</a>
                                        <a style="font-family: PT Sans;" data-fontid="90">PT Sans</a>
                                        <a style="font-family: PT Serif;" data-fontid="91">PT Serif</a>
                                        <a style="font-family: Pacifico;" data-fontid="92">Pacifico</a>
                                        <a style="font-family: Parisienne;" data-fontid="93">Parisienne</a>
                                        <a style="font-family: Permanent Marker;" data-fontid="94">Permanent Marker</a>
                                        <a style="font-family: Pinyon Script;" data-fontid="95">Pinyon Script</a>
                                        <a style="font-family: Playfair Display SC;" data-fontid="96">Playfair Display SC</a>
                                        <a style="font-family: Prata;" data-fontid="97">Prata</a>
                                        <a style="font-family: Princess Sofia;" data-fontid="98">Princess Sofia</a>
                                        <a style="font-family: Prosto One;" data-fontid="99">Prosto One</a>
                                        <a style="font-family: Quando;" data-fontid="100">Quando</a>
                                        <a style="font-family: Quattrocento;" data-fontid="101">Quattrocento</a>
                                        <a style="font-family: Qwigley;" data-fontid="102">Qwigley</a>
                                        <a style="font-family: Racing Sans One;" data-fontid="103">Racing Sans One</a>
                                        <a style="font-family: Raleway;" data-fontid="104">Raleway</a>
                                        <a style="font-family: Ribeye;" data-fontid="105">Ribeye</a>
                                        <a style="font-family: Ribeye Marrow;" data-fontid="106">Ribeye Marrow</a>
                                        <a style="font-family: Roboto;" data-fontid="107">Roboto</a>
                                        <a style="font-family: Roboto Condensed;" data-fontid="108">Roboto Condensed</a>
                                        <a style="font-family: Rock Salt;" data-fontid="109">Rock Salt</a>
                                        <a style="font-family: Rokkitt;" data-fontid="110">Rokkitt</a>
                                        <a style="font-family: Rosario;" data-fontid="111">Rosario</a>
                                        <a style="font-family: Rum Raisin;" data-fontid="112">Rum Raisin</a>
                                        <a style="font-family: Ruthie;" data-fontid="113">Ruthie</a>
                                        <a style="font-family: Rye;" data-fontid="114">Rye</a>
                                        <a style="font-family: Sacramento;" data-fontid="115">Sacramento</a>
                                        <a style="font-family: Sanchez;" data-fontid="116">Sanchez</a>
                                        <a style="font-family: Satisfy;" data-fontid="117">Satisfy</a>
                                        <a style="font-family: Schoolbell;" data-fontid="118">Schoolbell</a>
                                        <a style="font-family: Shadows Into Light;" data-fontid="119">Shadows Into Light</a>
                                        <a style="font-family: Share Tech;" data-fontid="120">Share Tech</a>
                                        <a style="font-family: Share Tech Mono;" data-fontid="121">Share Tech Mono</a>
                                        <a style="font-family: Six Caps;" data-fontid="122">Six Caps</a>
                                        <a style="font-family: Sniglet;" data-fontid="123">Sniglet</a>
                                        <a style="font-family: Special Elite;" data-fontid="124">Special Elite</a>
                                        <a style="font-family: Stalemate;" data-fontid="125">Stalemate</a>
                                        <a style="font-family: Stint Ultra Expanded;" data-fontid="126">Stint Ultra Expanded</a>
                                        <a style="font-family: Stoke;" data-fontid="127">Stoke</a>
                                        <a style="font-family: Tangerine;" data-fontid="128">Tangerine</a>
                                        <a style="font-family: Text Me One;" data-fontid="129">Text Me One</a>
                                        <a style="font-family: The Girl Next Door;" data-fontid="130">The Girl Next Door</a>
                                        <a style="font-family: Trocchi;" data-fontid="131">Trocchi</a>
                                        <a style="font-family: Trykker;" data-fontid="132">Trykker</a>
                                        <a style="font-family: Ultra;" data-fontid="133">Ultra</a>
                                        <a style="font-family: UnifrakturMaguntia;" data-fontid="134">UnifrakturMaguntia</a>
                                        <a style="font-family: VT323;" data-fontid="135">VT323</a>
                                        <a style="font-family: Vampiro One;" data-fontid="136">Vampiro One</a>
                                        <a style="font-family: Vast Shadow;" data-fontid="137">Vast Shadow</a>
                                        <a style="font-family: Vidaloka;" data-fontid="138">Vidaloka</a>
                                        <a style="font-family: Volkhov;" data-fontid="139">Volkhov</a>
                                        <a style="font-family: Yellowtail;" data-fontid="140">Yellowtail</a>
                                        <a style="font-family: cwTeXFangSong;" data-fontid="141">cwTeXFangSong</a>
                                        <a style="font-family: cwTeXHei;" data-fontid="142">cwTeXHei</a>
                                        <a style="font-family: cwTeXKai;" data-fontid="143">cwTeXKai</a>
                                        <a style="font-family: cwTeXMing;" data-fontid="144">cwTeXMing</a>
                                        <a style="font-family: cwTeXYen;" data-fontid="145">cwTeXYen</a>
                                    </div>
                                </li>

                                <li class="bold-font">
                                    <a class="btn btn-onmenu" data-original-title="Bold" data-title="Bold">
                                        <i class="icon-bold2"></i>
                                    </a>
                                </li>

                                <li class="italic-font">
                                    <a class="btn btn-onmenu" data-original-title="Italic" data-title="Italic">
                                        <i class="icon-italic2"></i>
                                    </a>
                                </li>

                                <li class="underline-font">
                                    <a class="btn btn-onmenu" data-popover="tooltip" data-original-title="Underline" data-title="Underline">
                                        <i class="icon-underline2"></i>
                                    </a>
                                </li>

                                <li>
                                    <a class="btn btn-onmenu begin-edit" data-popover="tooltip" data-original-title="popupmenu.text_begin_edit.dropdown_title" data-title="popupmenu.text_begin_edit.dropdown_title">
                                        <i class="icon-edit"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div></div>
                </div>

                <div class="margin"><span class="shadow"></span></div>
                <div class="banners"><div class="image-list"><div class="antiscroll-wrap">
                    <div class="antiscroll-inner" style="width: 295px; height: 85px;"><div class="thumbnailWrapper" style="position: relative; height: 500px;"><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 0px; opacity: 1; transform: scale(1); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/ooHGABXeWEM1U_qCYuzO.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 0px; opacity: 1; transform: translate3d(-120px, 10px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/pbyCABXeVfPFTX2Auxq3.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 96px; opacity: 1; transform: translate3d(0px, -76px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3-us-west-2.amazonaws.com/oregon.inkive.com/oregon/img/stickers/_joRABWbDo38tsZALbSP.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 96px; opacity: 1; transform: translate3d(-120px, -66px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/zPgsABXeVe4qDnBB1sWQ.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 192px; opacity: 1; transform: translate3d(0px, -152px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/fGW_ABXs8i-ydzNCRl0q.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 192px; opacity: 1; transform: translate3d(-120px, -142px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/U8vcABXuXTqRoo3A-W0T.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 288px; opacity: 1; transform: translate3d(0px, -228px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/9T4lABWbkga0wykBxUlN.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 288px; opacity: 1; transform: translate3d(-120px, -218px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/fhLRABWbksdy7ZJAcwNA.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 384px; opacity: 1; transform: translate3d(0px, -304px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/Cvk5ABWblcqQwMdCRDYu.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 384px; opacity: 1; transform: translate3d(-120px, -294px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/ltRSABWbltZVtC4BIn36.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 480px; opacity: 1; transform: translate3d(0px, -380px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/9bqaABWbmCl2YV_BrbuQ.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 480px; opacity: 1; transform: translate3d(-120px, -370px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/_oSwABWbmMPPL6nAvvUD.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 576px; opacity: 1; transform: translate3d(0px, -456px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/j0SyABWblBMG4bwAkg7Y.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 576px; opacity: 1; transform: translate3d(-120px, -446px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/ZfmpABWbm06BtSjBRPIe.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 672px; opacity: 1; transform: translate3d(0px, -532px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/CHrXABXeV51itWGCC7nr.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 672px; opacity: 1; transform: translate3d(-120px, -522px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3-us-west-2.amazonaws.com/oregon.inkive.com/oregon/img/stickers/pDEMABWbHlcpz88B10fi.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 768px; opacity: 1; transform: translate3d(0px, -608px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3-us-west-2.amazonaws.com/oregon.inkive.com/oregon/img/stickers/Fpj0ABWbHh08qCFCIFLI.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 768px; opacity: 1; transform: translate3d(-120px, -598px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/nyeJABWb2aMYwYXBjd9b.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 864px; opacity: 1; transform: translate3d(0px, -684px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/wQ9XABXeWJ_ecSKAa5qq.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 864px; opacity: 1; transform: translate3d(-120px, -674px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/qhb5ABWb3A7_75BAyhca.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 960px; opacity: 1; transform: translate3d(0px, -760px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/CE_QABXeWP_NbwcAAUmO.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 960px; opacity: 1; transform: translate3d(-120px, -750px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/codHABXeWSnqsWECHKLf.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 1056px; opacity: 1; transform: translate3d(0px, -836px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/k0zAABWb3TSKJhSAPk8-.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 1056px; opacity: 1; transform: translate3d(-120px, -826px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/FobTABWb2rQPJQMBBR9C.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 1152px; opacity: 1; transform: translate3d(0px, -912px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/ZyzOABXeWWGLOHHB9jAc.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 1152px; opacity: 1; transform: translate3d(-120px, -902px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/9KUlABWb3MJFhaJAiTe5.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 1248px; opacity: 1; transform: translate3d(0px, -988px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/xyk5ABWboAEQzLyAWXnm.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 1248px; opacity: 1; transform: translate3d(-120px, -978px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3-us-west-2.amazonaws.com/oregon.inkive.com/oregon/img/stickers/FpnfABWbHoPMyXgBxdRo.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 1344px; opacity: 1; transform: translate3d(0px, -1064px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3-us-west-2.amazonaws.com/oregon.inkive.com/oregon/img/stickers/ePsTABWbYh3bhH1B63Gn.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 1344px; opacity: 1; transform: translate3d(-120px, -1054px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3-us-west-2.amazonaws.com/oregon.inkive.com/oregon/img/stickers/Oj6aABWbYaC0arxBBejM.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 1440px; opacity: 1; transform: translate3d(0px, -1140px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/NsLMABWb2CLG9VMB3_1G.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 1440px; opacity: 1; transform: translate3d(-120px, -1130px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3-us-west-2.amazonaws.com/oregon.inkive.com/oregon/img/stickers/EFRRABWbZPvLermBVbUk.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 1536px; opacity: 1; transform: translate3d(0px, -1216px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3-us-west-2.amazonaws.com/oregon.inkive.com/oregon/img/stickers/Ksc2ABWbZF-Ql-BA0rdg.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 1536px; opacity: 1; transform: translate3d(-120px, -1206px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/GccSABXeVzv59d2AiEJn.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 1632px; opacity: 1; transform: translate3d(0px, -1292px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/YPDoABWb2NH_kJOBPr_R.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 1632px; opacity: 1; transform: translate3d(-120px, -1282px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/jEB_ABXeU-xBoQTBWRdM.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 1728px; opacity: 1; transform: translate3d(0px, -1368px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/mlWHABXuWgUMPRhCKZbZ.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 1728px; opacity: 1; transform: translate3d(-120px, -1358px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/lgMBABWb2Qn5-cSBeQwr.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 1824px; opacity: 1; transform: translate3d(0px, -1444px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/2fUrABWb2ZBybb-AfJRu.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 1824px; opacity: 1; transform: translate3d(-120px, -1434px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/llI1ABWb2Vw0ZOVAuPTx.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 1920px; opacity: 1; transform: translate3d(0px, -1520px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/NM7EABWbnlJGijqBZG2y.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 1920px; opacity: 1; transform: translate3d(-120px, -1510px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/RT_VABXsW3PbOvLBozSN.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 2016px; opacity: 1; transform: translate3d(0px, -1596px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/-BjTABXwKVkR_gICZoSJ.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 2016px; opacity: 1; transform: translate3d(-120px, -1586px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/cMsvABXuGNg-R37B3nHC.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 2112px; opacity: 1; transform: translate3d(0px, -1672px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/CopXABXuWj26S7SCQPym.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 2112px; opacity: 1; transform: translate3d(-120px, -1662px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/sywKABXuWAIVtPmAcerf.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 2208px; opacity: 1; transform: translate3d(0px, -1748px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/2frRABXuVtSRkeNBjsJ2.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 2208px; opacity: 1; transform: translate3d(-120px, -1738px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/sTMMABXuVr1NW89A-lUc.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 27px; top: 2304px; opacity: 1; transform: translate3d(0px, -1824px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/Yi1KABXiQuqSxbDBOMB-.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div><div class="thumbnail svg" style="width: 110px; height: 0px; position: absolute; left: 147px; top: 2304px; opacity: 1; transform: translate3d(-120px, -1814px, 0px); transition-property: transform, opacity; transition-duration: 0.4s;">
                        <a class="item" style="opacity: 1;">
                            <img id="" src="https://s3.amazonaws.com/assets.inkive.com/assets/img/stickers/KdytABXiS3zbU9YAgBDa.png" crossorigin="Anonymous" style="filter: grayscale(1) invert(1);">
                        </a>

                    </div></div></div>
                </div>
                </div></div>
            </div>
            </div>
            <div role="tabpanel" class="tab" id="tabImages"><div class="tab-content images accordion active">
                <div class="wrapper">
                    <dt style="position: relative; overflow: hidden; direction: ltr;">
                        <a class="btn btn-accordion" data-key="add" data-type="">
                            <i class="icon-plus main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">上传</span>
                        </a>
                        <input qq-button-id="3c4b399a-76a0-4c35-b75a-b807a4c3535d" title="file input" multiple="" accept="image/*;capture=camera" type="file" name="qqfile" style="position: absolute; right: 0px; top: 0px; font-family: Arial; font-size: 118px; margin: 0px; padding: 0px; cursor: pointer; opacity: 0; height: 100%;"></dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="project" data-type="">

                            <img class="assets/img/favicon-editor.png main" src="/assets/img/favicon-editor.png">
                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">本项目</span>
                        </a><div class="image-list content project"><div class="antiscroll-wrap">
                    <div class="antiscroll-inner" style="width: 295px; height: 422px;"><div class="thumbnailWrapper" style="position: relative; height: 96px;"><div class="thumbnail uploader" style="position: absolute; left: 27px; top: 0px; width: 110px; height: 86px;"><div class="uploader progress-button error plus" style="position: relative; overflow: hidden; direction: ltr;">
                        <svg class="progress-circle" width="70" height="70">
                            <path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z" style="stroke-dasharray: 204.244; stroke-dashoffset: 204.244;"></path>
                        </svg>

                        <svg class="checkmark" width="70" height="70">
                            <path d="m31.5,46.5l15.3,-23.2" style="stroke-dasharray: 27.7908; stroke-dashoffset: 27.7908;"></path>
                            <path d="m31.5,46.5l-8.5,-7.1" style="stroke-dasharray: 11.0752; stroke-dashoffset: 11.0752;"></path>
                        </svg>

                        <svg class="cross" width="70" height="70">
                            <path d="m35,35l-9.3,-9.3" style="stroke-dasharray: 13.1522; stroke-dashoffset: 0;"></path>
                            <path d="m35,35l9.3,9.3" style="stroke-dasharray: 13.1522; stroke-dashoffset: 0;"></path>
                            <path d="m35,35l-9.3,9.3" style="stroke-dasharray: 13.1522; stroke-dashoffset: 0;"></path>
                            <path d="m35,35l9.3,-9.3" style="stroke-dasharray: 13.1522; stroke-dashoffset: 0;"></path>
                        </svg>
                        <input qq-button-id="bcc911da-2bba-41be-b497-eb2942dd7fdd" title="file input" multiple="" accept="image/*;capture=camera" type="file" name="qqfile" style="position: absolute; right: 0px; top: 0px; font-family: Arial; font-size: 118px; margin: 0px; padding: 0px; cursor: pointer; opacity: 0; height: 100%;"></div>

                        <a class="item hidden">

                        </a>

                    </div></div></div>
                </div>
                </div>
                    </dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="other" data-type="">

                            <img class="assets/img/favicon-editor.png main" src="/assets/img/favicon-editor.png">
                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">别的项目</span>
                        </a>
                    </dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="search" data-type="">
                            <i class="icon-magnifying-glass main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">搜索</span>
                        </a>
                    </dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="facebookAlbums" data-type="">
                            <i class="icon-fbk main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">Facebook相册</span>
                        </a>
                    </dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="facebookPages" data-type="">
                            <i class="icon-fbk main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">Facebook页面</span>
                        </a>
                    </dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="instagram" data-type="">
                            <i class="icon-in main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">Instagram</span>
                        </a>
                    </dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="flickr" data-type="">
                            <i class="icon-fl main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">Flickr</span>
                        </a>
                    </dt>
                </div>
            </div>
            </div>
            <div role="tabpanel" class="tab" id="tabImport"></div>
            <div role="tabpanel" class="tab" id="tabExtra"><div class="tab-content customize accordion active">
                <div class="wrapper">
                    <dt>
                        <a class="btn btn-accordion" data-key="backgrounds" data-type="">
                            <i class="icon-backgrounds main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">Backgrounds</span>
                        </a>
                    </dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="placeholders" data-type="">
                            <i class="icon-image main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">Image Place Holders</span>
                        </a>
                    </dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="stickers" data-type="">
                            <i class="icon-hipster main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">Stickers</span>
                        </a>
                    </dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="shapes" data-type="">
                            <i class="icon-bug main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">形状</span>
                        </a>
                    </dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="grids" data-type="">
                            <i class="icon-grid main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">Grids</span>
                        </a>
                    </dt>
                    <dt>
                        <a class="btn btn-accordion" data-key="drawing" data-type="">
                            <i class="icon-pencil main"></i>

                            <i class="collapse fa fa-chevron-up hidden"></i>
                            <i class="back fa fa-chevron-left hidden"></i>
                            <span class="name">绘画</span>
                        </a>
                    </dt>
                </div>
            </div>
            </div>

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
    </div>
</template>

<style lang="stylus">
    @import "../../assets/css/variable"

    #tool-panel {
        top: 0;
        left: 0;
        bottom: 0;
        width: 595px;
        background-color: #ECEFF1;
    }

    #tool-panel
        .el-tabs__header
            position absolute
            width 80px
            height 100%
            top: 0;
            left 0
            bottom: 0;
            background-color: #2E343C
            .is-active
                background-color: $color-white-dark
                border: 0px solid #d3dce6;
                border-right-color: #fff;
                border-radius: 0;
        .el-tabs__content
            position absolute
            top 0
            bottom 0
            left 80px
            background-color: $color-white-dark
            display: block;
            float: left;
            height: 100%;
            width: 515px;
            padding: 10px 10px 20px;
            overflow-x: hidden;
            overflow-y: scroll;

        .el-tabs__item
            padding: 0 16px;
            height: 60px;
            width: 81px;
            box-sizing: border-box;
            line-height: 42px;
            float: left;
            list-style: none;
            font-size: 14px;
            color: #8492a6;
            margin-bottom: -1px;
            position: relative;
            > span
                display: inline-block;
                line-height: normal;
                vertical-align: middle;
                text-align: center;
                font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
                color: #99a9bf;
                padding-left: 10px;
                > i
                    display: block;
                    font-size: 22px;
                    margin-top: 10px;
                    color: #8492a6;

    #tool-panel .tool-content {
        display: block;
        float: left;
        height: 100%;
        width: 315px;
        padding: 10px 10px 20px;
    }

    .tool-content .tab {
        position: relative;
        display: none;
        height: 100%;
        overflow: hidden;
    }

    .tool-menu {
        display: block;
        float: left;
        height: 100%;
        width: 80px;
    }

    .tool-menu ul {
        height: 100%;
        background-color: #2b3031;
    }

    .tool-menu ul li {
        list-style: none;
        border-bottom: 1px solid #414a4b;
        height: 7vh;
        min-height: 50px;
        max-height: 70px;
        width: 90px;
    }

    .tool-menu ul li.active .btn-menu,
    .tool-menu ul li.active .btn-tag:after {
        color: #ffdd17;
    }

    .tool-menu ul li.active .btn-menu {
        background-color: #414a4b;
        border-right: 10px solid #ffdd17;
    }

    .tool-menu .help-menu {
        position: absolute;
        bottom: 25px;
        width: 90px;
        height: 7vh;
        min-height: 50px;
        max-height: 70px;
    }

    #canvas-panel {
        background-color: #ededed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 595px;
        z-index: 5;
    }

    #canvas-panel.mode {
        border: 10px solid #ffdd17;
    }

</style>
<script>

import {MTabs,MTabPane} from 'leven'
import {Layout,DataForm,Statistics,Setting} from './tabs'
export default {



        data(){
            return {
                options: [{
                          value: '选项1',
                          label: '黄金糕'
                        }, {
                          value: '选项2',
                          label: '双皮奶'
                        }, {
                          value: '选项3',
                          label: '蚵仔煎'
                        }, {
                          value: '选项4',
                          label: '龙须面'
                        }, {
                          value: '选项5',
                          label: '北京烤鸭'
                        }],
                  value: ''

            }
        },
        methods: {

            _init: function (callback) {

            },
            handleClick(e){
              console.log(e)

            }
        },
        components: {


            MTabs,
            MTabPane,
            Layout,
            DataForm ,
            Statistics,
            Setting



        }

    }



</script>