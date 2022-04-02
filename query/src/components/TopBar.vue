<template>
    <div class="top-bar">
        <div class="logo"></div>
        <a href="javascript:;">关于</a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .top-bar {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 1920px;
        height: 85px;
        background: rgba(0, 95, 122, 0.88);
    }

    .logo {
        position: absolute;
        left: 43px;
        top: 3px;
        width: 287px;
        height: 71px;
        background: url('../assets/矩形 2.png');
    }
    .top-bar a {
        text-decoration: none;
        position: absolute;
        left: 1824px;
        top: 27px;
        width: 96px;
        height: 31px;
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
        font-weight: normal;
        letter-spacing: 0em;
        color: #FFFFFF;
    }
</style>