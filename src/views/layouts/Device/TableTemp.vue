<template>
  <div>
    <CCard>
      <CCardHeader>
        <slot name="header"> <CIcon name="cil-grid" /> {{ caption }} </slot>
      </CCardHeader>
      <CCardBody>
        <CDataTable
          :hover="hover"
          :striped="striped"
          :bordered="bordered"
          :small="small"
          :fixed="fixed"
          :items="items"
          :fields="fields"
          :items-per-page="small ? 10 : 5"
          :dark="dark"
          pagination
        >
          <template #status="{item}">
            <td>
              <CBadge :color="getBadge(item.status)">{{ item.status }}</CBadge>
            </td>
            <td>
              <CButton
                color="success"
                @click="successModal = true"
                class="mr-1"
              >
                Launch success modal
              </CButton>
            </td>
          </template>
        </CDataTable>
      </CCardBody>
    </CCard>
    <CModal title="Modal title" color="success" :show.sync="successModal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </CModal>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      successModal: false,
    };
  },
  props: {
    items: Array,
    fields: {
      type: Array,
      default() {
        return ["username", "registered", "role", "status", "#"];
      },
    },
    caption: {
      type: String,
      default: "Table",
    },
    hover: Boolean,
    striped: Boolean,
    bordered: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean,
  },
  methods: {
    getBadge(status) {
      return status === "Active"
        ? "success"
        : status === "Inactive"
        ? "secondary"
        : status === "Pending"
        ? "warning"
        : status === "Banned"
        ? "danger"
        : "primary";
    },
  },
};
</script>
