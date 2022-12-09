<template>
    <div v-if="profile">
        <h2>PROFILE INFO COMPONENT</h2>

        <p><a :href="profilePath"><font-awesome-icon icon="fa-brands fa-github" />&nbsp;GitHub Page</a></p>

        <img :src="imagePath" alt="The avatar image of the searched user's profile">

        <p>Joined {{ moment(this.profile.created_at).format("MMM Do YY") }}</p>

        <p><a :href="reposPath"><font-awesome-icon icon="fa-solid fa-code" /></a> Total Repos: {{ this.profile.public_repos }}</p>

        <p>Followers: {{ this.profile.followers }}</p>

        <p>Following: {{ this.profile.following }}</p>

        <p v-if="this.profile.hireable === true">User is available for work</p>

        <p v-if="this.profile.bio === null"><font-awesome-icon icon="fa-solid fa-address-card" />This user has no bio</p>

        <p v-if="!this.profile.bio === null"><font-awesome-icon icon="fa-solid fa-address-card" /> {{ this.profile.bio }}</p>

        <p><font-awesome-icon icon="fa-solid fa-map-pin" />&nbsp;{{ this.profile.location }}</p>
        <p>User Name: {{ this.profile.name }}</p>
        
        <p><a :href="`https://` + websitePath"><font-awesome-icon icon="fa-solid fa-laptop" /> {{ this.profile.blog }} </a></p>
    </div>
</template>

<script>
import moment from 'moment';

    export default {
        props:[ 'profile' ],
        computed: {
            imagePath() {
                return `${this.profile?.avatar_url}`
            },
            profilePath() {
                return `${this.profile?.html_url}`
            },
            reposPath() {
                return `${this.profile?.html_url}?tab=repositories`
            },
            websitePath() {
                return `${this.profile?.blog}`
            }
        },
        methods:{ moment }
    }
</script>

