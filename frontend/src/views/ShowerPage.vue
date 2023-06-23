<template>
  <div class="wrapper-content">
    <h1>В вагонах поездов Федеральной пассажирской компании можно воспользоваться душем. Душ размещен в штабном вагоне.</h1>
    <p>Чтобы воспользоваться услугой, необходимо обратиться к проводнику вашего вагона. Оплата возможна как наличными деньгами, так и банковскими картами.</p>
    <p><b>Внимание!</b> Дети до 10 лет могут воспользоваться услугой только в сопровождении взрослых.</p>
    <h1 class="text-add-services">Доступны дополнительные услуги: </h1>
    <ul class="wrapper-price">
        <li>посещение душа без предоставления душевого комплекта – 150 руб.</li>
        <li>аренда комплекта полотенец (банное + для ног) – 150 руб.</li>
        <li>комплект средств для душа (гель, шампунь, шапочка для душа, мочалка) – 100 руб.</li>
        <li>одноразовые тапочки (материал ЭВА) – 100 руб.</li>
        <li>одноразовые тапочки – 50 руб.</li>
    </ul>
    <div class="wrapper-button">
      <button>Подробнее</button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      // text: this.$route.params['text']
    }
  },
  // mounted() {
  //   console.log(this.text)
  // },
  methods: {
    // async sendMessage(username) {
    //   let chat_id = await axios.post('http://localhost:8080/TR/getChatId', {
    //     params: {
    //       username: username
    //     },
    //     Headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(result => {
    //     return result.data
    //   })
    //   await axios.post('http://localhost:8080/TR/send_message', {
    //     params: {
    //       chat_id: chat_id,
    //       text: 'Доставлено'
    //     },
    //     Headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    // },
  }
}

</script>

<style lang="scss">
  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .wrapper-content {
    padding: 40px 50px 0 330px;
    .text-add-services {
      margin-top: 40px;
    }
    h1 {
      font-size: 30px;
      text-align: justify;
    }
    p {
      font-size: 27px;
      text-align: justify;
    }
    .wrapper-price {
      font-size: 24px;
      .price-var {
        display: flex;
        margin-bottom: 10px; 
        input {
          width: 20px;
          height: 20px;
          margin-right: 15px;
        }
      }
    }
    .wrapper-button {
      display: flex;
      justify-content: right;
      padding-right: 0px;
      button {
        background-color: white;
        width: 150px;
        height: 40px;
        border-radius: 10px;
        font-size: 23px;
      }
    }
  }
</style>
