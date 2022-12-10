<template>

    <nav>

        <ul>
        <li><RouterLink to="/"><i class="fa-solid fa-house"></i></RouterLink></li>
        <li><RouterLink to="/about"><i class="fa-solid fa-circle-info"></i></RouterLink></li>
        </ul>

        <button><i class="fa-solid fa-moon"></i></button>
        <button><i class="fa-solid fa-sun"></i></button>

    </nav>

</template>

<script>
    import { RouterLink } from 'vue-router'
    export default {}
</script>