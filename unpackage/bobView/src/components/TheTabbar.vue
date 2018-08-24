<template>
    <div>
        <ul class="nav-list">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                key: '是是是'
            }
        },
        methods: {
            name() {
                
            }
        },
    }
</script>

<style scoped lang="scss">
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        ul{
            list-style: none;
            overflow: hidden;
            li{
                width: 25%;
                float: left;
                height: px2rem(80px);;
                &:nth-child(1){
                    background: #000;
                }
                &:nth-child(2){
                    background: #f60;
                }
                &:nth-child(3){
                    background: #f00;
                }
                &:nth-child(4){
                    background: #09f;
                }
            }
        }
    }
</style>