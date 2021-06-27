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
                    <div class="left">
                        {{record.contactname}}
                        <br>
                        {{record.contactnum}}
                    </div>

                    <div class="right" style="font-size:25px">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                </v-card-title>

                <v-divider class="mx-4"></v-divider>

                <v-card-text>
                  {{record.contactdescription}}
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
          contactname: 'Singapore Embassy (US)',
          contactnum: '+1-202-537-3100',
          contactdescription: 'Need help any overseas? Contact Singapore Embassy now!'
        },
        {
          contactname: 'Mayaguhan',
          contactnum: '+65 6123 5678',
          contactdescription: 'Call bodoh kambing susu'
        }
      ]      
    };
  },
};
</script>

<style scoped>
.v-sheet.v-card {
  width: 95%;
  margin: auto;
}

.left {
    width: 90%;
    text-align: left;
}
.right {
    float: right;
}

.v-card__title {
    dispay: flex;
}

</style>