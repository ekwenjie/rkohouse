<template>
  <div>
    <div class="container">
      <h1>Emergency Contact</h1>
    </div>

    <div class="contact-list">
      <ul>
        <li v-for="(record, item) in contacts" :key="item">
          <container>
            <v-card>
              <v-card-title>
                <div class="left" style="font-size: 15px">
                  {{ record.contactname }}
                </div>

                <div class="right" style="font-size: 25px">
                  <i class="fas fa-phone-alt"></i>
                </div>
              </v-card-title>

              <v-divider class="mx-4"></v-divider>

              <v-card-text style="text-align: left">
                {{ record.contactinfo }}
                {{ record.emergencynum }}
                <br />
                {{ record.contacthrs }}
              </v-card-text>
            </v-card>
          </container>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "emergencyContact",
  data() {
    return {
      contacts: [
        {
          contactname:
            "Embassy of the Republic of Singapore - United States of America",
          contactinfo: "Tel: +1-202-537-3100",
          contacthrs:
            "Operating Hours: Mon - Fri | 8.30 am to 1.00pm / 2.00 pm to 5.00 pm | Closed on Weekends, US Federal Holidays and 9 August",
        },
        {
          contactname:
            "Consulate of the Republic of Singapore - United States of America (New York)",
          contactinfo: "Tel: +1-212-223-3331",
          contacthrs:
            "Operating Hours: Mon - Fri | 9.00 am to 1.00 pm | Closed on weekends and holidays | No walk-ins allowed. All consular services by appointment only.",
        },
        {
          contactname:
            "Consulate-General of the Republic of Singapore - United States of America (San Francisco)",
          contactinfo: "Tel: +1-415-543-4775",
          contacthrs:
            "Operating Hours:  - Fri | 8.30 am to 1.00 pm / 2.00 pm to 5.00 pm | Closed on Weekends, US Federal Holidays and 9 August",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-sheet.v-card {
  width: 95%;
  margin: auto;
}

li {
  list-style: none;
}

ul {
  padding-left: 0px;
}

.left {
  width: 80%;
  text-align: left;
}
.right {
  float: right;
  width: 20%;
}
</style>