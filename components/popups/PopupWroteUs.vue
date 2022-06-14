<template>
  <div class="ui-popup popup-news">
    <div class="ui-popup-close" @click.prevent="closeHandler"></div>
    <div class="ui-form-inner">

      <div class="ui-popup-body" v-if="!sendStatus">
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="sendForm">
            <div class="ui-form-header">
              <div class="ui-form-title">Написать нам</div>
              <div class="ui-form-aftertitle">Если у вас есть вопрос, мы будем рады вас выслушать и постараемся ответить.</div>
            </div>

              <div class="ui-form-group">
              <div class="row">
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
                      <input type="text" name="location" placeholder="Населенный пункт *" class="ui-input" v-model="form.location" :class="{invalid: errors.length}">
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
                  <label for="message" class="ui-field-label">Сообщение * </label>
                  <textarea name="message" id="message" rows="5" class="ui-input" :class="{invalid: errors.length}" v-model="form.message"></textarea>
                  <div v-if="errors.length" class="ui-field-error">{{ errors[0] }}</div>
                </div>
              </ValidationProvider>
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
          <div class="ui-popup-msg-title">Спасибо за заявку!</div>
          <p>В ближайше время ответ прийдет на вашу почту</p>
        </div>
      </div>
      


    </div>
  </div><!--.ui-popup-->
</template>

<script>
import {mapActions} from 'vuex'
import filesHandler from '~/mixins/filesHandler'
import { ValidationObserver, ValidationProvider }  from 'vee-validate'
import '~/utils/validatorMethods'

export default {
  props: {
    closeHandler: Function
  },

  components: {
    ValidationObserver,
    ValidationProvider
  },

  mixins: [filesHandler],

  data () {
    return {
      sendStatus: false,
      check: true,
      form: {
        name: '',
        location: '',
        email: '',
        message: ''
      }
    }
  },

  methods: {
    ...mapActions({sendFeedback: 'forms/sendFeedback'}),

    async sendForm () {

      const FD = new FormData();
      FD.append("name", this.form.name);
      FD.append("location", this.form.location);
      FD.append("email", this.form.email);
      FD.append("message", this.form.message);

      this.sendStatus = await this.sendFeedback(FD)
    }
  }
}
</script>