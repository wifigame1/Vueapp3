<template>
  <v-container>
    <!-- กราฟ -->
    <v-row>
      <v-col cols="4">
        <v-card color="#BA25CB " dark>
          <v-card-title><div class="font-big">จำนวนลูกค้า</div></v-card-title>

          <v-card-text><div class="font-big">50 คน</div></v-card-text>

          <v-card-actions>
            <v-btn text>ข้อมูลลูกค้า</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card color="#25CB69" dark>
          <v-card-title><div class="font-big">จำนวนสินค้า</div></v-card-title>

          <v-card-text><div class="font-big">50 ชิ้น</div></v-card-text>

          <v-card-actions>
            <v-btn text>ข้อมูลจำนวนสินค้า</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card color="#2543CB" dark>
          <v-card-title><div class="font-big">จำนวนรายงาน</div></v-card-title>

          <v-card-text><div class="font-big">16 รายการ</div></v-card-text>

          <v-card-actions>
            <v-btn text>ข้อมูลรายการ</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto text-center" color="pink" dark>
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="value"
                color="rgba(117, 234, 85)"
                height="100"
                padding="24"
                line-width="1"
                stroke-linecap="round"
                smooth
              >
                <template v-slot:label="item"> {{ item.value }} ฿</template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="font-big">รายงานการขาย</div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="justify-center">
            <!-- <v-btn block text>Go to Report</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    value: [423, 446, 675, 510, 590, 610]
  })
};
</script>

<style scope>
.font-big {
  font-size: 30px;
}
</style>
