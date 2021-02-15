<template>
    <div class="flex-none h-screen bg-secondary-light">
        <div class="w-full bg-secondary-medium flex text-white items-center px-3 py-2 mt-3 cursor-pointer">
            <span class="text-lg pr-1"><font-awesome-icon :icon="cartIcon"/></span>
            <div :class="`${showFullMenu ? 'block': 'hidden'} ml-4 mr-2`">
                <p class="text-sm">Punto de Venta</p>
            </div>
        </div>
        <div class="w-full flex text-secondary-normal items-center px-3 py-2 hover:bg-secondary-medium hover:text-white cursor-pointer">
            <span class="text-lg pr-1"><font-awesome-icon :icon="usersIcon"/></span>
            <div :class="`${showFullMenu ? 'block': 'hidden'} ml-4 mr-2`">
                <p class="text-sm">Gestión de usuarios</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faShoppingCart, faUsers } from '@fortawesome/free-solid-svg-icons'

    export default {
        name: 'Sidebar',
        components: {
            FontAwesomeIcon
        },
        data () {
            return {
                cartIcon: faShoppingCart,
                usersIcon: faUsers,
                showFullMenu: false
            }
        },
        methods: {
            showHideFullMenu() {
                this.showFullMenu = !this.showFullMenu
            }
        },
        created() {
            this.$root.$on('showHideFullMenu', () => {
                 this.showFullMenu = !this.showFullMenu
            });
        }
    }
</script>