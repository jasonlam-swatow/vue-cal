<style>
  .view {
    transition: all .5s ease;
  }
  .cal-enter,
  .cal-leave {
    opacity: 0;
    transform: translate3d(10px, 0, 0);
  }
  [v-cloak] {
    display: none;
  }
</style>

<template>

  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" v-link="{ path: '/home' }"><i class="glyphicon glyphicon-bullhorn"></i> Vue 日曆</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
        <li class="active"><a href="/">主頁</a></li>
        <li role="separator" class="divider"></li>
        <li><a v-link="{ path: '/about' }">關於</a></li>
      </ul>
      </div>
    </div>
  </nav>

  <router-view class="view" transition="cal" transition-mode="out-in" keep-alive></router-view>

</template>