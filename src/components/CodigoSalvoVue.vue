<template>
    <div id="home">
        <form  class="container">
            <div class="texto">
                <textarea
                    v-model="payload.codigo"
                    disabled
                    spellcheck="false"
                ></textarea>
            </div>
            <div class="info">
                <div class="infocontainer">
                    <div id="logo">
                        <span>CTRL</span> 
                        <span>-</span> 
                        <span>V</span>
                    </div>
                    <div class="btnNovo">
                        <router-link id="novo" to="/"><img class="btnIconNew" src="img/novo.svg" />Novo</router-link>
                    </div>
                    <div class="btnContainer">
                        <button 
                            @click="excluirCodigo" 
                            type="button"
                            class="excluirBtn"
                        >
                            <img class="btnIconDel" src="img/delete.svg" />
                            Excluir
                        </button>
                    </div>

                    <div class="btnContainer">
                        <button 
                            @click="editarCodigo" 
                            type="button" 
                            class="editarBtn"
                        >
                            <img class="btnIconEdit" src="img/edit.svg" />
                            Editar
                        </button>
                    </div>
                    
                    <div class="btnContainer">
                        <button
                            @click="salvarCodigo(payload.id)"
                            :disabled="!botaoSalvarHabilitado"
                            type="button" 
                            class="btn"
                        >
                            <img class="btnIcon" src="img/save.svg" />
                            Salvar
                        </button>
                    </div>
                    <div id="gitContainer">
                        <a href="https://github.com/CarlosAlberto133" target="_blank"><img id="gitImg" src="img/github.png" alt="GitHub" /></a>
                        <a id="git" href="https://github.com/CarlosAlberto133" target="_blank">Código Aberto</a>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app'
import { firebaseMixin } from '@/firebase/mixinFirebase'
import "firebase/compat/database"

export default {
    name: 'CodigoSalvoVue',
    props: [ 'id' ],
    mixins: [firebaseMixin],
    data: () => ({
        botaoSalvarHabilitado: false,
        payload: {}
    }),
    methods: {
        excluirCodigo() {
            const ref = firebase.database().ref()
            const fileRef = ref.child(`/${this.payload.id}`)

            fileRef.remove().then(() => {
                alert('Excluido com sucesso!')
                this.$router.push('/')
            }).catch((error) => {
                alert('Erro ao excluir o arquivo:', error)
            })
        },
        editarCodigo() {
            const textarea = document.querySelector("textarea");
            textarea.disabled = false

            document.querySelector('button.btn').classList.remove('salvar--desabilitado')

            this.botaoSalvarHabilitado = true
        },
        salvarCodigo(id) {
            const dbRef = firebase.database().ref(id)

            dbRef.update({
                codigo: this.payload.codigo
            }).then(() => {
                alert('Dados salvos com sucesso!')
                document.querySelector('button.btn').classList.add('salvar--desabilitado')
                const textarea = document.querySelector("textarea");
                textarea.disabled = true
                this.botaoSalvarHabilitado = false
            }).catch((error) => {
                alert('Erro ao salvar dados: ', error)
            });
        }
    }
}
</script>

<style scoped>

    textarea {
        padding: 30px;
    }

    button.btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .excluirBtn,
    .editarBtn {
        margin-top: 20px;
        width: 100%;
        height: 40px;
        background-color: #df4415;
        border: none;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }

    .editarBtn {
        background-color: #c2c06b;
    }

    .editarBtn:hover {
        background-color: #c9c894;
    }

    .excluirBtn:hover {
        background-color: #ec6035;
    }

    .btnNovo {
        margin: 90px 0 20px;
    }

    .btn {
        margin-top: 20px;
    }

    #gitContainer {
        margin-top: 180px; 
    }

    @media (max-width: 769px) {
        .info {
            height: 350px;
        }
        .btnNovo {
            margin-top: 20px;
        }
        .btn,
        .excluirBtn,
        .editarBtn {
            text-align: center;
            width: 50%;
            margin-top: 15px;
            height: 30px;
            font-size: 14px;
            border-radius: 3px;
        }
        #gitContainer {
            margin-top: 40px;
        }
        .btnIconEdit,
        .btnIconDel {
            width: 15px;
        }
        .btnIconDel {
            margin-right: 5px;
        }
    }

</style>