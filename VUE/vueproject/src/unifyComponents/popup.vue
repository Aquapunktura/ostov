<template>
  <div v-if="isOpen" class="backdrop" @click="close">
    <div class="popup" @click.stop>
      <h1>{{ headerText }}</h1>
      <hr />
      <slot></slot>
      <hr />
      <div class="footer">
        <slot name="actions" :close="close" :confirm="confirm">
          <button @click="close">Отмена</button>
          &nbsp;
          <button @click="confirm" class="confirm">Ok</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pop-up',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    headerText: {
      type: String,
      required: false,
      default: 'Внимание!'
    }
  },
  emits: {
    ok: null,
    close: null,
  },

  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  },

  methods: {
    handleKeydown(e) {
      if (this.isOpen && e.key === "Escape") {
        this.close();
      }
    },

    close() {
      this.$emit("close");
    },
    confirm() {
      this.$emit("ok");
    },
  },
};
</script>

<style>
.popup {
  top: 50px;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  z-index: 101;
  background-color: white;
  border-radius: 10px;
}
.confirm {
  background-color: #a8d6ff;
}
.confirm:hover {
  background-color: #89b1d5;
  color: #fff;
}

hr {
  margin: 10px;
}

.popup button {
  padding: 10px;
  border-radius: 17%;
}

.popup h1 {
  text-align: center;
  margin: 0;
}


.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
}

.footer {
  text-align: right;
}
</style>
