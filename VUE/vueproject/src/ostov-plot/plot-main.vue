<template lang="html">
  <div class="">
    <table border width="800" height="600">
      <tr><td align="center">все герои</td><td align="center">новый герой</td></tr> <!--ряд с ячейками заголовков-->
      <tr><td align="center">все главы</td><td align="center">новая глава</td></tr>
      <tr><td align="center">текст</td><td align="center">текущая глава</td></tr>
      <tr><td align="center"><textarea></textarea></td>
          <td align="center">
            <canvas
            id='canvas'
            width = "420"
            height = "420"
          ></canvas>
        </td>
      </tr> <!--ряд с ячейками тела таблицы-->

    </table>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
textarea {
 width: 400px; /* Ширина поля в процентах */
 height: 500px; /* Высота поля в пикселах */
 resize: none; /* Запрещаем изменять размер */
}
td {
  border-style: solid;
  border-width: 0;
  border-bottom: 1px;
}
</style>
