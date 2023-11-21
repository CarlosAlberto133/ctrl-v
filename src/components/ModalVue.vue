<template>
    <div class="modal">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-content">
        <button class="modal-close" @click="closeModal">×</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ModalVue',
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .modal-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    position: relative;
  }
  
  .modal-close {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  </style>
  