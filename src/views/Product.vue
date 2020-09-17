<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <!--  -->

        <v-col cols="4"
          ><v-text-field
            v-model="no_p"
            :rules="no_pRules"
            :counter="10"
            label="รหัสสินค้า"
            required
          ></v-text-field
        ></v-col>

        <v-col cols="4">
          <v-text-field
            v-model="name_p"
            :counter="30"
            :rules="name_pRules"
            label="ชื่อสินค้า"
            required
          ></v-text-field
        ></v-col>

        <v-col cols="4"
          ><v-text-field
            v-model="n"
            :rules="nRules"
            :counter="10"
            label="จำนวนสินค้า"
            required
          ></v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="3"
          ><v-text-field
            v-model="w1"
            :rules="w1Rules"
            :counter="10"
            label="นํ้าหนักสินค้า"
            required
          ></v-text-field
        ></v-col>

        <v-col cols="3"
          ><v-text-field
            v-model="w2"
            :rules="w2Rules"
            :counter="10"
            label="ความกว้าง"
            required
          ></v-text-field
        ></v-col>

        <v-col cols="3"
          ><v-text-field
            v-model="w3"
            :rules="w3Rules"
            :counter="10"
            label="ความยาว"
            required
          ></v-text-field
        ></v-col>

        <v-col cols="3"
          ><v-text-field
            v-model="h"
            :rules="hRules"
            :counter="10"
            label="ความสูง"
            required
          ></v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="6"
          ><v-text-field
            v-model="coin_1"
            :rules="coin_1Rules"
            :counter="10"
            label="ราคาทุน"
            required
          ></v-text-field
        ></v-col>
        <v-col cols="6"
          ><v-text-field
            v-model="coin_2"
            :rules="coin_2Rules"
            :counter="10"
            label="ราคาขาย"
            required
          ></v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <v-col cols="3"
          ><v-text-field
            v-model="date1"
            :rules="date1Rules"
            :counter="10"
            label="วันเดือนปีรับเข้า"
            required
          ></v-text-field
        ></v-col>

        <v-col cols="3"
          ><v-text-field
            v-model="date2"
            :rules="date2Rules"
            :counter="10"
            label="วันเดือนปีผลิต"
            required
          ></v-text-field
        ></v-col>

        <v-col cols="3"
          ><v-text-field
            v-model="date3"
            :rules="date3Rules"
            :counter="10"
            label="วันเดือนปีขายล่าสุด"
            required
          ></v-text-field
        ></v-col>
      </v-row>

      <v-row>
        <!--  -->
        <v-col cols="4">
          <v-select
            v-model="select"
            :items="type"
            :rules="[v => !!v || 'กรุณาเลือกประเภทสินค้า']"
            label="ประเภทสินค้า"
            required
          ></v-select>
        </v-col>

        <v-col cols="4"
          ><v-text-field
            v-model="detail"
            :rules="detailules"
            :counter="300"
            label="รายละเอียดสินค้า"
            required
          ></v-text-field
        ></v-col>
      </v-row>

      <v-checkbox
        v-model="checkbox"
        :rules="checkboxRules"
        label="ตรวจสอบแล้ว"
        required
      ></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        เพิ่มสินค้า
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        เคลียร์
      </v-btn>

      <v-row>
        <v-col cols="12">
          <!-- ตารางแสดงข้อมูล -->
          <v-card>
            <v-card-title>
              ข้อมูลสินค้า
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>

      <!-- <v-btn
      color="warning"
      @click="resetValidation"
    >
      เคลียร์การตรวจสอบ
    </v-btn> -->
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,

    name_p: "",
    name_pRules: [
      v => !!v || "กรุณากรอกชื่อสินค้า",
      v => (v && v.length <= 30) || "ชื่อต้องมีขนาดไม่เกิน 30 ตัวอักษร"
    ],

    n: "",
    nRules: [
      v => !!v || "กรุณากรอกจำนวน",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    w: "",
    w1Rules: [
      v => !!v || "กรุณากรอกนํ้าหนัก",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    w2: "",
    w2Rules: [
      v => !!v || "กรุณากรอกนความกว้าง",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    w3: "",
    w3ules: [
      v => !!v || "กรุณากรอกความยาว",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    h: "",
    hRules: [
      v => !!v || "กรุณากรอกความสูง",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    coin_1: "",
    coin_1Rules: [
      v => !!v || "กรุณากรอกราคา",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],

    coin_2: "",
    coin_2Rules: [
      v => !!v || "กรุณากรอกราคา",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],

    no_p: "",
    no_pRules: [
      v => !!v || "กรุณากรอกรหัสสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],

    date1: "",
    date1Rules: [
      v => !!v || "กรุณากรอกวันเดือนปีรับเข้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],

    date2: "",
    date2Rules: [
      v => !!v || "กรุณากรอกวันเดือนปีผลิต",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],

    date3: "",
    date3Rules: [
      v => !!v || "กรุณากรอกวันเดือนปีขายล่าสุด",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],

    detail: "",
    detailRules: [
      v => !!v || "กรุณากรอกรายละเอียด",
      v => (v && v.length <= 300) || "ชื่อต้องมีขนาดไม่เกิน 300 ตัวอักษร"
    ],

    checkboxRules: [v => !!v || "คุณต้องตรวจสอบสินค้าก่อน"],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    type: [
      "ของเล่น",
      "เครื่องใช้ไฟฟ้า",
      "เครื่องครัว",
      "ของกิน",
      "เครื่องสำอาง"
    ],
    checkbox: false,

    search: "",
    headers: [
      { text: "รหัสสินค้า", value: "no_p" },
      {
        text: "ชื่อสินค้า",
        value: "name_p"
      },
      { text: "จำนวนสินค้า", value: "n" },
      { text: "จำนวนนํ้าหนัก", value: "w1" },
      { text: "ความกว้าง", value: "w2" },
      { text: "ความยาว", value: "w3" },
      { text: "ความสูง", value: "h" },
      { text: "ราคาทุน", value: "coin_1" },
      { text: "ราคาขาย", value: "coin_2" },
      { text: "วันเดือนปีรับเข้า", value: "date1" },
      { text: "วันเดือนปีผลิต", value: "date2" },
      { text: "วันเดือนปีขายล่าสุด", value: "date3" },
      { text: "ประเภทสินค้า", value: "type" },
      { text: "รายละเอียดสินค้า", value: "detail" }
    ],

    desserts: []
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        //   console.log(this.name);
        //   console.log(this.lastname);
        //   console.log(this.email);
        //   console.log(this.tel);
        //   console.log(this.select);
        //   console.log(this.a_number);
        //   console.log(this.a_group);
        //   console.log(this.a_lane);
        //   console.log(this.a_road);
        //   console.log(this.a_subdis);
        //   console.log(this.a_dis);
        //   console.log(this.a_province);

        this.desserts.push({
          name_p: `${this.name_p}`,
          no_p: `${this.no_p}`,
          n: `${this.n}`,
          w1: `${this.w1}`,
          w2: `${this.w2}`,
          w3: `${this.w3}`,
          h: `${this.h}`,

          coin_1: `${this.coin_1}`,
          coin_2: `${this.coin_2}`,
          date1: `${this.date1}`,
          date2: `${this.date2}`,
          date3: `${this.date3}`,
          type: `${this.select}`,
          detail: `${this.detail}`
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style></style>
