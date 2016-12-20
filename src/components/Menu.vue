<template>
  <transition name="menu">
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

        <li>
          <a class="btn btn-menu btn-tag" title="文库" data-charlimit="10" tag="文库" role="tab" data-toggle="tab" href="#tabLibrary">
            <div class="iconWrapper"><i class="icon-books"></i></div>
          </a>
        </li>

        <li class="active">
          <a class="btn btn-menu btn-tag" title="Templates" data-charlimit="10" tag="Templates" role="tab" data-toggle="tab" href="#tabLayouts" aria-expanded="true">
            <div class="iconWrapper"><i class="icon-news"></i></div>
          </a>
        </li>

        <li>
          <a class="btn btn-menu btn-tag" title="Images" data-charlimit="10" tag="Images" role="tab" data-toggle="tab" href="#tabImages">
            <div class="iconWrapper"><i class="icon-camera"></i></div>
          </a>
        </li>

        <li>
          <a class="btn btn-menu btn-tag" title="Text" data-charlimit="10" tag="Text" role="tab" data-toggle="tab" href="#tabText">
            <div class="iconWrapper"><i class="icon-text-height"></i></div>
          </a>
        </li>

        <li>
          <a class="btn btn-menu btn-tag" title="Customise" data-charlimit="10" tag="Customise" role="tab" data-toggle="tab" href="#tabExtra">
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

  </transition>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['loggedIn'])
  }
}
</script>
<style lang="stylus">
@import "../assets/css/variable"
#tool-panel {
  top: 0;
  left: 0;
  bottom: 0;
  width: 395px;
  background-color: #414a4b;
}

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
  left: 395px;
  z-index: 5;
}

#canvas-panel.mode {
  border: 10px solid #ffdd17;
}

</style>
