    <template>
    <div class="w-full flex">
        <div class="w-4/5 h-screen bg-terciary">
            <img src="../assets/img/Logo.png" class="my-16" alt="Logo"/>
        </div>
        <div class="w-full text-center my-24">
            <h1 class="text-3xl text-secondary-normal">Bienvenidos</h1>
            <br>
            <form @submit.prevent="signIn">
                <div class="w-4/5 mx-auto relative">
                    <input 
                        id="email"
                        v-model="form.username"
                        placeholder="Username" 
                        type="text" 
                        class="w-full px-2 py-3 border-solid border border-gray-300 rounded">
                    <span 
                        v-show="form.username.length > 0" 
                        class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-gray-500 cursor-pointer"
                        @click="cleanUsername"
                    >
                        <font-awesome-icon :icon="closeIcon" />
                    </span>
                </div>
                <br>
                <br>
                <div class="w-4/5 mx-auto relative">
                    <input 
                        id="password" 
                        v-model="form.password"
                        placeholder="Password" 
                        :type="showPassword ? 'text' : 'password'" 
                        class="w-full px-2 py-3 border-solid border border-gray-300 rounded"> 
                    <span 
                        class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-gray-500 cursor-pointer"
                        @click="showHidePassword"
                        v-show="form.password.length > 0"
                    >
                        <font-awesome-icon v-if="!showPassword" :icon="eyeIcon" />
                        <font-awesome-icon v-else :icon="eyeSlashIcon" />
                    </span>
                </div>
                <br>
                <br>
                <button 
                    :disabled="!enableLoginButton"
                    type="submit" 
                    :class="`w-4/5 px-2 py-3 ${enableLoginButton ? 'bg-primary-normal hover:bg-primary-bold' : 'bg-gray-300 hover:bg-gray-300 cursor-not-allowed'} text-white rounded`"
                >
                    Ingresar
                </button>
            </form>
        </div>
    </div>
    
</template>

<script> 
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faTimesCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
    
    export default {
        name: 'PageLogin',
        data () {
            return {
                closeIcon: faTimesCircle,
                eyeIcon: faEye,
                eyeSlashIcon: faEyeSlash,
                showPassword: false,
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        computed: {
            enableLoginButton() {
                return this.form.username.length > 0 && this.form.password.length > 0
            }
        },
        components: {
            FontAwesomeIcon
        },
        methods: {
            showHidePassword() {
                this.showPassword = !this.showPassword
            },
            cleanUsername() {
                this.form.username = ''
            },
            signIn() {
                window.ipcRenderer.send('resize', [1024, 700])
                this.$router.push({name: 'POS'})
            }
        }
    }
</script>

