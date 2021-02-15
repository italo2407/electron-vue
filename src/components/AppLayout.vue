<template>
    <div class="bg-body">
        <Header />
        <div class="flex">
            <Sidebar />
            <slot></slot>   
        </div>
    </div>
</template>

<script>
    import Header from '../components/TheHeader.vue'
    import Sidebar from '../components/TheSidebar.vue'
    export default {
        name: 'Layout',
        components: {
            Header,
            Sidebar
        }
    }
</script>