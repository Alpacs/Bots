<template>
  <header class="the-header">
    <img class="logo" src="./assets/logo.png">
  </header>
  <nav>
    <div><router-link to="/TransferPage">Трансфер</router-link></div>
    <div><router-link to="/BaggagePorterPage">Услуга по<br>транспортировке<br>багажа</router-link></div>
    <div><router-link to="/ServicesOfHalls">Услуги залов</router-link></div>
    <div><router-link to="/ShowerPage">Душ</router-link></div>
    <div><router-link to="/CardPayPage">Заказ карты Тройка</router-link></div>
    <div><router-link to="/FoodPage">Заказ еды</router-link></div>
    <div><router-link to="/PoputchickPage">"Попутчик"</router-link></div>
    <div><router-link to="/LastochkaCenterPage">"Ласточка.Точка"</router-link></div>
  </nav>
  <router-view/>
</template>

<style lang="scss">
  .the-header {
    position: absolute;
    padding-left: 20px; 
    padding-top: 20px;
    .logo {
      max-width: 150px;
    }
  }
  nav {
    position: absolute;
    padding: 130px 0 0 30px;
    text-align: left;
    div {
      margin-bottom: 20px;
    }
    a {
      font-size: 25px;
      font-weight: bold;
      color: #000000;
      margin-right: 27px;
      &.router-link-exact-active {
        color: #b91f46;
      }
    }
  }
</style>
