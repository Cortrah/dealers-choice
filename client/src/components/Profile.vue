<template>
    <div id="stage">

        <h1>{{ title }}</h1>

        <form class="pure-form pure-form-stacked">
            <fieldset>
                <div class="pure-g">
                    <div class="pure-u-1 pure-u-md-1-2">
                        <label for="email">
                            Email
                        </label>
                        <input id="email"
                               type="email"
                               placeholder="Email">

                        <label for="password">
                            Password
                        </label>
                        <input id="password"
                               type="password"
                               placeholder="Password">

                        <label for="userName">
                            Username
                        </label>
                        <input id="userName"
                               v-model="userName"
                               type="text"
                               placeholder="Mina"/>

                        <button @click="gotoLobby()"
                                class="pure-button pure-button-primary">
                            Goto the Lobby
                        </button>
                    </div>

                    <div class="pure-u-1 pure-u-md-1-2">
                         <div v-if="!botChecked" >
                             <img class="avatar"
                                  :src="selDog"/>
                             <select v-model="selDog">
                                 <option v-for="dog in dogs"
                                         :value="dog.img">
                                     {{ dog.name }}
                                 </option>
                             </select>
                         </div>
                        <div v-if="botChecked">
                            <img class="avatar"
                                 :src="selBot"/>
                            <select v-model="selBot">
                                <option v-for="bot in bots"
                                        :value="bot.img">
                                    {{ bot.name }}
                                </option>
                            </select>
                            <label for="ipAddress">
                                ip:
                            </label>
                            <input id="ipAddress"
                                   type="text"
                                   placeholder="https://123.122.1.2"/>
                            <label for="port">
                                Port
                            </label>
                            <input id="port"
                                   type="text"
                                   placeholder=":8080"/>
                        </div>
                        <div>
                            <label for="checkbox" >
                                <input id="checkbox"
                                       type="checkbox"
                                       v-model="botChecked">
                                Use a Bot
                            </label>
                        </div>
                    </div>
                </div>
        </fieldset>
    </form>
  </div>
</template>

<script type="text/babel">

    export default {
        name: 'Profile',
        props: ['store'],
        data () {
            return {
                userName: 'Mina',
                botChecked: false,
                selDog: this.store.dogAvatars[0].img,
                selBot: this.store.botAvatars[0].img,
                dogs: this.store.dogAvatars,
                bots: this.store.botAvatars,
                title: 'Profile'
            }
        },
        methods: {
            toggleGogo: function (amt) {
                this.displayGogo = !this.displayGogo;
            },
            gotoLobby: function () {
                // this.$children;
                let elem = document.getElementById('stage');
                window.TweenMax.to(elem, 0.5,
                    {height: 400, onComplete: this.go('lobby')});
            },
            go: function (route) {
                this.$route.router.go('/' + route);
            }
        }
    }
</script>
