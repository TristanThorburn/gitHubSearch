<template>
    <div v-if="profile" class="profileInfoContainer">

        <section class="cardLeft">
            <div class="profileImg">
                <img :src="imagePath" alt="The avatar image of the searched user's profile" />
            </div>

            <p>DOB: {{ moment(profile.created_at).format("MMM Do YY") }}</p>
        </section>

        <section class="cardCenter">
            <div class="nameContainer">
                <p v-if="profile.name === null">The user's name is secret</p>

                <p v-else>{{ profile.name }}</p>
            </div>

            <div>
                <p v-if="profile.bio === null">There doesnt seem to be a bio</p>

                <p v-else>{{ profile.bio }}</p>
            </div>

            <div class="statsContainer">
                <p>
                    <a :href="reposPath"><font-awesome-icon icon="fa-solid fa-code" /></a>
                    Repos: {{ profile.public_repos }}
                </p>

                <p>Followers: {{ profile.followers }}</p>

                <p>Following: {{ profile.following }}</p>
            </div>

            <div class="directions">
                <div>
                    <p v-if="profile.location === null">
                        <font-awesome-icon icon="fa-solid fa-map-pin" />&nbsp;Covert Location
                    </p>

                    <p v-else>
                        <font-awesome-icon icon="fa-solid fa-map-pin" />&nbsp;{{ profile.location }}
                    </p>
                </div>

                <div>
                    <p v-if="profile.blog === ''">
                        <font-awesome-icon icon="fa-solid fa-laptop" />&nbsp;No User Website
                    </p>
                    
                    <p v-else>
                        <a :href="`https://` + websitePath">
                            <font-awesome-icon icon="fa-solid fa-laptop" /> {{ profile.blog }}
                        </a>
                    </p>
                </div>
            </div>

        </section>
        
        <section class="cardRight">
            <p>
                <a :href="profilePath">
                    <font-awesome-icon icon="fa-brands fa-github" />
                </a>
            </p>

            <div class="hirable">
                <p>Job Hunting?</p>
                <i v-if="profile.hireable === true" class="fa-solid fa-thumbs-up"></i>

                <i v-else class="fa-sharp fa-solid fa-thumbs-down"></i>
            </div>
        </section>
        
    </div>
</template>

<script>
import moment from 'moment';

    export default {
        name:'ProfileInfo',
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

