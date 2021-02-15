<template>
    <div class="bg-primary-normal w-full flex items-center justify-between">
        <div class="p-2 text-white">
            <span class="text-xl p-2" @click.prevent="showHideFullMenu"><font-awesome-icon :icon="hamburguerIcon" /></span>
            <span class="font-custom text-3xl font-black ml-5">Mama Rube</span>
            <span class="text-normal font-openSans ml-5">Punto de Venta</span>
        </div>
        <div class="flex items-center mr-8 relative cursor-pointer" v-click-outside="closeUserDropdown">
            <div class="flex items-center" @click.prevent="userDropdownOpen = !userDropdownOpen">
                <span class="bg-terciary rounded-full py-2 px-3">IB</span>
                <div class="ml-2 text-white flex">
                    <p>Italo Barboza</p>
                    <span class="text-xl ml-2"><font-awesome-icon :icon="downArrow"/></span>
                </div>
            </div>
            <div :class="`absolute z-50 top-12 right-0 w-full bg-primary-normal text-white ${userDropdownOpen ? 'block' : 'hidden'}`">
                <ul>
                    <li class="p-4 hover:bg-primary-bold cursor-pointer	">
                        <span class="mr-2"><font-awesome-icon :icon="logoutIcon"/></span> Salir
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import clickOutside from '@/directives/click-outside'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faBars, faAngleDown, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

    export default {
        name: 'Sidebar',
        directives: {
            clickOutside
        },
        components: {
            FontAwesomeIcon
        },
        data () {
            return {
                hamburguerIcon: faBars,
                downArrow: faAngleDown,
                logoutIcon: faSignOutAlt,
                userDropdownOpen: false
            }
        },
        methods: {
            showHideFullMenu() {
                this.$root.$emit('showHideFullMenu')
            },
            closeUserDropdown() {
                this.userDropdownOpen = false
            }

        }
    }
</script>
