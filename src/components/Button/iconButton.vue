<template>
    <div class="icon_Button">
        <img :src="img_url(imageUrl)" alt="icon" />
    </div>
</template>

<script>
export default {
    name:"IconButton",
    props:{
        imageUrl:String
    },
    methods:{
        img_url: function (path) {
            let images = require.context('../assets/', false, /\.png$|\.jpg$/)
            return images("./"+path)
        }
    }

}
</script>
<style>
    @import "../../styles/_variables.css";
    .icon_Button{
        width: 24px;
        height: 15px;
    }
    .icon_Button:hover{
        background: var(--75-purple-gray) 0% 0% no-repeat padding-box;
    }
</style>               