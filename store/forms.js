import config from '~/config'

export const state = () => ({
  pointFeedback: '/api/feedback',
  pointNews: '/api/send_news',
  pointRezume: '/api/send_resume'
})


export const actions = {
  async sendFeedback({state}, formData) {
    // return await sendForm(state.pointFeedback, formData)
    try {
      const req = await this.$axios.$post(
        config.APIserver+state.pointFeedback,
        formData,
        headers
      )
      
      if (req && req.status && req.status == 'ok') {
        return true
      }
      return false
    } catch (e) {
      console.log(e)
    }
  },

  async sendNews({state}, formData) {
    // return await sendForm(state.pointNews, formData)
    try {
      const req = await this.$axios.$post(
        config.APIserver+state.pointNews,
        formData,
        headers
      )
      
      if (req && req.status && req.status == 'ok') {
        return true
      }
      return false
    } catch (e) {
      console.log(e)
    }
  },

  async sendRezume({state}, formData) {
    try {
      const req = await this.$axios.$post(
        config.APIserver+state.pointRezume,
        formData,
        headers
      )
      if (req && req.status && req.status == 'ok') {
        return true
      }
      return false
    } catch (e) {
      console.log(e)
    }
  }
}

const headers = {
  headers: {
    'Content-Type':'multipart/form-data; charset=UTF-8',
  }
}

async function sendForm(url, formData) {
  const req = await this.$axios.$post(
    config.APIserver+url,
    formData,
    headers
  )
  
  console.log(req, url, formData)
  if (req && req.status && req.status == 'ok') {
    return true
  }
  return false
}