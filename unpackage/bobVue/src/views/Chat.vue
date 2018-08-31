<template>
    <div class="chat-main">
        {{friendName}}
    </div>
</template>

<script>
export default {
    props: ['friendName'],
    data() {
        return {}
    }
}
</script>

<style scoped lang="scss">
.chat-main {
  width: 100%;
}
</style>