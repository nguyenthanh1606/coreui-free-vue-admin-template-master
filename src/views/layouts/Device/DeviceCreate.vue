<template>
  <div>
    <CRow>
      <CCol lg="12">
        <transition name="fade">
          <CCard v-if="show">
            <CCardHeader>
              <strong>Tạo thiết bị </strong><small>Form</small>
            </CCardHeader>
            <CCardBody>
              <CInput label="Company" placeholder="Enter your company name" />
              <CInput label="VAT" placeholder="PL1234567890" />
              <CInput label="Street" placeholder="Enter street name" />
              <CRow>
                <CCol sm="6">
                  <CInput label="Date" type="date" horizontal />
                </CCol>
                <CCol sm="6">
                  <CSelect
                    label="Select"
                    horizontal
                    :options="options"
                    placeholder="Please select"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol sm="8">
                  <CInput label="City" placeholder="Enter your city" />
                </CCol>
                <CCol sm="4">
                  <CInput label="Postal code" placeholder="Postal code" />
                </CCol>
              </CRow>
              <CInput label="Country" placeholder="Country name" />
              <div class="form-actions text-right">
                <CButton type="submit" color="primary" class="mr-2">Save changes</CButton>
                <CButton color="secondary">Cancel</CButton>
              </div>
            </CCardBody>
          </CCard>
        </transition>
      </CCol>
    </CRow>
  </div>
</template>
<script>
export default {
  name: "DeviceCreate",
  data() {
    return {
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label: "col-3", input: "col-9" },
      options: ["Option 1", "Option 2", "Option 3"],
      selectOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
        {
          value: "some value",
          label: "Selected option",
        },
      ],
      selectedOption: "some value",

      formCollapsed: true,
      checkboxNames: [
        "Checkboxes",
        "Inline Checkboxes",
        "Checkboxes - custom",
        "Inline Checkboxes - custom",
      ],
      radioNames: [
        "Radios",
        "Inline Radios",
        "Radios - custom",
        "Inline Radios - custom",
      ],
    };
  },
  methods: {
    validator(val) {
      return val ? val.length >= 4 : false;
    },
  },
};
</script>
