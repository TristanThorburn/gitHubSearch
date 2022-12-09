<template>
    <div v-if="profile">
        <h2>Heres the profile</h2>
        <!-- <p>{{ this.profile }}</p> -->
        <p><a :href="profilePath">GitHub link</a></p>
        <img :src="imagePath" alt="The avatar image of the searched user's profile">
        <p>Member since {{ moment(this.profile.created_at).format("MMM Do YY") }}</p>
        <p><a :href="reposPath">Public Repos: {{ this.profile.public_repos }}</a></p>
        <p>Followers: {{ this.profile.followers }}</p>
        <p>Following: {{ this.profile.following }}</p>
        <p>Hirable? {{ this.profile.hireable }}</p>
        <p>About: {{ this.profile.bio }}</p>
        <p>Located: {{ this.profile.location }}</p>
        <p>User Name: {{ this.profile.name }}</p>
        <p>User Website: <a :href="`https://` + websitePath"> {{ this.profile.blog }} </a></p>
    </div>
</template>

<script>
import moment from 'moment';

    export default {
        props:['profile'],
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

