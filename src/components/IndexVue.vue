<template>
    <div id="home">
        <form  class="container">
            <div class="texto">
                <div class="line-numbers">
                    <div>1</div>
                </div>
                <textarea 
                    v-model="codigo"
                    @input="countLines"
                    spellcheck="false"
                ></textarea>

                <modal-vue v-if="showModal" @close="closeModal" >
                    <h2>Link de compartilhamento!</h2>
                    <input type="text" v-model="link" />
                </modal-vue>

            </div>
            <div class="info">
                <div class="infocontainer">
                    <div id="logo">
                        <span>CTRL</span> 
                        <span>-</span> 
                        <span>V</span>
                    </div>
                    <div class="btnNovo">
                        <a 
                            id="novo" 
                            href="#"
                        >
                            <img class="btnIconNew" src="img/novo.svg" />
                            Novo
                        </a>
                    </div>
                    <div class="btnContainer">
                        <button 
                            @click="criarCodigo" 
                            type="submit" 
                            class="btn"
                        >
                            <img class="btnIcon" src="img/save.svg" />
                            Salvar
                        </button>
                    </div>
                    <div id="gitContainer">
                        <a 
                            href="https://github.com/CarlosAlberto133" 
                            target="_blank"
                        >
                            <img id="gitImg" src="img/github.png" alt="GitHub" />
                        </a>
                        <a 
                            id="git" 
                            href="https://github.com/CarlosAlberto133" 
                            target="_blank"
                        >
                            Código Aberto
                        </a>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import ModalVue from './ModalVue.vue';
import { firebaseMixin } from '@/firebase/mixinFirebase'
import firebase from 'firebase/compat/app';
import "firebase/compat/database";

export default {
    name: 'IndexVue',
    props: [ 'id' ],
    mixins: [firebaseMixin],
    components: {
        ModalVue
    },
    data: () => ({
        codigo: '',
        payload: {},
        showModal: false,
        link: ''
    }),
    methods: {
        countLines() {
			const textarea = document.querySelector("textarea");
            const lineNumbers = document.querySelector(".line-numbers");
            const lines = textarea.value.split("\n");
            lineNumbers.innerHTML = "";
            for (let i = 1; i <= lines.length; i++) {
                lineNumbers.innerHTML += "<div>" + i + "</div>";
            }

            const maxRows = 23; // número máximo de linhas

            textarea.addEventListener("input", function() {
            var lines = textarea.value.split("\n");
            if (lines.length > maxRows) {
                textarea.value = lines.slice(0, maxRows).join("\n");
            }
            });
		},
        criarCodigo(e) {
            e.preventDefault()
            
            
            const ref = firebase.database().ref()
            const id = ref.push().key

            const payload  = {
                id,
                codigo: this.codigo,
            }
            
            if(this.codigo === '') {
                alert('campo vazio')
            } else {
                console.log('teste')
                ref.child(id).set(payload, err => {
                    if(err) {
                        alert('Ops, algo deu errado, tente novamente xD')
                    } else {
                        this.showModal = true
                        this.link = `https://ctrl-v-vercel-carlos-alberto-claudio-de-limas-projects.vercel.app/${payload.id}`
                        this.codigo = ''
                    }
                })
            }
        },
        closeModal() {
            this.showModal = false;
            window.open(this.link)
        }
    }
}
</script>

<style scoped>

    input {
        margin-top: 20px;
        font-size: 15px;
        padding: 10px;
        border-radius: 7px;
        width: 100%;
    }

</style>