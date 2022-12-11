<template>

    <nav>

        <ul>
            <li><RouterLink to="/"><i class="fa-solid fa-house"></i></RouterLink></li>
            <li><RouterLink to="/about"><i class="fa-solid fa-circle-info"></i></RouterLink></li>
        </ul>

        <button  @click="toggleTheme">
            <i v-if="this.theme === 'light-theme'" class="fa-solid fa-moon"></i>
            <i v-if="this.theme === 'dark-theme'" class="fa-solid fa-sun"></i>
        </button>
        
    </nav>

</template>

<script>
import { RouterLink } from 'vue-router'
    export default {
        name:'NavBar',
        data(){
            return{
                theme:'light-theme'
            }
        },
        methods:{
            toggleTheme() {
                console.log(document.documentElement)
                if(this.theme === 'light-theme'){
                    this.theme = 'dark-theme'
                    document.documentElement.classList.add('dark')
                } else {
                    this.theme = 'light-theme'
                    document.documentElement.classList.remove('dark')
                }
            }
        }
    }
</script>