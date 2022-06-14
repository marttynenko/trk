<template>
  <div class="ui-popup popup-news">
    <div class="ui-popup-close" @click.prevent="closeHandler"></div>
    <div class="ui-form-inner">
      <div class="ui-popup-body" v-if="!sendStatus">
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="sendForm">
            <div class="ui-form-header">
              <div class="ui-form-title">Прислать новость</div>
              <div class="ui-form-aftertitle">Хотите поделиться эксклюзивной новостью, интересными фото или видео?</div>
            </div>

              <div class="ui-form-group">
              <div class="row">
                <div class="col-md-4 col-us-6">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <div class="ui-field">
                      <input type="text" name="lastname" placeholder="Фамилия *" class="ui-input" v-model="form.lastname" :class="{invalid: errors.length}">
                      <div v-if="errors.length" class="ui-field-error">{{ errors[0] }}</div>
                    </div>
                  </ValidationProvider>
                </div>

                <div class="col-md-4 col-us-6">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <div class="ui-field">
                      <input type="text" name="name" placeholder="Имя *" class="ui-input" v-model="form.name" :class="{invalid: errors.length}">
                      <div v-if="errors.length" class="ui-field-error">{{ errors[0] }}</div>
                    </div>
                  </ValidationProvider>
                </div>

                <div class="col-md-4 col-us-6">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <div class="ui-field">
                      <input type="text" name="secondname" placeholder="Отчество *" class="ui-input" v-model="form.secondname" :class="{invalid: errors.length}">
                      <div v-if="errors.length" class="ui-field-error">{{ errors[0] }}</div>
                    </div>
                  </ValidationProvider>
                </div>

                <div class="col-md-4 col-us-6">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <div class="ui-field">
                      <input type="text" name="location" placeholder="Населенный пункт *" class="ui-input" v-model="form.location" :class="{invalid: errors.length}">
                      <div v-if="errors.length" class="ui-field-error">{{ errors[0] }}</div>
                    </div>
                  </ValidationProvider>
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
            </div><!--.group-->

            <div class="ui-form-group">
              <ValidationProvider mode="lazy" rules="required|min:20" v-slot="{ errors }">
                <div class="ui-field">
                  <label for="message" class="ui-field-label">Какой новостью вы хотите с нами поделиться? * </label>
                  <textarea name="message" id="message" rows="5" class="ui-input" :class="{invalid: errors.length}" v-model="form.message"></textarea>
                  <div v-if="errors.length" class="ui-field-error">{{ errors[0] }}</div>
                </div>
              </ValidationProvider>
            </div>

            <div class="ui-field">
              <div class="ui-field-label">Вложения</div>
              <label for="files" class="ui-files-area">
                <input type="file" name="files" id="files" multiple class="ui-files-area-input" @change="[choosedFiles($event), getFilesData($event)]" accept=".jpg,.jpeg,.png,.mov,.3gp,.avi,.mpeg">
                <div class="ui-files-area-previews"></div>
                <span class="ui-files-area-hint">перетащите или загрузите файлы <br>Допустимы следующие типы файлов: .jpg,.jpeg,.png,.mov,.3gp,.avi,.mpeg</span>
              </label>
              
            </div>

            <div class="ui-field">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <label for="agree" class="ui-checkbox">
                  <input type="checkbox" name="agree" id="agree" class="ui-checkbox-input" :class="{invalid: errors.length}" v-model="check" checked>
                  <span class="ui-checkbox-txt">Я принимаю условия пользовательского соглашения</span>
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

      <div class="ui-popup-status" v-else>
        <div class="ui-popup-msg">
          <div class="ui-popup-msg-title">Спасибо! Ваша новость отправлена!</div>
        </div>
        
      </div>


    </div>
  </div><!--.ui-popup-->
</template>

<script>
import filesHandler from '~/mixins/filesHandler'
import { ValidationObserver, ValidationProvider }  from 'vee-validate'
import '~/utils/validatorMethods'

import {mapActions} from 'vuex'

export default {
  props: {
    closeHandler: Function
  },

  components: {
    ValidationObserver, ValidationProvider
  },

  mixins: [filesHandler],

  data () {
    return {
      sendStatus: false,
      check: true,
      files: [],
      form: {
        name: '',
        lastname: '',
        secondname: '',
        location: '',
        phone: '',
        email: '',
        message: '',
      }
    }
  },

  methods: {
    ...mapActions({sendNews: 'forms/sendNews'}),

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
      FD.append("first_name", this.form.name);
      FD.append("last_name", this.form.lastname);
      FD.append("middle_name", this.form.secondname);
      FD.append("location", this.form.location);
      FD.append("email", this.form.email);
      FD.append("phone", this.form.phone);
      FD.append("message", this.form.message);
      for (let i = 0; i < this.files.length; i++) {
        FD.append('files[]', this.files[i]);
      }

      // const req = await this.$axios.$post(
      //   'http://bitrixvm.farbatest.com/api/send_news/',
      //   FD,
      //   {
      //     headers: {
      //       'Content-Type':'multipart/form-data; charset=UTF-8',
      //     }
      //   }
      // )
      // console.log(req)
      
      // if (req && req.status && req.status == 'ok') {
      //   this.sendStatus = true
      // }

      this.sendStatus = await this.sendNews(FD)
      console.log(this.sendStatus)
      // this.sendStatus = true
      // this.$axios.post('uri',this.form)
    }
  }
}
</script>