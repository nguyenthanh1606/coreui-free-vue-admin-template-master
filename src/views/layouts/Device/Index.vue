<template>
  <div>
    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          bordered
          small
          fixed
          caption="Danh sách thiết bị"
        />
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CTableWrapper from "../../base/Table";
import usersData from "../../users/UsersData";

export default {
  name: "DefaultDevice",
  components: { CTableWrapper },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },

    getShuffledUsersData() {
      return this.shuffleArray(usersData.slice(0));
    },
  },
};
</script>
