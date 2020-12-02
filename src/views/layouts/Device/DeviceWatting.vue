<template>
  <div>
    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getShuffledDevicesData()"
          hover
          striped
          bordered
          small
          fixed
          caption="Thiết bị chờ đăng"
        />
      </CCol>
    </CRow>
  </div>
</template>
<script>
import CTableWrapper from "./TableTemp";
import devicesData from "../../../dbFake";
export default {
  name: "DeviceWatting",
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

    getShuffledDevicesData() {
      return this.shuffleArray(devicesData.slice(0));
    },
  },
};
</script>
