<template>
  <div class="ui-form rezume">
    <div class="ui-form-inner">
      <h2 class="ui-form-title">Прислать резюме</h2>
      <div class="ui-form-content" v-if="!sendStatus">
      <ValidationObserver v-slot="{ invalid }">
        <form id="form_rezume" @submit.prevent="sendForm">

          <div class="ui-form-group">
            <div class="row">
              <div class="col-md-4 col-us-6">
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <div class="ui-field">
                    <input type="text" name="last_name" placeholder="Фамилия *" class="ui-input" v-model="form.last_name" :class="{invalid: errors.length}">
                    <div v-if="errors.length" class="ui-field-error">{{ errors[0] }}</div>
                  </div>
                </ValidationProvider>
              </div>

              <div class="col-md-4 col-us-6">
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <div class="ui-field">
                    <input type="text" name="first_name" placeholder="Имя *" class="ui-input" v-model="form.first_name" :class="{invalid: errors.length}">
                    <div v-if="errors.length" class="ui-field-error">{{ errors[0] }}</div>
                  </div>
                </ValidationProvider>
              </div>

              <div class="col-md-4 col-us-6">
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <div class="ui-field">
                    <input type="text" name="middle_name" placeholder="Отчество *" class="ui-input" v-model="form.middle_name" :class="{invalid: errors.length}">
                    <div v-if="errors.length" class="ui-field-error">{{ errors[0] }}</div>
                  </div>
                </ValidationProvider>
              </div>

              <div class="col-md-4 col-us-6">
                <div class="ui-field">
                  <select name="position" id="" placeholder="Выберите вакансию" class="ui-input" v-model="form.vacancy">
                    <option
                      v-for="cat in categories"
                      :key="cat.ID"
                      :value="cat.NAME"
                    >{{cat.NAME}}</option>
                  </select>
                </div>
              </div>

              <div class="col-md-4 col-us-6">
                <ValidationProvider mode="lazy" rules="required|phone" v-slot="{ errors }">
                  <div class="ui-field">
                    <input type="tel" name="phone" placeholder="Номер телефона *" class="ui-input" v-model="form.phone" :class="{invalid: errors.length}">
                    <div v-if="errors.length" class="ui-field-error">{{ errors[0] }}</div>
                  </div>
                </ValidationProvider>
              </div>

              <div class="col-md-4 col-us-6">
                <ValidationProvider mode="lazy" rules="required|email" v-slot="{ errors }">
                  <div class="ui-field">
                    <input type="email" name="email" placeholder="Email *" class="ui-input" v-model="form.email" :class="{invalid: errors.length}">
                    <div v-if="errors.length" class="ui-field-error">{{ errors[0] }}</div>
                  </div>
                </ValidationProvider>
              </div>
            </div>
          </div>

          <div class="ui-form-group">
            <div class="ui-field">
              <label for="letters" class="ui-field-label">Сопроводительное письмо</label>
              <textarea name="letters" id="letters" rows="5" class="ui-input"></textarea>
            </div>
          </div>

          <div class="ui-field">
            <div class="ui-field-label">Резюме *</div>
            <ValidationProvider mode="lazy" rules="required" v-slot="{ errors }">
              <label for="files" class="ui-files-area">
                <input type="file" name="files" id="files" class="ui-files-area-input" @change="[choosedFiles($event), getFilesData($event)]" accept=".doc,.docx,.pdf,.rtf,.txt">
                <div class="ui-files-area-previews"></div>
                <span class="ui-files-area-hint">перетащите или загрузите файлы <br>Допустимы следующие типы файлов: .doc,.docx,.pdf,.rtf,.txt</span>
              </label>
              <div v-if="errors.length" class="ui-field-error">{{ errors[0] }}</div>
            </ValidationProvider>
          </div>

          <div class="ui-field">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label for="agree" class="ui-checkbox">
                <input type="checkbox" name="agree" id="agree" class="ui-checkbox-input" :class="{invalid: errors.length}" v-model="check" checked>
                <span class="ui-checkbox-txt">Я принимаю условия пользовательcкого соглашения</span>
                <div v-if="errors.length" class="ui-field-error">{{ errors[0] }}</div>
              </label>
            </ValidationProvider>
          </div>

          <div class="ui-field-submit">
            <button class="ui-btn" :disabled="invalid">Отправить</button>
          </div>


        </form>
      </ValidationObserver>
      </div>

      <div class="ui-form-success" v-else>Спасибо! Ваша заявка отправлена!</div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import filesHandler from '~/mixins/filesHandler'
import { ValidationObserver, ValidationProvider }  from 'vee-validate'
import '~/utils/validatorMethods'

export default {
  components: {
    ValidationObserver, ValidationProvider
  },

  mixins: [filesHandler],

  async fetch() {
    await this.$store.dispatch('vacancies/fetchCategories')
  },

  data () {
    return {
      sendStatus: false,
      check: true,
      files: [],
      form: {
        first_name: '',
        last_name: '',
        middle_name: '',
        vacancy: '',
        phone: '',
        email: '',
        message: '',
        resume: ''
      }
    }
  },

  computed: {
    ...mapGetters({categories: 'vacancies/getCategories'})
  },

  methods: {
    ...mapActions({sendRezume: 'forms/sendRezume'}),

    getFilesData(e) {
      console.log(e.target.files)
      this.files.splice(0, this.files.length)
      if (e.target.files && e.target.files[0]) {
        console.log(e.target.files)
        for (let i = 0; i < e.target.files.length; i++) {
          this.files.push(e.target.files[i]);
        }
      } else {
        this.files.splice(0, this.files.length)
      }
    },

    async sendForm () {
      const FD = new FormData();
      FD.append("first_name", this.form.first_name);
      FD.append("last_name", this.form.last_name);
      FD.append("middle_name", this.form.middle_name);
      FD.append("email", this.form.email);
      FD.append("phone", this.form.phone);
      FD.append("message", this.form.message);
      for (let i = 0; i < this.files.length; i++) {
        FD.append('resume', this.files[i]);
      }


      this.sendStatus = await this.sendRezume(FD)
      console.log(this.sendStatus,FD)
    }
  },

  mounted () {
    this.form.vacancy = this.categories[0].NAME
  }
}
</script>