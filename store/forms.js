import config from '~/config'

export const state = () => ({
  pointFeedback: '/api/feedback',
  pointNews: '/api/send_news',
  pointRezume: '/api/send_resume'
})


export const actions = {
  async sendFeedback({commit, state}, formData) {
    return await sendForm(state.pointFeedback, formData)
  },

  async sendNews({state}, formData) {
    // return await sendForm(state.pointNews, formData)
    const req = await this.$axios.$post(
      config.APIserver+state.pointNews,
      formData,
      headers
    )
    
    if (req && req.status && req.status == 'ok') {
      return true
    }
    return false
  },

  async sendRezume({commit, state}, formData) {
    return await sendForm(state.pointRezume, formData)
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